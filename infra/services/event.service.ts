import { eventSchema } from '../schemas/event.schema';
import { api } from './api';

export async function getEvents() {
  const response = await api.get('/events.json');

  return response.data.data.map((event: unknown) =>
    eventSchema.parse(event),
  );
}

export async function getEventById(id: string) {
  const response = await api.get(`/events/${id}.json`);

  return eventSchema.parse(response.data);
}
