'use client';

import EventErrorState from '@/src/components/feedback/erros/EventErrorState';
import LoadingEventState from '@/src/components/feedback/loadings/LoadingEventState';
import { CheckinChart } from '@/src/components/patterns/dashboard/CheckinChart';
import { CheckinHistory } from '@/src/components/patterns/dashboard/CheckinHistory';
import { MetricCard } from '@/src/components/patterns/dashboard/MetricCard';
import { ParticipantsTable } from '@/src/components/patterns/dashboard/ParticipantsTable';
import { Button } from '@/src/components/ui/Button';
import { useCheckins } from '@/src/foundations/hooks/use-checkin';
import { useCheckinMutation } from '@/src/foundations/hooks/use-checkin-mutation';
import { useEvent } from '@/src/foundations/hooks/use-event';
import { useParticipants } from '@/src/foundations/hooks/use-participants';
import Link from 'next/link';

import { useParams } from 'next/navigation';



export default function EventDetailsPage() {
  const params = useParams();

  const eventId = params.id as string;

  const {
    data: event,
    isLoading,
    isError,
  } = useEvent(eventId);

  const {
    data: participants = [],
  } = useParticipants(eventId);

  const {
    data: checkins = [],
  } = useCheckins(eventId);

  const mutation =
    useCheckinMutation();

  if (isLoading) {
    return <LoadingEventState />;
  }

  if (isError || !event) {
    return <EventErrorState />;
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {event.name}
          </h1>

          <p className="mt-2 text-zinc-500">
            {event.location}
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/events/${event.id}/edit`}
          >
            <Button>
              Editar Evento
            </Button>
          </Link>

          <Link
            href={`/events/${event.id}/participants/create`}
          >
            <Button>
              Novo Participante
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Esperados"
          value={event.expected_count}
        />

        <MetricCard
          title="Check-ins"
          value={event.checkin_count}
        />

        <MetricCard
          title="Erros"
          value={event.error_count}
        />

        <MetricCard
          title="Taxa"
          value={`${event.entry_rate}%`}
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <CheckinChart
          checkins={event.checkin_count}
          expected={event.expected_count}
        />

        <CheckinHistory
          checkins={checkins}
        />
      </div>

      <div className="mt-6">
        <ParticipantsTable
          participants={participants}
          onCheckin={(participant) =>
            mutation.mutate({
              event,
              participant,
            })
          }
        />
      </div>
    </main>
  );
}