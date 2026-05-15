'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createEventSchema, CreateEventInput } from '@/src/infra/schemas/event/create-event.schema';
import { Input } from '@/src/components/ui/forms/Inputs';
import { Button } from '@/src/components/ui/Button';

interface Props {
  defaultValues?: Partial<CreateEventInput>;
  onSubmit: (values: CreateEventInput) => Promise<void>;
}

export function EventForm({ defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateEventInput>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      ...defaultValues,
      date: defaultValues?.date
        ? new Date(defaultValues.date).toISOString().split('T')[0]
        : '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">Nome do evento</label>
        <Input placeholder="Tech Summit 2025" {...register('name')} />
        {errors.name && <p className="text-sm text-error">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">Local</label>
        <Input placeholder="Centro de Convenções, São Paulo - SP" {...register('location')} />
        {errors.location && <p className="text-sm text-error">{errors.location.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">Data</label>
        <Input type="date" {...register('date')} />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">Descrição</label>
        <Input placeholder="Descrição opcional do evento" {...register('description')} />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">Participantes esperados</label>
        <Input type="number" placeholder="150" {...register('expected_count', { valueAsNumber: true })} />
      </div>

      <Button type="submit" disabled={isSubmitting} className="btn-primary w-full py-6 text-base">
        {isSubmitting ? 'Salvando...' : 'Salvar Evento'}
      </Button>
    </form>
  );
}