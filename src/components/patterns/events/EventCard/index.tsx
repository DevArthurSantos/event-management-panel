import { Event } from '@/src/infra/schemas/event.schema';
import Link from 'next/link';


interface Props {
  event: Event;
}

export function EventCard({
  event,
}: Props) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="rounded-2xl border border-zinc-200 p-5 transition hover:border-black hover:shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {event.name}
        </h2>

        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs uppercase">
          {event.status}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-zinc-600">
        <p>{event.location}</p>

        <p>{event.date}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-zinc-100 p-3">
          <p className="text-xs text-zinc-500">
            Esperados
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {event.expected_count}
          </h3>
        </div>

        <div className="rounded-xl bg-zinc-100 p-3">
          <p className="text-xs text-zinc-500">
            Check-ins
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {event.checkin_count}
          </h3>
        </div>
      </div>
    </Link>
  );
}