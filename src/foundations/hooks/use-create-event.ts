'use client';

import { getErrorMessage } from '@/src/infra/helpers/getErrorMessage';
import { createEvent } from '@/src/infra/services/event.service';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';


export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEvent,

    onSuccess: () => {
      toast.success(
        'Evento criado com sucesso',
      );

      queryClient.invalidateQueries({
        queryKey: ['events'],
      });
    },

    onError: (error: unknown) => {
      toast.error(getErrorMessage(error, 'Erro ao criar evento'));
    },
  });
}