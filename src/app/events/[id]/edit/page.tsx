'use client';

import LoadingEventState from '@/src/components/feedback/loadings/LoadingEventState';
import { EventForm } from '@/src/components/common/forms/EventForm';
import { useEvent } from '@/src/foundations/hooks/use-event';
import { useUpdateEvent } from '@/src/foundations/hooks/use-update-event';
import { CreateEventInput } from '@/src/infra/schemas/event/create-event.schema';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params.id as string;

  const { data, isLoading } = useEvent(eventId);
  const mutation = useUpdateEvent();

  if (isLoading || !data) {
    return <LoadingEventState />;
  }

  async function handleSubmit(values: CreateEventInput) {
    await mutation.mutateAsync({
      id: eventId,
      payload: {
        ...values,
        date: new Date(values.date).toISOString(),
      },
    });

    router.push('/events');
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 min-h-screen bg-gray-950 text-white selection:bg-white selection:text-black">
      {/* Navegação de apoio */}
      <div className="mb-12 text-center">
        <Link 
          href={`/events/${eventId}`} 
          className="text-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-2 mb-6 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> 
          Voltar para detalhes
        </Link>
        
        <h1 className="text-4xl font-medium tracking-tight text-white">
          Editar Evento
        </h1>
        <p className="mt-3 text-gray-400 font-light">
          Ajuste as informações, local e data da sua experiência.
        </p>
      </div>

      {/* Container do Formulário com Glassmorphism sutil */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl shadow-black/50">
        <EventForm
          defaultValues={data}
          onSubmit={handleSubmit}
        />
      </div>

      {/* Rodapé informativo minimalista */}
      <p className="mt-8 text-center text-xs text-gray-600">
        ID do Evento: <span className="font-mono">{eventId}</span>
      </p>

      {/* Efeito de iluminação de fundo (Glow) */}
      <div className="fixed inset-0 -z-10 flex justify-center items-end pointer-events-none opacity-10">
        <div className="h-[500px] w-[800px] rounded-full bg-gradient-to-t from-blue-500/20 to-transparent blur-[120px]"></div>
      </div>
    </main>
  );
}