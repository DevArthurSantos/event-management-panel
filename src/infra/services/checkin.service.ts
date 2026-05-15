import { checkinSchema } from '../schemas/checkin.schema';
import { api } from '@/src/infra/services/api.service';


export async function getCheckinsByEvent(
  eventId: string,
) {
  const response = await api.get(
    `/checkins?event_id=${eventId}`,
  );

  return response.data.map((checkin: unknown) =>
    checkinSchema.parse(checkin),
  );
}

export async function createCheckin(
  payload: unknown,
) {
  const response = await api.post(
    '/checkins',
    payload,
  );

  return checkinSchema.parse(response.data);
}