import { ComponentProps } from "react";

interface MetricCardsProps extends ComponentProps<"div"> {
  title: string;
  value: number | string;
}

export function MetricCard({ title, value, ...rest }: MetricCardsProps) {
  return (
    <div {...rest} className="rounded-md border border-gray-100 p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="mt-3 text-3xl font-bold">{value}</h2>
    </div>
  );
}