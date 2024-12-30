import dayjs from 'dayjs';
import { parseMockFetch } from './mock-fetch';

import type { Dayjs } from 'dayjs';
import type { MockData } from '../types/mockdata';
import type { TotalStatus } from '../types/status';

/**
 * Filter by date range.
 *
 * @async
 * @param start Start date
 * @param end End date
 * @returns A promise containing the filtered mock data according to the specified date range
 */
export async function filterByDateRange(
  start: string | Dayjs,
  end: string | Dayjs
): Promise<MockData[]> {
  const parse: MockData[] = await parseMockFetch();

  const filter: MockData[] = parse.filter(
    (props) => dayjs(props.dateCreated) >= dayjs(start) && dayjs(props.dateCreated) <= dayjs(end)
  );

  return filter;
}

/**
 * Get total mock data entries
 *
 * @async
 * @returns Total number of mock data entries
 */
export async function getTotalMockData(): Promise<number> {
  const parse: MockData[] = await parseMockFetch();

  return parse?.length;
}

/**
 * Get total data entries by status.
 *
 * @async
 * @param status Status to filter by
 * @param start Start of date range
 * @param end End of date range
 * @returns Object with the total of each status
 */
export async function getTotalStatus(start: Dayjs, end: Dayjs): Promise<TotalStatus> {
  let openCount: number = 0;
  let closedCount: number = 0;
  let inProgressCount: number = 0;

  const filter: MockData[] = await filterByDateRange(start, end);

  filter.map((props) => {
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
