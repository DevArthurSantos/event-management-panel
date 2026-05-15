'use client';

import { canCheckin } from '@/src/infra/helpers/business/can-checkin';
import { calculateEntryRate } from '@/src/infra/helpers/calculate-entry-rate';
import { Event } from '@/src/infra/schemas/event.schema';
import { Participant } from '@/src/infra/schemas/participant.schema';
import { createCheckin } from '@/src/infra/services/checkin.service';
import { updateEvent } from '@/src/infra/services/event.service';
import { updateParticipant } from '@/src/infra/services/participant.service';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

interface Params {
  event: Event;
  participant: Participant;
}

export function useCheckinMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      event,
      participant,
    }: Params) => {
      const validation = canCheckin(
        event,
        participant,
      );

      if (!validation.allowed) {
        throw new Error(validation.reason);
      }

      await createCheckin({
        event_id: event.id,
        participant_id: participant.id,

        timestamp: new Date().toISOString(),

        success: true,

        action: 'entry',

        error_reason: null,
      });

      await updateParticipant(
        participant.id,
        {
          status: 'inside',

          checkin_count:
            participant.checkin_count + 1,
        },
      );

      await updateEvent(event.id, {
        checkin_count:
          event.checkin_count + 1,

        entry_rate: calculateEntryRate(
          event.expected_count,
          event.checkin_count + 1,
        ),
      });

      return true;
    },

    onSuccess: () => {
      toast.success(
        'Check-in realizado com sucesso',
      );

      queryClient.invalidateQueries({
        queryKey: ['events'],
      });

      queryClient.invalidateQueries({
        queryKey: ['participants'],
      });

      queryClient.invalidateQueries({
        queryKey: ['checkins'],
      });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}