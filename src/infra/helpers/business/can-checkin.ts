import { Event } from "@infra/schemas/event/event.schema";
import { Participant } from "@infra/schemas/participant/participant.schema";

interface Result {
  allowed: boolean;
  reason?: string;
  errorKey?: string;
}

export function canCheckin(
  event: Event,
  participant: Participant,
): Result {
  if (event.status === "closed") {
    return {
      allowed: false,
      reason: "Evento encerrado",
      errorKey: "event_closed",
    };
  }

  if (event.status === "cancelled") {
    return {
      allowed: false,
      reason: "Evento cancelado",
      errorKey: "event_cancelled",
    };
  }

  if (participant.type === "normal" && participant.checkin_count >= 1) {
    return {
      allowed: false,
      reason: "Participante já realizou check-in",
      errorKey: "already_checked_in",
    };
  }

  return {
    allowed: true,
  };
}