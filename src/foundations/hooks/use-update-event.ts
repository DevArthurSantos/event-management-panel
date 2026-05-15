'use client';

import { updateEvent } from '@/src/infra/services/event.service';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'sonner';


export function useUpdateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: unknown;
    }) =>
      updateEvent(id, payload),

    onSuccess: () => {
      toast.success(
        'Evento atualizado',
      );

      queryClient.invalidateQueries({
        queryKey: ['events'],
      });

      queryClient.invalidateQueries({
        queryKey: ['event'],
      });
    },

    onError: () => {
      toast.error(
        'Erro ao atualizar evento',
      );
    },
  });
}