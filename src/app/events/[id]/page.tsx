'use client';

import { useEvent } from '@/src/foundations/hooks/use-event';
import { useParams } from 'next/navigation';

export default function EventDetailsPage() {
  const params = useParams();

  const eventId = params.id as string;

  const { data, isLoading, isError } = useEvent(eventId);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError || !data) {
    return <ErrorState />;
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {data.name}
        </h1>

        <p className="mt-2 text-zinc-500">
          {data.location}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border p-5">
          <p className="text-sm text-zinc-500">
            Participantes Esperados
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {data.expected_count}
          </h2>
        </div>

        <div className="rounded-2xl border p-5">
          <p className="text-sm text-zinc-500">
            Check-ins
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {data.checkin_count}
          </h2>
        </div>

        <div className="rounded-2xl border p-5">
          <p className="text-sm text-zinc-500">
            Erros
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {data.error_count}
          </h2>
        </div>

        <div className="rounded-2xl border p-5">
          <p className="text-sm text-zinc-500">
            Taxa de Entrada
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {data.entry_rate}%
          </h2>
        </div>
      </div>
    </main>
  );
}