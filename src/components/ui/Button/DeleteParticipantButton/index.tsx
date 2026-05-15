'use client';

import { useDeleteParticipant } from "@/src/foundations/hooks/use-delete-participant";
import { Button } from "@/src/components/ui/Button";


interface Props {
  participantId: string;
}

export function DeleteParticipantButton({
  participantId,
}: Props) {
  const mutation =
    useDeleteParticipant();

  async function handleDelete() {
    const confirmed = confirm(
      'Deseja remover participante?',
    );

    if (!confirmed) return;

    await mutation.mutateAsync(
      participantId,
    );
  }

  return (
    <Button
      className="bg-red-500"
      onClick={handleDelete}
    >
      Remover
    </Button>
  );
}