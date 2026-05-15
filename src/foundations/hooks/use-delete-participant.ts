'use client';

import { getErrorMessage } from '@infra/helpers/getErrorMessage';
import { deleteParticipant } from '@infra/services/participant.service';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';


export function useDeleteParticipant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteParticipant,

    onSuccess: () => {
      toast.success(
        'Participante removido',
      );

      queryClient.invalidateQueries({
        queryKey: ['participants'],
      });
    },


    onError: (error: unknown) => {
      toast.error(getErrorMessage(error, 'Erro ao remover participante'));
    },
  });
}