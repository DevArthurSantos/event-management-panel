import { z } from 'zod';
import { participantSchema } from '../participant/participant.schema';
import { checkinSchema } from '../chekin/checkin.schema';

export const eventSchema = z.object({
  id: z.string(),
  name: z.string(),
  date: z.string(),
  location: z.string(),
  status: z.enum(['active', 'closed', 'cancelled']),
  description: z.string(),
  expected_count: z.number(),
  checkin_count: z.number(),
  error_count: z.number(),
  entry_rate: z.number(),
  participants: z.array(participantSchema).optional(),
  checkins: z.array(checkinSchema).optional(),
});

export type Event = z.infer<typeof eventSchema>;