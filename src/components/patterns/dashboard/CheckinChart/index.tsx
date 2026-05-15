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

export function CheckinChart({ checkins, expected }: Props) {
  const data = [{ name: 'Presença', checkins, expected }];

  return (
    <div className="card p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-aura-text">Taxa de Entrada</h2>
        <p className="text-sm text-aura-text-secondary">Comparativo de presença</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" tick={{ fill: '#cbd5e1' }} />
            <YAxis tick={{ fill: '#cbd5e1' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e2937',
                border: '1px solid #334155',
                borderRadius: '12px',
                color: '#f8fafc',
              }}
            />
            <Bar dataKey="expected" fill="#64748b" name="Esperados" radius={[4, 4, 0, 0]} />
            <Bar dataKey="checkins" fill="#3b82f6" name="Check-ins" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}