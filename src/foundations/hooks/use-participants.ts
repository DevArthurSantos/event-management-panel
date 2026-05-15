import { getParticipantsByEvent } from '@infra/services/participant.service';
import { useQuery } from '@tanstack/react-query';


export function useParticipants(eventId: string) {
  return useQuery({
    queryKey: ['participants', eventId],
    queryFn: () =>
      getParticipantsByEvent(eventId),

    enabled: !!eventId,
  });
}