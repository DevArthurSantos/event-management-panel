export function calculateEntryRate(
  expected: number,
  checkins: number,
) {
  if (!expected) return 0;

  return Number(
    (
      (checkins / expected) *
      100
    ).toFixed(2),
  );
}