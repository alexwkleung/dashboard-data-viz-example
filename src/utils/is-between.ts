/**
 * Check if a value is between an inclusive range.
 *
 * @param base Base value to check
 * @param lower Lower bound value (inclusive)
 * @param upper Upper bound value (inclusive)
 * @returns True if the base is between lower and upper; false otherwise
 */
export function isBetween<T>(base: T, lower: T, upper: T): boolean {
  return base >= lower && base <= upper;
}
