import { useContext } from 'react';
import { DateRangeContext } from '../providers/DateRangeProvider';

/**
 * Use date range hook
 *
 * @returns Object containing the properties of the date range context
 */
export const useDateRange = () => {
  const { date, setDate } = useContext(DateRangeContext);

  return { date, setDate };
};
