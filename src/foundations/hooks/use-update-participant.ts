'use client';

import { updateParticipant } from '@/src/infra/services/participant.service';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';


export function useUpdateParticipant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: unknown;
    }) =>
      updateParticipant(id, payload),

    onSuccess: () => {
      toast.success(
        'Participante atualizado',
      );

      queryClient.invalidateQueries({
        queryKey: ['participants'],
      });
    },

    onError: () => {
      toast.error(
        'Erro ao atualizar participante',
      );
    },
  });
}