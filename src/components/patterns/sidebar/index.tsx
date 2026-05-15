'use client';

import { cn } from '@/src/infra/helpers/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainItems = [
  { label: 'Eventos', href: '/events' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Relatórios', href: '/reports' },
];

const accountItems = [
  { label: 'Perfil', href: '/profile' },
  { label: 'Configurações', href: '/settings' },
  { label: 'Sair', href: '/' },
];

type SidebarProps = {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
};

export function Sidebar({ isMobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay mobile */}
      {isMobileOpen && onMobileClose && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          'fixed h-screen inset-y-0 left-0 z-100 w-72 border-r border-aura-border bg-aura-card p-6 flex flex-col transition-transform duration-300 ease-in-out  lg:translate-x-0',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Botão fechar (mobile) */}
        {onMobileClose && (
          <button
            onClick={onMobileClose}
            className="absolute right-6 top-6 lg:hidden flex h-9 w-9 items-center justify-center rounded-md bg-aura-border text-aura-text hover:bg-aura-text-secondary/20 transition-colors"
            aria-label="Fechar menu"
          >
            ✕
          </button>
        )}

        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-x-3 group">
            <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="h-2 w-2 rounded-full bg-gray-950" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tighter text-aura-text">
                AURAEVENT
              </h1>
              <p className="text-xs font-light text-aura-text-secondary">
                Sistema de gestão de eventos
              </p>
            </div>
          </Link>
        </div>

        {/* Menu Principal */}
        <div className="flex-1 space-y-8">
          <section>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-aura-text-secondary">
              Principal
            </p>
            <nav className="space-y-1">
              {mainItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={isMobileOpen && onMobileClose ? onMobileClose : undefined}
                    className={cn(
                      'group flex h-11 items-center gap-3 rounded-md px-4 text-sm font-medium transition-all',
                      isActive
                        ? 'bg-white text-aura-text shadow-lg'
                        : 'text-aura-text-secondary hover:bg-aura-border/50 hover:text-aura-text'
                    )}
                  >
                    <span
                      className={cn(
                        'h-2 w-2 rounded-full transition-all',
                        isActive ? 'bg-aura-bg' : 'bg-aura-border group-hover:bg-aura-text'
                      )}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </section>

          {/* Menu Conta */}
          <section>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-aura-text-secondary">
              Conta
            </p>
            <nav className="space-y-1">
              {accountItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={isMobileOpen && onMobileClose ? onMobileClose : undefined}
                    className={cn(
                      'group flex h-11 items-center gap-3 rounded-md px-4 text-sm font-medium transition-all',
                      isActive
                        ? 'bg-white text-aura-text shadow-lg'
                        : 'text-aura-text-secondary hover:bg-aura-border/50 hover:text-aura-text'
                    )}
                  >
                    <span
                      className={cn(
                        'h-2 w-2 rounded-full transition-all',
                        isActive ? 'bg-aura-bg' : 'bg-aura-border group-hover:bg-aura-text'
                      )}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </section>
        </div>

        {/* Footer do usuário */}
        <div className="mt-auto pt-8 border-t border-aura-border">
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-aura-border/30 transition-colors">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-aura-text font-semibold text-sm">
              UA
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-aura-text truncate">Usuário Aura</p>
              <p className="text-xs text-aura-text-secondary">Plano Pro</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}