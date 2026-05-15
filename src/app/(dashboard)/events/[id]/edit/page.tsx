'use client';

import LoadingEventState from '@/src/components/feedback/loadings/LoadingEventState';
import { EventForm } from '@/src/components/forms/EventForm';
import { useEvent } from '@/src/foundations/hooks/use-event';
import { useUpdateEvent } from '@/src/foundations/hooks/use-update-event';
import { CreateEventInput } from '@/src/infra/schemas/event/create-event.schema';
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
    return <LoadingEventState />;
  }

  async function handleSubmit(values: CreateEventInput) {
    await mutation.mutateAsync({
      id: eventId,
      payload: values,
    });

    router.push('/events');
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