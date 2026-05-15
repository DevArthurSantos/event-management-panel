'use client';

import { ParticipantsTable } from '@components/common/tables/ParticipantsTable';
import EventErrorState from '@components/feedback/erros/EventErrorState';
import LoadingEventState from '@components/feedback/loadings/LoadingEventState';
import { CheckinChart } from '@components/patterns/dashboard/CheckinChart';
import { CheckinHistory } from '@components/patterns/dashboard/CheckinHistory';
import { MetricCard } from '@components/patterns/dashboard/MetricCard';
import { Button } from '@components/ui/Button';
import { useCheckins } from '@foundations/hooks/use-checkin';
import { useCheckinMutation } from '@foundations/hooks/use-checkin-mutation';
import { useEvent } from '@foundations/hooks/use-event';
import { useParticipants } from '@foundations/hooks/use-participants';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;

  const { data: event, isLoading, isError } = useEvent(eventId);
  const { data: participants = [] } = useParticipants(eventId);
  const { data: checkins = [] } = useCheckins(eventId);
  const mutation = useCheckinMutation();

  if (isLoading) return <LoadingEventState />;
  if (isError || !event) return <EventErrorState />;

  return (
    <div className="min-h-screen bg-aura-bg text-aura-text">
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        {/* Header com Navegação e Ações */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-aura-border pb-10">
          <div>
            <div className="flex items-center gap-2 text-sm text-aura-text-secondary mb-2">
              <Link href="/events" className="hover:text-aura-text transition-colors">
                Eventos
              </Link>
              <span>/</span>
              <span className="text-aura-text">Detalhes</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tighter text-aura-text">
              {event.name}
            </h1>
            <p className="mt-2 text-aura-text-secondary font-light flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
              {event.location}
            </p>
          </div>

          <div className="flex gap-3">
            <Link href={`/events/${event.id}/edit`}>
              <Button className="btn-secondary px-6 py-2.5 text-sm font-medium">
                Editar Evento
              </Button>
            </Link>

            <Link href={`/events/${event.id}/participants/create`}>
              <Button className="btn-primary px-6 py-2.5 text-sm font-semibold">
                Adicionar Participante
              </Button>
            </Link>
          </div>
        </div>

        {/* Grid de Métricas */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Esperados"
            value={event.expected_count}
            className="bg-aura-card border border-aura-border"
          />
          <MetricCard
            title="Check-ins"
            value={event.checkin_count}
            className="bg-aura-card border border-aura-border"
          />
          <MetricCard
            title="Erros"
            value={event.error_count}
            className="bg-aura-card border border-aura-border"
          />
          <MetricCard
            title="Taxa de Entrada"
            value={`${event.entry_rate}%`}
            className="bg-aura-card border border-aura-border"
          />
        </div>

        {/* Gráficos e Histórico */}
        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-6 text-aura-text">
              Fluxo de Presença
            </h2>
            <CheckinChart checkins={event.checkin_count} expected={event.expected_count} />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-6 text-aura-text">
              Atividade Recente
            </h2>
            <CheckinHistory checkins={checkins} />
          </div>
        </div>

        {/* Tabela de Participantes */}
        <div className="mt-12">
          <ParticipantsTable
            participants={participants}
            eventStatus={event.status}
            onCheckin={async (participant, action) => {
              return mutation.mutateAsync({
                event,
                participant,
                action
              });
            }}
          />
        </div>
      </main>
    </div>
  );
}