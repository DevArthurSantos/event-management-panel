'use client';

import { canCheckin } from '@/src/infra/helpers/business/can-checkin';
import { calculateEntryRate } from '@/src/infra/helpers/calculate-entry-rate';
import { Event } from '@/src/infra/schemas/event/event.schema';
import { Participant } from '@/src/infra/schemas/participant/participant.schema';
import { createCheckin } from '@/src/infra/services/checkin.service';
import { updateEvent } from '@/src/infra/services/event.service';
import { updateParticipant } from '@/src/infra/services/participant.service';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface Params {
  event: Event;
  participant: Participant;
}

export function useCheckinMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ event, participant }: Params) => {
      const validation = canCheckin(event, participant);

      if (!validation.allowed) {
        await createCheckin({
          event_id: event.id,
          participant_id: participant.id,
          timestamp: new Date().toISOString(),
          success: false,
          action: "entry",
          error_reason: validation.errorKey || validation.reason,
        });

        await updateEvent(event.id, {
          error_count: event.error_count + 1,
        });

        return {
          success: false,
          reason: validation.reason,
        };
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
        entry_rate: calculateEntryRate(
          event.expected_count,
          event.checkin_count + 1
        ),
      });

      return {
        success: true,
      };
    },

    onSuccess: (data, variables) => {
      const { event } = variables;

      if (data.success) {
        toast.success('Check-in realizado com sucesso');
      } else {
        toast.error(data.reason || 'Check-in negado');
      }

      queryClient.invalidateQueries({
        queryKey: ['participants', event.id],
      });

      queryClient.invalidateQueries({
        queryKey: ['event', event.id],
      });

      queryClient.invalidateQueries({
        queryKey: ['checkins', event.id],
      });
    },

    onError: (error: Error) => {
      // aqui só erro técnico (rede, crash, etc)
      toast.error('Erro inesperado: ' + error.message);
    },
  });
}