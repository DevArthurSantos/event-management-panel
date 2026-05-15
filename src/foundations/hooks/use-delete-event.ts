'use client';

import { getErrorMessage } from '@infra/helpers/getErrorMessage';
import { deleteEvent } from '@infra/services/event.service';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEvent,

    onSuccess: () => {
      toast.success(
        'Evento removido',
      );

      queryClient.invalidateQueries({
        queryKey: ['events'],
      });
    },

    onError: (error: unknown) => {
      toast.error(getErrorMessage(error, 'Erro ao remover evento'));
    },
  });
}