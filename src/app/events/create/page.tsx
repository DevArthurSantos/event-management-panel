'use client';

import { EventForm } from '@/src/components/common/forms/EventForm';
import { useCreateEvent } from '@/src/foundations/hooks/use-create-event';
import { CreateEventInput } from '@/src/infra/schemas/event/create-event.schema';
import { useRouter } from 'next/navigation';

export default function CreateEventPage() {
  const router = useRouter();

  const mutation = useCreateEvent();


  async function handleSubmit(
    values: CreateEventInput
  ) {
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
    <main className="mx-auto max-w-2xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Novo Evento
        </h1>

        <p className="mt-2 text-gray-500">
          Crie um novo evento.
        </p>
      </div>

      <EventForm
        onSubmit={handleSubmit}
      />
    </main>
  );
}