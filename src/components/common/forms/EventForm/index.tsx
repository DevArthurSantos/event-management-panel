'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createEventSchema,
} from '@infra/schemas/event/create-event.schema';
import { Input } from '@components/ui/forms/Inputs';
import { Button } from '@components/ui/Button';
import { UpdateEventInput, updateEventSchema } from '@infra/schemas/event/update-event.schema';

interface Props {
  defaultValues?: Partial<UpdateEventInput>;
  onSubmit: (values: UpdateEventInput) => Promise<void>;
}

export function EventForm({ defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateEventInput>({
    resolver: zodResolver(updateEventSchema),
    defaultValues: {
      ...defaultValues,
      status: defaultValues?.status ?? 'active',

      date: defaultValues?.date
        ? new Date(defaultValues.date).toISOString().split('T')[0]
        : '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* NAME */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">
          Nome do evento
        </label>
        <Input placeholder="Tech Summit 2025" {...register('name')} />
        {errors.name && (
          <p className="text-sm text-error">{errors.name.message}</p>
        )}
      </div>

      {/* LOCATION */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">
          Local
        </label>
        <Input
          placeholder="Centro de Convenções, São Paulo - SP"
          {...register('location')}
        />
        {errors.location && (
          <p className="text-sm text-error">{errors.location.message}</p>
        )}
      </div>

      {/* DATE */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">
          Data
        </label>
        <Input type="date" {...register('date')} />
      </div>

      {/* STATUS 🔥 NOVO */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">
          Status do evento
        </label>

        <select
          {...register('status')}
          className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-aura-text"
        >
          <option value="active">Ativo</option>
          <option value="closed">Fechado</option>
          <option value="cancelled">Cancelado</option>
        </select>

        {errors.status && (
          <p className="text-sm text-error">{errors.status.message}</p>
        )}
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">
          Descrição
        </label>
        <Input
          placeholder="Descrição opcional do evento"
          {...register('description')}
        />
      </div>

      {/* EXPECTED COUNT */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">
          Participantes esperados
        </label>
        <Input
          type="number"
          placeholder="150"
          {...register('expected_count', { valueAsNumber: true })}
        />
      </div>

      {/* SUBMIT */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-6 text-base"
      >
        {isSubmitting ? 'Salvando...' : 'Salvar Evento'}
      </Button>
    </form>
  );
}