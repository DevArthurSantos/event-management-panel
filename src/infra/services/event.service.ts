import { eventSchema } from '../schemas/event.schema';
import { api } from '@/src/infra/services/api.service';

export async function getEvents() {
  const response = await api.get('/events');

  return response.data.map((event: unknown) =>
    eventSchema.parse(event),
  );
}

export async function getEventById(id: string) {
  const response = await api.get(`/events/${id}`);

  return eventSchema.parse(response.data);
}

export async function createEvent(payload: unknown) {
  const response = await api.post('/events', payload);

  return eventSchema.parse(response.data);
}

export async function updateEvent(
  id: string,
  payload: unknown,
) {
  const response = await api.patch(
    `/events/${id}`,
    payload,
  );

  return eventSchema.parse(response.data);
}

export async function deleteEvent(id: string) {
  await api.delete(`/events/${id}`);

  return {
    success: true,
  };
}