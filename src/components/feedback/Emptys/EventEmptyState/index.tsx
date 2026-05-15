import { memo } from "react";
import { Button } from "@/src/components/ui/Button";

function EventEmptyState() {
  return (
    <div className="card text-center p-12">
      <div className="mx-auto mb-6 h-16 w-16 rounded-md bg-aura-border/30 flex items-center justify-center text-4xl">
        📭
      </div>
      <h2 className="text-2xl font-semibold text-aura-text">Nenhum dado encontrado</h2>
      <p className="mt-3 text-aura-text-secondary max-w-sm mx-auto">
        Ainda não existem informações disponíveis para este evento.
      </p>
      <Button className="btn-primary mt-8 px-8">Criar agora</Button>
    </div>
  );
}

export default memo(EventEmptyState);