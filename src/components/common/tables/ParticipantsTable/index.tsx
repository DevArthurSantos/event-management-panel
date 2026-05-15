'use client';

import { useState } from "react";
import { Participant } from "@/src/infra/schemas/participant/participant.schema";
import { Button } from "@/src/components/ui/Button";

interface Props {
  participants: Participant[];
  eventStatus: string;
  onCheckin: (participant: Participant, action: 'entry' | 'exit') => Promise<{
    success: boolean;
    reason?: string;
  }>;
}

export function ParticipantsTable({ participants, eventStatus, onCheckin }: Props) {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [errorByParticipant, setErrorByParticipant] = useState<Record<string, string>>({});

  const isEventClosed = eventStatus === 'closed';

  async function handleAction(participant: Participant, action: 'entry' | 'exit') {
    if (isEventClosed && action === 'entry') {
      setErrorByParticipant(prev => ({
        ...prev,
        [participant.id]: "Evento encerrado. Não é possível realizar check-in."
      }));
      return;
    }

    try {
      setLoadingId(participant.id);
      setErrorByParticipant(prev => ({ ...prev, [participant.id]: '' }));

      const result = await onCheckin(participant, action);

      if (!result.success) {
        setErrorByParticipant(prev => ({
          ...prev,
          [participant.id]: result.reason || "Erro ao processar ação"
        }));
      }
    } catch (err: unknown) {
      setErrorByParticipant(prev => ({
        ...prev,
        [participant.id]: err?.message || "Erro inesperado"
      }));
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-aura-border px-6 py-5 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-aura-text">Lista de Participantes</h2>
          {isEventClosed && (
            <p className="text-sm text-cancelled">Evento encerrado — check-ins bloqueados</p>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead className="bg-aura-card border-b border-aura-border">
            <tr className="text-xs font-semibold uppercase tracking-widest text-aura-text-secondary text-left">
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-aura-border">
            {participants.map((participant) => {
              const isLoading = loadingId === participant.id;
              const error = errorByParticipant[participant.id];

              const isInside = participant.status === 'inside';
              const isVIP = participant.type === 'vip';

              return (
                <tr key={participant.id} className="hover:bg-aura-border/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-medium text-aura-text">{participant.name}</div>
                    <div className="text-xs font-mono text-aura-text-secondary">ID: {participant.id}</div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="inline-flex rounded-2xl bg-aura-border/60 px-3 py-1 text-xs font-medium">
                      {participant.type.toUpperCase()}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span className={`inline-flex rounded-2xl px-3.5 py-1 text-xs font-semibold uppercase ${
                      isInside ? 'bg-success text-white' : 'bg-aura-text-secondary text-aura-bg'
                    }`}>
                      {isInside ? 'DENTRO' : 'FORA'}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-right space-x-3">
                    {/* Check-in (Entrada) */}
                    <Button
                      onClick={() => handleAction(participant, 'entry')}
                      disabled={isLoading || (isEventClosed && !isInside)}
                      className="btn-primary px-6 py-2 text-sm"
                    >
                      {isLoading ? '...' : 'Check-in'}
                    </Button>

                    {/* Saída - Apenas para VIP que está dentro */}
                    {isVIP && isInside && (
                      <Button
                        onClick={() => handleAction(participant, 'exit')}
                        disabled={isLoading}
                        className="border border-red-500/30 text-red-400 hover:bg-red-500/10 px-6 py-2 text-sm"
                      >
                        Saída
                      </Button>
                    )}

                    {error && (
                      <p className="text-error text-xs mt-2 block text-right">{error}</p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}