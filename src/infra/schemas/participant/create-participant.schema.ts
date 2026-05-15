// create-participant.schema.ts

import { z } from 'zod';

export const createParticipantSchema =
  z.object({
    name: z.string().min(1),
    type: z.enum(['normal', 'vip']),
  });

export type CreateParticipantInput =
  z.infer<
    typeof createParticipantSchema
  >;