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

  const { data: event, isLoading, isError } = useEvent(eventId);
  const { data: participants = [] } = useParticipants(eventId);
  const { data: checkins = [] } = useCheckins(eventId);
  const mutation = useCheckinMutation();

  if (isLoading) return <LoadingEventState />;
  if (isError || !event) return <EventErrorState />;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12 bg-gray-950 min-h-screen text-white">
      {/* Header com Navegação e Ações */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/5 pb-10">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link href="/events" className="hover:text-white transition-colors">Eventos</Link>
            <span>/</span>
            <span className="text-gray-300">Detalhes</span>
          </div>
          <h1 className="text-4xl font-medium tracking-tight text-white">
            {event.name}
          </h1>
          <p className="mt-2 text-gray-400 font-light flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            {event.location}
          </p>
        </div>

        <div className="flex gap-3">
          <Link href={`/events/${event.id}/edit`}>
            <Button className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-all">
              Editar Evento
            </Button>
          </Link>

          <Link href={`/events/${event.id}/participants/create`}>
            <Button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-950 hover:bg-gray-200 transition-all shadow-lg shadow-white/5">
              Adicionar Participante
            </Button>
          </Link>
        </div>
      </div>

      {/* Grid de Métricas Aura Style */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard title="Esperados" value={event.expected_count} className="bg-white/[0.02] border-white/5" />
        <MetricCard title="Check-ins" value={event.checkin_count} className="bg-white/[0.02] border-white/5" />
        <MetricCard title="Erros" value={event.error_count} className="bg-white/[0.02] border-white/5" />
        <MetricCard title="Taxa de Entrada" value={`${event.entry_rate}%`} className="bg-white/[0.02] border-white/5" />
      </div>

      {/* Gráficos e Histórico com espaçamento elegante */}
      <div className="mt-10 grid gap-8 xl:grid-cols-2">
        <div>
          <h2 className="text-lg font-medium mb-6 text-gray-200">Fluxo de Presença</h2>
          <CheckinChart checkins={event.checkin_count} expected={event.expected_count} />
        </div>

        <div>
          <h2 className="text-lg overflow-hidden font-medium mb-6 text-gray-200">Atividade Recente</h2>
          <CheckinHistory checkins={checkins} />
        </div>
      </div>

      {/* Tabela de Participantes */}
      <div className="">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-lg font-medium text-gray-200">Lista de Participantes</h2>
        </div>
        <ParticipantsTable
          participants={participants}
          onCheckin={(participant) =>
            mutation.mutate({ event, participant })
          }
        />
      </div>
    </main>
  );
}