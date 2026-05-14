'use client';

import { useEvents } from "@/foundations/hooks/use-events";
import { Event } from "@/infra/schemas/event.schema";


export default function EventsPage() {
  const { data, isLoading, isError } = useEvents();

  if (isLoading) {
    return <div>Carregando eventos...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar eventos.</div>;
  }

  if (!data?.length) {
    return <div>Nenhum evento encontrado.</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Eventos
      </h1>

      <div className="grid gap-4">
        {data.map((event: Event) => (
          <div
            key={event.id}
            className="border rounded-xl p-4"
          >
            <h2 className="font-semibold text-lg">
              {event.name}
            </h2>

            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}