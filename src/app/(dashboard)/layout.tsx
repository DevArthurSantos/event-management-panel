import { DashboardLayout } from '@/src/components/patterns/dashboard';
import { PropsWithChildren } from 'react';


export default function Layout({
  children,
}: PropsWithChildren) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}