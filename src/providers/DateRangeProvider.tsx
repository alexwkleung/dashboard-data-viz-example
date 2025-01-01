import { PropsWithChildren, useState } from 'react';
import { DateRangeContext } from '../contexts/DateRangeContext';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '../constants/date-format';

import type { DateRange } from '../types/daterange';

// start of year
const startOfYear: string = dayjs().startOf('year').format(DATE_FORMAT.default);

// end of year
const endOfYear: string = dayjs().endOf('year').format(DATE_FORMAT.default);

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
