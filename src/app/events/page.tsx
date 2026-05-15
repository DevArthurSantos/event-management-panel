'use client';

import EventEmptyState from '@/src/components/feedback/Emptys/EventEmptyState';
import EventErrorState from '@/src/components/feedback/erros/EventErrorState';
import LoadingEventState from '@/src/components/feedback/loadings/LoadingEventState';
import { EventCard } from '@/src/components/patterns/events/EventCard';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/forms/Inputs';
import { useEvents } from '@/src/foundations/hooks/use-events';
import { useUIStore } from '@/src/foundations/stores/ui.store';
import { Event } from '@/src/infra/schemas/event/event.schema';
import Link from 'next/link';
import { useMemo } from 'react';

export default function EventsPage() {
  const { data, isLoading, isError } = useEvents();
  const { search, setSearch } = useUIStore();

  const filteredEvents = useMemo(() => {
    if (!data) return [];
    return data.filter((event: Event) =>
      event.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  if (isLoading) return <LoadingEventState />;
  if (isError) return <EventErrorState />;

  return (
    // Fundo gray-950 para dar continuidade à Landing Page
    <div className="min-h-screen bg-gray-950 text-white selection:bg-white selection:text-black">
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        
        {/* Cabeçalho Minimalista com borda suave */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-10">
          <div>
            <h1 className="text-4xl font-medium tracking-tight text-white">
              Eventos
            </h1>
            <p className="mt-3 text-base text-gray-400 font-light">
              Gerencie suas experiências e acompanhe o engajamento em tempo real.
            </p>
          </div>

          <div className="flex w-full flex-col sm:flex-row gap-4 md:w-auto md:min-w-[450px]">
            {/* Input com estilo "Glass" para combinar com a Aura */}
            <div className="relative flex-1">
              <Input
                placeholder="Pesquisar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-0 rounded-xl py-2.5 transition-all"
              />
            </div>

            <Link href="/events/create" className="shrink-0">
              <Button className="w-full sm:w-auto rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-gray-950 hover:bg-gray-200 transition-all shadow-lg shadow-white/5">
                Criar evento
              </Button>
            </Link>
          </div>
        </div>

        {/* Grid de Cards ou Empty State */}
        {!filteredEvents.length ? (
          <div className="mt-20">
            <EventEmptyState />
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event: Event) => (
              <div key={event.id} className="group transition-transform hover:scale-[1.01]">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        )}
        
        {/* Glow sutil no fundo para manter a estética da Aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white/5 to-white/10 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </main>
    </div>
  );
}