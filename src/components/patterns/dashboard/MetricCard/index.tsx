import { ComponentProps } from "react";

interface MetricCardsProps extends ComponentProps<"div"> {
  title: string;
  value: number | string;
}

export function MetricCard({ title, value, ...rest }: MetricCardsProps) {
  return (
    <div
      {...rest}
      className="card p-6 text-center hover:border-primary-500/30 transition-colors"
    >
      <p className="text-sm font-medium text-aura-text-secondary">{title}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-aura-text">
        {value}
      </h2>
    </div>
  );
}