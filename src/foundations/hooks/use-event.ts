import { getEventById } from '@infra/services/event.service';
import { useQuery } from '@tanstack/react-query';

export function useEvent(id: string) {
  return useQuery({
    queryKey: ['event', id],
    queryFn: () => getEventById(id),
    enabled: !!id,
  });
}