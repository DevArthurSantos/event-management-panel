import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { memo } from "react";

function EventErrorState() {
  return (
    <main className="flex min-h-100 items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold">
          Evento não encontrado
        </h2>

        <p className="text-sm text-zinc-500">
          Não foi possível carregar os dados do evento.
        </p>

        <Link href="/events">
          <Button>
            Voltar
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default memo(EventErrorState)