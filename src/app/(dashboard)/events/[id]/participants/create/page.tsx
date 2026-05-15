'use client';

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

import { Participant } from '@/src/infra/schemas/participant.schema';
import { useCreateParticipant } from '@/src/foundations/hooks/use-create-participant';
import { ParticipantForm } from '@/src/components/forms/ParticipantForm';

export default function CreateParticipantPage() {
  const router = useRouter();

  const params = useParams();

  const eventId = params.id as string;

  const mutation = useCreateParticipant();

  async function handleSubmit(
    values: Participant,
  ) {
    await mutation.mutateAsync({
      ...values,

      id: crypto.randomUUID(),

      event_id: eventId,

      status: 'outside',

      checkin_count: 0,
    });

    router.push(
      `/events/${eventId}`,
    );
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Novo Participante
        </h1>
      </div>

      <ParticipantForm
        onSubmit={handleSubmit}
      />
    </main>
  );
}