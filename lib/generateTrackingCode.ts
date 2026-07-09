export function generateTrackingCode(
  stateCode: string,
  sequence: number
) {
  const year = new Date().getFullYear();

  // Pad number with leading zeros
  const paddedSequence = sequence.toString().padStart(5, "0");

  return `NG-${stateCode.toUpperCase()}-${year}-${paddedSequence}`;
}