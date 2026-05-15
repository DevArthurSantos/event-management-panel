import { memo } from "react";

function LoadingEventState() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-aura-bg">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-aura-border border-t-primary-500" />
        <p className="mt-6 text-aura-text-secondary">Carregando evento...</p>
      </div>
    </main>
  );
}

export default memo(LoadingEventState);