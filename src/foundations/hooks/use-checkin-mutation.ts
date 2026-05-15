'use client';

import { canCheckin } from '@infra/helpers/business/can-checkin';
import { calculateEntryRate } from '@infra/helpers/calculate-entry-rate';
import { getErrorMessage } from '@infra/helpers/getErrorMessage';
import { Event } from '@infra/schemas/event/event.schema';
import { Participant } from '@infra/schemas/participant/participant.schema';
import { createCheckin } from '@infra/services/checkin.service';
import { updateEvent } from '@infra/services/event.service';
import { updateParticipant } from '@infra/services/participant.service';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface Params {
  event: Event;
  participant: Participant;
  action: 'entry' | 'exit';
}

export function useCheckinMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ event, participant, action }: Params) => {
      if (action === 'exit') {
        if (participant.type !== 'vip') {
          return { success: false, reason: 'Apenas VIPs podem registrar saída.' };
        }
        if (participant.status !== 'inside') {
          return { success: false, reason: 'Participante não está dentro do evento.' };
        }

        await createCheckin({
          event_id: event.id,
          participant_id: participant.id,
          timestamp: new Date().toISOString(),
          success: true,
          action: 'exit',
          error_reason: null,
        });

        await updateParticipant(participant.id, {
          status: 'outside',
        });

        return { success: true, action: 'exit' };
      }

      if (participant.type === 'vip' && participant.status === 'inside') {
        return {
          success: false,
          reason: 'VIP já está dentro. Faça a saída primeiro.',
        };
      }

      const validation = canCheckin(event, participant);
      if (!validation.allowed) {
        await createCheckin({
          event_id: event.id,
          participant_id: participant.id,
          timestamp: new Date().toISOString(),
          success: false,
          action: 'entry',
          error_reason: validation.errorKey || validation.reason,
        });

        await updateEvent(event.id, { error_count: event.error_count + 1 });

        return { success: false, reason: validation.reason };
      }

      await createCheckin({
        event_id: event.id,
        participant_id: participant.id,
        timestamp: new Date().toISOString(),
        success: true,
        action: 'entry',
        error_reason: null,
      });

      await updateParticipant(participant.id, {
        status: 'inside',
        checkin_count: participant.checkin_count + 1,
      });

      await updateEvent(event.id, {
        checkin_count: event.checkin_count + 1,
        entry_rate: calculateEntryRate(event.expected_count, event.checkin_count + 1),
      });

      return { success: true, action: 'entry' };
    },

    onSuccess: (data, variables) => {
      const { event } = variables;
      
      if (data.success) {
        toast.success(
          data.action === 'exit'
            ? 'Saída registrada com sucesso!'
            : 'Check-in realizado com sucesso!'
        );
      } else {
        toast.error(data.reason || 'Ação não permitida');
      }

      queryClient.invalidateQueries({ queryKey: ['event', event.id] });
      queryClient.invalidateQueries({ queryKey: ['participants', event.id] });
      queryClient.invalidateQueries({ queryKey: ['checkins', event.id] });
    },

    onError: (error: unknown) => {
      toast.error(getErrorMessage(error, 'Erro inesperado'));
    },
  });
}