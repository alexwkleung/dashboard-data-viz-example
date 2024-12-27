import { mockData } from '../data/data';
import dayjs from 'dayjs';

import type { Dayjs } from 'dayjs';
import type { MockData } from '../types/mockdata';
import type { TotalStatus } from '../types/status';

/**
 * Filter by date range.
 *
 * @param start Start date
 * @param end End date
 * @returns
 */
export function filterByDateRange(start: string | Dayjs, end: string | Dayjs): MockData[] {
  const filter: MockData[] = mockData.filter(
    (props) => dayjs(props.dateCreated) >= dayjs(start) && dayjs(props.dateCreated) <= dayjs(end)
  );

  return filter;
}

/**
 * Get total mock data entries
 *
 * @returns Total number of mock data entries
 */
export function getTotalMockData(): number {
  return mockData?.length;
}

/**
 * Get total data entries by status.
 *
 * @param status Status to filter by
 * @param start Start of date range
 * @param end End of date range
 * @returns Object with the total of each status
 */
export function getTotalStatus(start: Dayjs, end: Dayjs): TotalStatus {
  let openCount: number = 0;
  let closedCount: number = 0;
  let inProgressCount: number = 0;

  filterByDateRange(start, end).map((props) => {
    switch (props.status) {
      case 'Open':
        openCount++;
        break;
      case 'Closed':
        closedCount++;
        break;
      case 'In Progress':
        inProgressCount++;
    }
  });

  return {
    Open: openCount,
    Closed: closedCount,
    'In Progress': inProgressCount,
  };
}
