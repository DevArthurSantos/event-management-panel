'use client';

import { useState, useMemo } from 'react';
import { EventCard } from '@/src/components/patterns/events/EventCard';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/forms/Inputs';
import { useEvents } from '@/src/foundations/hooks/use-events';
import EventEmptyState from '@/src/components/feedback/Emptys/EventEmptyState';
import LoadingEventState from '@/src/components/feedback/loadings/LoadingEventState';
import EventErrorState from '@/src/components/feedback/erros/EventErrorState';
import Link from 'next/link';

type StatusFilter = 'all' | 'active' | 'closed' | 'cancelled';

export default function EventsPage() {
  const { data, isLoading, isError } = useEvents();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const filteredAndSortedEvents = useMemo(() => {
    if (!data) return [];

    let result = [...data];

    // Filtro por busca
    if (search) {
      result = result.filter(event =>
        event.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filtro por status
    if (statusFilter !== 'all') {
      result = result.filter(event => event.status === statusFilter);
    }

    // Ordenação por data
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [data, search, statusFilter, sortOrder]);

  if (isLoading) return <LoadingEventState />;
  if (isError) return <EventErrorState />;

  return (
    <div className="min-h-screen bg-aura-bg text-aura-text">
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        {/* Header + Filtros */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tighter">Eventos</h1>
            <p className="mt-2 text-aura-text-secondary">Gerencie suas experiências</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Buscar evento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
              className="h-12 rounded-2xl border border-aura-border bg-aura-card px-4 text-aura-text"
            >
              <option value="all">Todos os status</option>
              <option value="active">Ativo</option>
              <option value="closed">Encerrado</option>
              <option value="cancelled">Cancelado</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
              className="h-12 rounded-2xl border border-aura-border bg-aura-card px-4 text-aura-text"
            >
              <option value="newest">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </select>

            <Button className="btn-primary whitespace-nowrap">
              <Link href="/events/create">Criar Evento</Link>
            </Button>
          </div>
        </div>

        {!filteredAndSortedEvents.length ? (
          <EventEmptyState />
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}