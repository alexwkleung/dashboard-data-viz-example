import { createContext } from 'react';
import { DateRangeContextProps } from '../types/daterange';

export const DateRangeContext = createContext<DateRangeContextProps>({
  date: {
    startDate: '',
    endDate: '',
  },
  setDate: (): void => {},
});
