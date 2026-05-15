import { Participant } from "@/src/infra/schemas/participant.schema";
import { Event } from "@/src/infra/schemas/event.schema";


interface Result {
  allowed: boolean;
  reason?: string;
}

export function canCheckin(
  event: Event,
  participant: Participant,
): Result {
  if (event.status === 'closed') {
    return {
      allowed: false,
      reason: 'Evento encerrado',
    };
  }

  if (
    participant.type === 'normal' &&
    participant.checkin_count >= 1
  ) {
    return {
      allowed: false,
      reason: 'Participante já realizou check-in',
    };
  }

  return {
    allowed: true,
  };
}