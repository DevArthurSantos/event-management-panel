'use client';

import { Button } from '@/src/components/ui/Button';
import { Participant } from '@/src/infra/schemas/participant/participant.schema';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';


interface Props {
  data: Participant[];

  onCheckin: (
    participant: Participant,
  ) => void;
}

export function ParticipantsDataTable({
  data,
  onCheckin,
}: Props) {
  const columns: ColumnDef<Participant>[] =
    [
      {
        accessorKey: 'name',
        header: 'Nome',
      },

      {
        accessorKey: 'email',
        header: 'Email',
      },

      {
        accessorKey: 'type',
        header: 'Tipo',
      },

      {
        accessorKey: 'status',
        header: 'Status',
      },

      {
        id: 'actions',

        header: 'Ações',

        cell: ({ row }) => (
          <Button
            onClick={() =>
              onCheckin(row.original)
            }
          >
            Check-in
          </Button>
        ),
      },
    ];

  const table = useReactTable({
    data,

    columns,

    getCoreRowModel:
      getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <table className="w-full">
        <thead className="bg-zinc-100">
          {table
            .getHeaderGroups()
            .map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header) => (
                    <th
                      key={header.id}
                      className="p-4 text-left text-sm font-medium"
                    >
                      {flexRender(
                        header.column
                          .columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ),
                )}
              </tr>
            ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(
            (row) => (
              <tr
                key={row.id}
                className="border-t"
              >
                {row
                  .getVisibleCells()
                  .map((cell) => (
                    <td
                      key={cell.id}
                      className="p-4 text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef
                          .cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}