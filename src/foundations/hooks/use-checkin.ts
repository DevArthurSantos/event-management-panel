import { getCheckinsByEvent } from '@infra/services/checkin.service';
import { useQuery } from '@tanstack/react-query';


export function useCheckins(eventId: string) {
  return useQuery({
    queryKey: ['checkins', eventId],
    queryFn: () => getCheckinsByEvent(eventId),

    enabled: !!eventId,
  });
}