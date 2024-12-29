/**
 * Mock fetch. Simulates a fetch using timeout.
 *
 * Must await the function call.
 *
 * @async
 * @param ms Time in milliseconds
 * @returns A promise that mocks a fetch via timeout
 */
export const mockFetch = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
