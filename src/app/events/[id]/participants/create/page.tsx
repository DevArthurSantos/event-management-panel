'use client';

import { useRouter, useParams } from 'next/navigation';
import { useCreateParticipant } from '@foundations/hooks/use-create-participant';
import { CreateParticipantInput } from '@infra/schemas/participant/create-participant.schema';
import { ParticipantForm } from '@components/common/forms/ParticipantForm';
import Link from 'next/link';

export default function CreateParticipantPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params.id as string;
  const mutation = useCreateParticipant();

  async function handleSubmit(values: CreateParticipantInput) {
    await mutation.mutateAsync({
      ...values,
      id: crypto.randomUUID(),
      event_id: eventId,
      status: 'outside',
      checkin_count: 0,
    });
    router.push(`/events/${eventId}`);
  }

  return (
    <div className="min-h-screen bg-aura-bg text-aura-text">
      <main className="mx-auto max-w-2xl px-6 py-12 lg:py-16">
        <div className="mb-12 text-center">
          <Link
            href={`/events/${eventId}`}
            className="inline-flex items-center gap-2 text-sm text-aura-text-secondary hover:text-aura-text transition-colors mb-6"
          >
            ← Voltar para o evento
          </Link>
          <h1 className="text-4xl font-semibold tracking-tighter text-aura-text">
            Novo Participante
          </h1>
          <p className="mt-3 text-aura-text-secondary">
            Adicione um novo convidado ao evento.
          </p>
        </div>

        <div className="card p-10">
          <ParticipantForm onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}