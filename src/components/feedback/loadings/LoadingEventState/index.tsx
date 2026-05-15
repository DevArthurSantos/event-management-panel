import { memo } from "react";

function LoadingEventState() {
  return (
    <main className="flex min-h-100 items-center justify-center">
      <div className="space-y-3 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-300 border-t-black" />

        <p className="text-sm text-zinc-500">
          Carregando evento...
        </p>
      </div>
    </main>
  );
}

export default memo(LoadingEventState)
