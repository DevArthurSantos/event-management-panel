'use client';

import { PropsWithChildren, useState } from 'react';
import { Sidebar } from '@/src/components/patterns/sidebar';

export function DashboardLayout({ children }: PropsWithChildren) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const openMobile = () => setIsMobileOpen(true);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        onMobileClose={closeMobile}
      />

      <div className="fixed right-8 top-14 flex lg:hidden">
        <button
          type="button"
          onClick={openMobile}
          className="-m-2.5 inline-flex text-3xl items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
        >
          ☰
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}