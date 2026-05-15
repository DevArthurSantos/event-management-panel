import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { memo } from "react";

function EventErrorState() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-aura-bg">
      <div className="card max-w-md text-center p-10">
        <div className="mx-auto mb-6 h-16 w-16 rounded-md bg-cancelled/10 flex items-center justify-center">
          <span className="text-4xl">⚠️</span>
        </div>
        <h2 className="text-3xl font-semibold text-aura-text">Evento não encontrado</h2>
        <p className="mt-3 text-aura-text-secondary">
          Não foi possível carregar os dados deste evento.
        </p>
        <Link href="/events" className="mt-8 block">
          <Button className="btn-primary w-full">Voltar para Eventos</Button>
        </Link>
      </div>
    </main>
  );
}

export default memo(EventErrorState);