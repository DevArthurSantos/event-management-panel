'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/src/components/ui/forms/Inputs';
import { Button } from '@/src/components/ui/Button';
import { CreateParticipantInput, createParticipantSchema } from '@/src/infra/schemas/participant/create-participant.schema';

interface Props {
  defaultValues?: Partial<CreateParticipantInput>;
  onSubmit: (values: CreateParticipantInput) => Promise<void>;
}

export function ParticipantForm({ defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateParticipantInput>({
    resolver: zodResolver(createParticipantSchema),
    defaultValues: { type: 'normal', ...defaultValues },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">Nome completo</label>
        <Input placeholder="Ana Clara Pereira" {...register('name')} />
        {errors.name && <p className="text-sm text-error">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-aura-text">Tipo de participante</label>
        <select
          {...register('type')}
          className="w-full h-12 rounded-md border border-aura-border bg-aura-card px-5 text-aura-text focus:border-primary-500 focus:outline-none transition-colors"
        >
          <option value="normal">Normal</option>
          <option value="vip">VIP</option>
        </select>
      </div>

      <Button type="submit" disabled={isSubmitting} className="btn-primary w-full py-6 text-base">
        {isSubmitting ? 'Salvando...' : 'Salvar Participante'}
      </Button>
    </form>
  );
}