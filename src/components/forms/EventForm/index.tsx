'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  createEventSchema,
  CreateEventInput,
} from '@/src/infra/schemas/event/create-event.schema';

import { Input } from '@/src/components/ui/forms/Inputs';
import { Button } from '@/src/components/ui/Button';

interface Props {
  defaultValues?: Partial<CreateEventInput>;

  onSubmit: (
    values: CreateEventInput,
  ) => Promise<void>;
}

export function EventForm({
  defaultValues,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<CreateEventInput>({
    resolver: zodResolver(
      createEventSchema
    ),

    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <Input
          placeholder="Nome do evento"
          {...register('name')}
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Input
          placeholder="Local"
          {...register('location')}
        />

        {errors.location && (
          <p className="mt-2 text-sm text-red-500">
            {errors.location.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type="date"
          {...register('date')}
        />
      </div>

      <div>
        <Input
          placeholder="Descrição"
          {...register('description')}
        />
      </div>

      <div>
        <Input
          type="number"
          placeholder="Participantes esperados"
          {...register('expected_count', {
            valueAsNumber: true,
          })}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
      >
        Salvar Evento
      </Button>
    </form>
  );
}