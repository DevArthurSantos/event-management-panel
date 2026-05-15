'use client';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';

import { createParticipant } from '@/src/infra/services/participant.service';
import { getErrorMessage } from '@/src/infra/helpers/getErrorMessage';

export function useCreateParticipant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createParticipant,

    onSuccess: () => {
      toast.success(
        'Participante criado',
      );

      queryClient.invalidateQueries({
        queryKey: ['participants'],
      });
    },


    onError: (error: unknown) => {
      toast.error(getErrorMessage(error, 'Erro ao criar participante',));
    },
  });
}