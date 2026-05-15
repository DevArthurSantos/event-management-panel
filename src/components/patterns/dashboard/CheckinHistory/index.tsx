import { Checkin } from "@/src/infra/schemas/chekin/checkin.schema";

interface Props {
  checkins: Checkin[];
}

export function CheckinHistory({
  checkins,
}: Props) {
  return (
    <div className="rounded-md border border-gray-100 p-5 h-107.5 overflow-auto">
      <h2 className="mb-5 text-lg font-semibold">
        Histórico
      </h2>

      <div className="space-y-4">
        {checkins.map((checkin) => (
          <div
            key={checkin.id}
            className="flex items-center justify-between border-b pb-3"
          >
            <div>
              <p className="font-medium">
                {checkin.action}
              </p>

              <p className="text-sm text-gray-500">
                {checkin.timestamp}
              </p>
            </div>

            <span className="text-sm uppercase">
              {checkin.success
                ? 'Sucesso'
                : 'Erro'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}