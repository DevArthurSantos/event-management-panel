import { Event } from '@/src/infra/schemas/event/event.schema';
import Link from 'next/link';

interface Props {
  event: Event;
}

export function EventCard({ event }: Props) {
  return (
    <div
      className="group h-100 overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-sm transition-all hover:border-white/20 hover:bg-white/4"
    >
      <div className="p-6 flex items-center text-center justify-center flex-col h-full">
        <span className="inline-flex items-center rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
          {event.status}
        </span>

        <h2 className="mt-4 text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
          {event.name}
        </h2>

        <div className="mt-4 space-y-1 text-sm text-gray-400">
          <p className='text-ellipsis'>
            <span className="opacity-60">Local:</span> {event.location}
          </p>
          <p>
            <span className="opacity-60">Data:</span> {event.date.split('T')[0]}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-500">
              Esperados
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-white">
              {event.expected_count}
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-500">
              Check-ins
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-blue-400">
              {event.checkin_count}
            </h3>
          </div>
        </div>

        <Link
          href={`/events/${event.id}`}
          className="mt-6 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500">
          Ver evento
        </Link>
      </div>
    </div>
  );
}