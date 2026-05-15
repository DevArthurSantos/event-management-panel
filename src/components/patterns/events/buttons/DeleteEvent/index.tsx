'use client';

import { Button } from '@/src/components/ui/Button';
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

    router.push('/events');
  }

return (
    <Button className="bg-cancelled hover:bg-red-600 text-aura-text" onClick={handleDelete}>
      Remover Evento
    </Button>
  );
}