'use client';

import { useRouter, useParams } from 'next/navigation';
import { useCreateParticipant } from '@/src/foundations/hooks/use-create-participant';
import { CreateParticipantInput } from '@/src/infra/schemas/participant/create-participant.schema';
import { ParticipantForm } from '@/src/components/common/forms/ParticipantForm';
import Link from 'next/link';

export default function CreateParticipantPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params.id as string;
  const mutation = useCreateParticipant();

  async function handleSubmit(values: CreateParticipantInput) {
    await mutation.mutateAsync({
      ...values,
      id: crypto.randomUUID(),
      event_id: eventId,
      status: 'outside',
      checkin_count: 0,
    });
    router.push(`/events/${eventId}`);
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 min-h-screen bg-gray-950 text-white">
      <div className="mb-12 text-center">
        <Link 
          href={`/events/${eventId}`} 
          className="text-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-2 mb-6"
        >
          ← Voltar para o evento
        </Link>
        <h1 className="text-4xl font-medium tracking-tight">
          Novo Participante
        </h1>
        <p className="mt-3 text-gray-400 font-light">
          Preencha os dados abaixo para registrar um novo convidado na Aura.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl shadow-black">
        <ParticipantForm onSubmit={handleSubmit} />
      </div>
      
      {/* Glow decorativo de fundo */}
      <div className="fixed inset-0 -z-10 flex justify-center items-center pointer-events-none opacity-20">
        <div className="h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]"></div>
      </div>
    </main>
  );
}