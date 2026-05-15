import { z } from 'zod';

export const participantSchema = z.object({
  id: z.string(),
  event_id: z.string(),
  name: z.string(),
  type: z.enum(['vip', 'normal']),
  status: z.enum(['inside', 'outside']),
  checkin_count: z.number(),
});

export type Participant = z.infer<typeof participantSchema>;