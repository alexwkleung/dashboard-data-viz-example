import { createContext, PropsWithChildren, useState } from 'react';
import dayjs from 'dayjs';

import type { DateRange, DateRangeContextProps } from '../types/daterange';

// start of year
const startOfYear: string = dayjs().startOf('year').format('YYYY-MM-DD');

// end of year
const endOfYear: string = dayjs().endOf('year').format('YYYY-MM-DD').toString();

export const DateRangeContext = createContext<DateRangeContextProps>({
  date: {
    startDate: '',
    endDate: '',
  },
  setDate: (): void => {},
});

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
