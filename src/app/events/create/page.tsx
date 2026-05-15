'use client';

import { EventForm } from '@components/common/forms/EventForm';
import { useCreateEvent } from '@foundations/hooks/use-create-event';
import { CreateEventInput } from '@infra/schemas/event/create-event.schema';
import { useRouter } from 'next/navigation';

export default function CreateEventPage() {
  const router = useRouter();

  const mutation = useCreateEvent();

  async function handleSubmit(values: CreateEventInput) {
    await mutation.mutateAsync({
      ...values,
      date: new Date(values.date).toISOString(),
      id: crypto.randomUUID(),
      status: 'active',
      checkin_count: 0,
      error_count: 0,
      entry_rate: 0,
    });

    router.push('/events');
  }

  return (
    <div className="min-h-screen bg-aura-bg text-aura-text">
      <main className="mx-auto max-w-2xl px-6 py-12 lg:py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tighter text-aura-text">
            Novo Evento
          </h1>
          <p className="mt-3 text-lg text-aura-text-secondary">
            Crie um novo evento e comece a gerenciar sua experiência agora.
          </p>
        </div>

        <EventForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
}