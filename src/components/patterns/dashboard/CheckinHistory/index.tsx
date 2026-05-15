import { Checkin } from "@/src/infra/schemas/chekin/checkin.schema";

interface Props {
  checkins: Checkin[];
}

export function CheckinHistory({ checkins }: Props) {
  return (
    <div className="card p-6 h-[420px] overflow-auto">
      <h2 className="mb-6 text-lg font-semibold text-aura-text">Atividade Recente</h2>

      <div className="space-y-6">
        {checkins.length === 0 ? (
          <p className="text-aura-text-secondary text-center py-8">Nenhum check-in registrado ainda.</p>
        ) : (
          checkins.map((checkin) => (
            <div
              key={checkin.id}
              className="flex items-center justify-between border-b border-aura-border pb-4 last:border-none"
            >
              <div>
                <p className="font-medium text-aura-text">{checkin.action}</p>
                <p className="text-xs text-aura-text-secondary font-mono">
                  {checkin.timestamp}
                </p>
              </div>
              <span
                className={`inline-flex rounded-md px-4 py-1 text-xs font-semibold uppercase ${
                  checkin.success
                    ? 'bg-success text-aura-text'
                    : 'bg-cancelled text-aura-text'
                }`}
              >
                {checkin.success ? 'Sucesso' : 'Erro'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}