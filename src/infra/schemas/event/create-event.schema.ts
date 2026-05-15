// create-event.schema.ts

import { z } from 'zod';

export const createEventSchema = z.object({
  name: z.string(),
  date: z.string(),
  location: z.string(),
  description: z.string(),
  expected_count: z.number(),
});

export type CreateEventInput =
  z.infer<typeof createEventSchema>;