'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/src/components/ui/forms/Inputs';
import { Button } from '@/src/components/ui/Button';
import { CreateParticipantInput, createParticipantSchema } from '@/src/infra/schemas/participant/create-participant.schema';


interface Props {
  defaultValues?: Partial<CreateParticipantInput>;

  onSubmit: (
    values: CreateParticipantInput,
  ) => Promise<void>;
}

export function ParticipantForm({
  defaultValues,
  onSubmit,
}: Props) {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<CreateParticipantInput>({
    resolver: zodResolver(
      createParticipantSchema
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
          placeholder="name"
          {...register('name')}
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <select
          {...register('type')}
          className="h-10 w-full rounded-lg border border-zinc-300 px-3 text-sm"
        >
          <option value="normal">
            Normal
          </option>

          <option value="vip">
            VIP
          </option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
      >
        Salvar Participante
      </Button>
    </form>
  );
}