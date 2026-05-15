'use client';

import { getErrorMessage } from '@infra/helpers/getErrorMessage';
import { Event } from '@infra/schemas/event/event.schema';
import { Participant } from '@infra/schemas/participant/participant.schema';
import { createCheckin } from '@infra/services/checkin.service';
import { useMutation } from '@tanstack/react-query';

import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

interface Params {
  event: Event;
  participant: Participant;
}

export function useOptimisticCheckin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      event,
      participant,
    }: Params) => {
      return createCheckin({
        id: crypto.randomUUID(),

        event_id: event.id,

        participant_id:
          participant.id,

        timestamp:
          new Date().toISOString(),

        success: true,

        action: 'entry',

        error_reason: null,
      });
    },

    onMutate: async ({
      event,
      participant,
    }) => {
      await queryClient.cancelQueries({
        queryKey: [
          'participants',
          event.id,
        ],
      });

      const previousParticipants =
        queryClient.getQueryData<
          Participant[]
        >([
          'participants',
          event.id,
        ]);

      queryClient.setQueryData<
        Participant[]
      >(
        ['participants', event.id],

        (old = []) =>
          old.map((item) =>
            item.id === participant.id
              ? {
                ...item,

                status: 'inside',

                checkin_count:
                  item.checkin_count + 1,
              }
              : item,
          ),
      );

      return {
        previousParticipants,
      };
    },

    onError: (
      _,
      variables,
      context,
    ) => {
      queryClient.setQueryData(
        [
          'participants',
          variables.event.id,
        ],

        context?.previousParticipants,
      );

      toast.error(getErrorMessage(undefined, 'Erro ao realizar check-in'));

    },


    onSuccess: () => {
      toast.success(
        'Check-in realizado',
      );
    },

    onSettled: (_, __, variables) => {
      queryClient.invalidateQueries({
        queryKey: [
          'participants',
          variables.event.id,
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          'checkins',
          variables.event.id,
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          'event',
          variables.event.id,
        ],
      });
    },
  });
}