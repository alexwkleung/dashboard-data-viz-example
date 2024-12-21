/**
 * Generate random number
 *
 * @param upperBound Upper bound for number generation.
 * @param fixed By default this is true. If passing in false, the generated number will not be rounded down to the nearest integer.
 * @returns A generated random number.
 */
export function generateRandomNumber(upperBound: number, fixed?: boolean | undefined): number {
  return !fixed && fixed === false
    ? Math.random() * upperBound
    : Math.floor(Math.random() * upperBound);
}
