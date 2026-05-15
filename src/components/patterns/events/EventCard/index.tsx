import { Event } from '@infra/schemas/event/event.schema';
import Link from 'next/link';

interface Props {
  event: Event;
}

export function EventCard({ event }: Props) {
  const statusColor =
    event.status === 'active' ? 'success' : event.status === 'closed' ? 'closed' : 'cancelled';

  return (
    <div className="card group h-full flex flex-col transition-all hover:scale-[1.03] hover:shadow-2xl">
      <div className="flex-1 p-6">
        <span
          className={`inline-flex rounded-md px-3 py-1 text-xs font-semibold uppercase ${
            statusColor === 'success'
              ? 'bg-success text-aura-text'
              : statusColor === 'closed'
              ? 'bg-closed text-aura-text'
              : 'bg-cancelled text-aura-text'
          }`}
        >
          {event.status}
        </span>

        <h2 className="mt-6 text-2xl font-semibold tracking-tighter text-aura-text group-hover:text-primary-400 transition-colors">
          {event.name}
        </h2>

        <div className="mt-6 space-y-2 text-sm text-aura-text-secondary">
          <p>
            <span className="opacity-60">Local:</span> {event.location}
          </p>
          <p>
            <span className="opacity-60">Data:</span> {event.date.split('T')[0]}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-md bg-aura-border/30 p-4 text-center">
            <p className="text-xs uppercase tracking-widest text-aura-text-secondary">Esperados</p>
            <h3 className="mt-1 text-3xl font-semibold text-aura-text">{event.expected_count}</h3>
          </div>
          <div className="rounded-md bg-aura-border/30 p-4 text-center">
            <p className="text-xs uppercase tracking-widest text-aura-text-secondary">Check-ins</p>
            <h3 className="mt-1 text-3xl font-semibold text-primary-500">{event.checkin_count}</h3>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-aura-border p-6">
        <Link
          href={`/events/${event.id}`}
          className="btn-primary w-full flex justify-center"
        >
          Ver evento
        </Link>
      </div>
    </div>
  );
}