'use client';

import { useState } from "react";
import { Participant } from "@/src/infra/schemas/participant/participant.schema";

interface Props {
  participants: Participant[];

  onCheckin: (
    participant: Participant
  ) => Promise<{
    success: boolean;
    reason?: string;
  }>;
}

function getStatusStyle(status: string) {
  const normalized = status.toLowerCase();

  switch (normalized) {
    case "checked_in":
    case "checkin":
    case "checked-in":
      return "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200";

    case "pending":
      return "bg-amber-100 text-amber-700 ring-1 ring-amber-200";

    case "cancelled":
    case "canceled":
      return "bg-rose-100 text-rose-700 ring-1 ring-rose-200";

    default:
      return "bg-gray-100 text-gray-700 ring-1 ring-gray-200";
  }
}

function formatStatus(status: string) {
  return status.replaceAll("_", " ");
}

function isHardBlockedStatus(status: string) {
  const normalized = status.toLowerCase();
  return ["checked_in", "checkin", "checked-in"].includes(normalized);
}

export function ParticipantsTable({ participants, onCheckin }: Props) {
  const [errorByParticipant, setErrorByParticipant] = useState<
    Record<string, string | null>
  >({});

  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleCheckin(participant: Participant) {
    try {
      setLoadingId(participant.id);

      const result = await onCheckin(participant);

      if (!result.success) {
        setErrorByParticipant((prev) => ({
          ...prev,
          [participant.id]: result.reason || "Erro no check-in",
        }));
        return;
      }

      // limpa erro ao sucesso
      setErrorByParticipant((prev) => ({
        ...prev,
        [participant.id]: null,
      }));
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Participantes
        </h2>
        <p className="text-sm text-gray-500">
          Gerencie o check-in da lista abaixo.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-5 py-4">Nome</th>
              <th className="px-5 py-4">Tipo</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4 text-right">Ações</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {participants.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-5 py-10 text-center text-sm text-gray-500"
                >
                  Nenhum participante encontrado.
                </td>
              </tr>
            ) : (
              participants.map((participant) => {
                const disabled = isHardBlockedStatus(participant.status);
                const loading = loadingId === participant.id;

                return (
                  <tr
                    key={participant.id}
                    className="bg-white transition hover:bg-gray-50"
                  >
                    <td className="px-5 py-4">
                      <div className="font-medium text-gray-900">
                        {participant.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        ID: {participant.id}
                      </div>

                      {/* ERRO */}
                      {errorByParticipant[participant.id] && (
                        <div className="mt-1 text-xs text-red-500">
                          {errorByParticipant[participant.id]}
                        </div>
                      )}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-700">
                      <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-gray-700">
                        {participant.type}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${getStatusStyle(
                          participant.status
                        )}`}
                      >
                        {formatStatus(participant.status)}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleCheckin(participant)}
                        disabled={disabled || loading}
                        className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
                          disabled || loading
                            ? "cursor-not-allowed bg-gray-100 text-gray-400"
                            : "bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]"
                        }`}
                      >
                        {loading
                          ? "Processando..."
                          : disabled
                          ? "Indisponível"
                          : "Check-in"}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}