'use client';

import { cn } from '@/src/infra/helpers/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { label: 'Eventos', href: '/events' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Relatórios', href: '/reports' },
];

const secondaryItems = [
  { label: 'Perfil', href: '/profile' },
  { label: 'Configurações', href: '/settings' },
  { label: 'Sair', href: '/' },
];

type SidebarProps = {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
};

export function Sidebar({
  isMobileOpen = false,
  onMobileClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isMobileOpen && onMobileClose && (
        <div
          className="fixed inset-0 z-999 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-1000 w-72 border-r border-white/5 bg-gray-950 p-6 flex flex-col transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {onMobileClose && (
          <button
            onClick={onMobileClose}
            className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors lg:hidden"
            aria-label="Fechar menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6h12v12"
              />
            </svg>
          </button>
        )}

        <div className="mb-10">
          <Link href="/" className="flex items-center gap-x-3 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
              <div className="h-2.5 w-2.5 rounded-full bg-gray-950" />
            </div>

            <div>
              <h1 className="text-xl font-medium tracking-tight text-white">
                Aura
              </h1>
              <p className="mt-1 text-xs font-light text-gray-500">
                Sistema de Gestão
              </p>
            </div>
          </Link>
        </div>

        <div className="space-y-8 flex-1">
          <section>
            <p className="mb-3 px-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
              Principal
            </p>

            <nav className="space-y-1.5">
              {items.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href + '/');

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={isMobileOpen && onMobileClose ? onMobileClose : undefined}
                    className={cn(
                      'group flex h-11 items-center rounded-md px-4 text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-white text-gray-950 shadow-lg shadow-white/5'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    <span
                      className={cn(
                        'mr-3 h-2 w-2 rounded-full transition-all',
                        isActive ? 'bg-gray-950' : 'bg-gray-600 group-hover:bg-white'
                      )}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </section>

          <section>
            <p className="mb-3 px-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
              Conta
            </p>

            <nav className="space-y-1.5">
              {secondaryItems.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href + '/');

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={isMobileOpen && onMobileClose ? onMobileClose : undefined}
                    className={cn(
                      'group flex h-11 items-center rounded-md px-4 text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-white text-gray-950 shadow-lg shadow-white/5'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    <span
                      className={cn(
                        'mr-3 h-2 w-2 rounded-full transition-all',
                        isActive ? 'bg-gray-950' : 'bg-gray-600 group-hover:bg-white'
                      )}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </section>
        </div>

        <div className="mt-auto pt-8">
          <div className="mt-6 flex items-center gap-3 px-1">
            <div className="h-10 w-10 rounded-full bg-linear-to-tr from-white/20 to-white/5 ring-1 ring-white/10" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">Usuário Aura</p>
              <p className="truncate text-xs text-gray-500">Plano Pro</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}