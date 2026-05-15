'use client';

import EventEmptyState from '@/src/components/feedback/Emptys/EventEmptyState';
import EventErrorState from '@/src/components/feedback/erros/EventErrorState';
import LoadingEventState from '@/src/components/feedback/loadings/LoadingEventState';
import { EventCard } from '@/src/components/patterns/events/EventCard';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/forms/Inputs';
import { useEvents } from '@/src/foundations/hooks/use-events';
import { useUIStore } from '@/src/foundations/stores/ui.store';
import { Event } from '@/src/infra/schemas/event.schema';
import Link from 'next/link';

import { useMemo } from 'react';


export default function EventsPage() {
  const { data, isLoading, isError } =
    useEvents();

  const { search, setSearch } =
    useUIStore();

  const filteredEvents = useMemo(() => {
    if (!data) return [];

    return data.filter((event: Event) =>
      event.name
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [data, search]);

  if (isLoading) {
    return <LoadingEventState />;
  }

  if (isError) {
    return <EventErrorState />;
  }

  if (!filteredEvents.length) {
    return <EventEmptyState />;
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Eventos
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Gerencie eventos e check-ins.
          </p>
        </div>

        <div className="flex w-full gap-3 md:max-w-xl">
          <Input
            placeholder="Buscar evento"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <Link href="/events/create">
            <Button>
              Novo Evento
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((event: Event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </main>
  );
}