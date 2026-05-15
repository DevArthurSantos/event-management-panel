interface Props {
  title: string;
  value: number | string;
}

export function MetricCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5">
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}