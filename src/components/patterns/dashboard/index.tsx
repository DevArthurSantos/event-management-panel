'use client';

import { PropsWithChildren, useState } from 'react';
import { Sidebar } from '@components/patterns/sidebar';

export function DashboardLayout({ children }: PropsWithChildren) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-aura-bg lg:ml-72">
      <Sidebar
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      {/* Botão mobile menu */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed right-6 top-6 z-50 lg:hidden flex h-11 w-11 items-center justify-center rounded-md bg-aura-card text-aura-text hover:bg-primary-500/10"
      >
        ☰
      </button>

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}