import { mock } from '../data/mock';

import type { Status } from '../types/status';

/**
 * Get total mock data entries
 *
 * @returns Total number of mock data entries
 */
export function getTotalMockData(): number {
  return mock?.length;
}

export function getTotalStatus(status: Status): number {
  let statusCount: number = 0;

  mock.map((data) => {
    if (data.status === status) {
      statusCount++;
    }
  });

  return statusCount;
}
