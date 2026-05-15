import { PropsWithChildren } from 'react';
import { Sidebar } from '@/src/components/patterns/sidebar';


export function DashboardLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}