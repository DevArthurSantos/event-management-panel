import { Participant } from "../../schemas/participant.schema";

export function canExit(
  participant: Participant,
) {
  return (
    participant.type === 'vip' &&
    participant.status === 'inside'
  );
}