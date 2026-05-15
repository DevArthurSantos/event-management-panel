// create-event.schema.ts

import { z } from 'zod';

export const updateEventSchema = z.object({
  name: z.string(),
  date: z.string(),
  status: z.enum(['active', 'closed', 'cancelled']),
  location: z.string(),
  description: z.string(),
  expected_count: z.number(),
});

export type UpdateEventInput =
  z.infer<typeof updateEventSchema>;