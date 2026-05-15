'use client';

import { Participant } from "@/src/infra/schemas/participant.schema";


interface Props {
  participants: Participant[];
  onCheckin: (participant: Participant) => void;
}

export function ParticipantsTable({
  participants,
  onCheckin,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200">
      <table className="w-full">
        <thead className="bg-zinc-100">
          <tr>
            <th className="p-4 text-left text-sm">
              Nome
            </th>

            <th className="p-4 text-left text-sm">
              Tipo
            </th>

            <th className="p-4 text-left text-sm">
              Status
            </th>

            <th className="p-4 text-left text-sm">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {participants.map((participant) => (
            <tr
              key={participant.id}
              className="border-t"
            >
              <td className="p-4 text-sm">
                {participant.name}
              </td>

              <td className="p-4 text-sm uppercase">
                {participant.type}
              </td>

              <td className="p-4 text-sm uppercase">
                {participant.status}
              </td>

              <td className="p-4">
                <button
                  onClick={() =>
                    onCheckin(participant)
                  }
                >
                  Check-in
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}