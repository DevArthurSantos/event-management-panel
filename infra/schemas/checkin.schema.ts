import { z } from 'zod';

export const checkinSchema = z.object({
  id: z.string(),
  event_id: z.string(),
  participant_id: z.string(),
  timestamp: z.string(),
  success: z.boolean(),
  action: z.enum(['entry', 'exit']),
  error_reason: z
    .enum(['already_checked_in', 'event_closed'])
    .nullable(),
});

export type Checkin = z.infer<typeof checkinSchema>;