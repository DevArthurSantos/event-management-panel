import { getEvents } from '@/infra/services/event.service';
import { useQuery } from '@tanstack/react-query';

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
}