'use client';

import { EventForm } from '@/src/components/forms/event-form';
import { useEvent } from '@/src/foundations/hooks/use-event';
import { useUpdateEvent } from '@/src/foundations/hooks/use-update-event';
import { Event } from '@/src/infra/schemas/event.schema';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function EditEventPage() {
  const router = useRouter();

  const params = useParams();

  const eventId = params.id as string;

  const { data, isLoading } =
    useEvent(eventId);

  const mutation = useUpdateEvent();

  if (isLoading || !data) {
    return <LoadingState />;
  }

  async function handleSubmit(values: Event) {
    await mutation.mutateAsync({
      id: eventId,
      payload: values,
    });

    router.push('/eventos');
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Editar Evento
        </h1>
      </div>

      <EventForm
        defaultValues={data}
        onSubmit={handleSubmit}
      />
    </main>
  );
}