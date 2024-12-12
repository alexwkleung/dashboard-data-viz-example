import { mock } from '../data/mock';

import type { MockData } from '../data/mock';

/**
 * Get total mock data entries
 *
 * @returns Total number of mock data entries
 */
export function getTotalMockData(): number {
  return mock?.length;
}
