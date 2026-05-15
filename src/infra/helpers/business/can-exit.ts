import { Participant } from "@infra/schemas/participant/participant.schema";

export function canExit(
  participant: Participant,
) {
  return (
    participant.type === 'vip' &&
    participant.status === 'inside'
  );
}