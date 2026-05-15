'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface Props {
  checkins: number;
  expected: number;
}

export function CheckinChart({
  checkins,
  expected,
}: Props) {
  const data = [
    {
      name: 'Participantes',
      checkins,
      expected,
    },
  ];

  return (
    <div className="rounded-md border border-gray-100 p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Taxa de Entrada
        </h2>

        <p className="text-sm text-gray-500">
          Comparativo de presença.
        </p>
      </div>

      <div className="h-[320px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="expected" />

            <Bar dataKey="checkins" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}