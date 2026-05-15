'use client';

import { cn } from '@/src/infra/helpers/cn';
import Link from 'next/link';

import { usePathname } from 'next/navigation';


const items = [
  {
    label: 'Eventos',
    href: '/events',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-65 border-r border-zinc-200 bg-white p-6 lg:block">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          Event Panel
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Gestão de eventos
        </p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex h-11 items-center rounded-xl px-4 text-sm transition',
              pathname.includes(item.href)
                ? 'bg-black text-white'
                : 'hover:bg-zinc-100',
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}