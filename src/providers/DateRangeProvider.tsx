import { PropsWithChildren, useState } from 'react';
import { DateRangeContext } from '../contexts/DateRangeContext';
import dayjs from 'dayjs';

import type { DateRange } from '../types/daterange';

// start of year
const startOfYear: string = dayjs().startOf('year').format('YYYY-MM-DD');

// end of year
const endOfYear: string = dayjs().endOf('year').format('YYYY-MM-DD').toString();

/**
 * Provider for date range
 *
 * @param param0
 * @returns Date range provider
 */
export const DateRangeProvider = ({ children }: PropsWithChildren) => {
  const [date, setDate] = useState<DateRange>({
    startDate: startOfYear,
    endDate: endOfYear,
  });

  return (
    <DateRangeContext.Provider value={{ date, setDate }}>{children}</DateRangeContext.Provider>
  );
};
