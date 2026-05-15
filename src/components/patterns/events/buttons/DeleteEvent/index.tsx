'use client';

import { useDeleteEvent } from '@/src/foundations/hooks/use-delete-event';
import { useRouter } from 'next/navigation';

interface Props {
  eventId: string;
}

export function DeleteEventButton({
  eventId,
}: Props) {
  const router = useRouter();

  const mutation = useDeleteEvent();

  async function handleDelete() {
    const confirmed = confirm(
      'Deseja remover este evento?',
    );

    if (!confirmed) return;

    await mutation.mutateAsync(eventId);

    router.push('/eventos');
  }

  return (
    <Button
      className="bg-red-500"
      onClick={handleDelete}
    >
      Remover Evento
    </Button>
  );
}