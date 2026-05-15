'use client';

import LoadingEventState from '@components/feedback/loadings/LoadingEventState';
import { EventForm } from '@components/common/forms/EventForm';
import { useEvent } from '@foundations/hooks/use-event';
import { useUpdateEvent } from '@foundations/hooks/use-update-event';
import { CreateEventInput } from '@infra/schemas/event/create-event.schema';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params.id as string;

  const { data, isLoading } = useEvent(eventId);
  const mutation = useUpdateEvent();

  if (isLoading || !data) return <LoadingEventState />;

  async function handleSubmit(values: CreateEventInput) {
    await mutation.mutateAsync({
      id: eventId,
      payload: {
        ...values,
        date: new Date(values.date).toISOString(),
      },
    });
    router.push(`/events/${eventId}`);
  }

  return (
    <div className="min-h-screen bg-aura-bg text-aura-text">
      <main className="mx-auto max-w-2xl px-6 py-12 lg:py-16">
        <div className="mb-12 text-center">
          <Link
            href={`/events/${eventId}`}
            className="inline-flex items-center gap-2 text-sm text-aura-text-secondary hover:text-aura-text transition-colors mb-6 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Voltar para detalhes
          </Link>

          <h1 className="text-4xl font-semibold tracking-tighter text-aura-text">
            Editar Evento
          </h1>
          <p className="mt-3 text-aura-text-secondary">
            Ajuste as informações do evento.
          </p>
        </div>

        <div className="card p-10">
          <EventForm defaultValues={data} onSubmit={handleSubmit} />
        </div>

        <p className="mt-8 text-center text-xs text-aura-text-secondary font-mono">
          ID do Evento: {eventId}
        </p>
      </main>
    </div>
  );
}