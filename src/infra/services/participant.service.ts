import { api } from '@/src/infra/services/api.service';
import { participantSchema } from '@/src/infra/schemas/participant/participant.schema';

export async function getParticipantsByEvent(
  eventId: string,
) {
  const response = await api.get(
    `/participants?event_id=${eventId}`,
  );

  return response.data.map((participant: unknown) =>
    participantSchema.parse(participant),
  );
}

export async function createParticipant(
  payload: unknown,
) {
  const response = await api.post(
    '/participants',
    payload,
  );

  return participantSchema.parse(response.data);
}

export async function updateParticipant(
  id: string,
  payload: unknown,
) {
  const response = await api.patch(
    `/participants/${id}`,
    payload,
  );

  return participantSchema.parse(response.data);
}

export async function deleteParticipant(
  id: string,
) {
  await api.delete(`/participants/${id}`);

  return {
    success: true,
  };
}