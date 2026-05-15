import { memo } from "react";
import { Button } from "@/src/components/ui/Button";

function EventErrorState() {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 p-8 text-center">
      <h2 className="text-xl font-semibold">
        Nenhum dado encontrado
      </h2>

      <p className="mt-2 max-w-sm text-sm text-gray-500">
        Ainda não existem informações disponíveis
        para este evento.
      </p>

      <div className="mt-6">
        <Button>
          Criar agora
        </Button>
      </div>
    </div>
  );

}

export default memo(EventErrorState)
