/**
 * Date range interface
 */
export interface DateRange {
  startDate: string;
  endDate: string;
}

/**
 * Date range context properties interface
 */
export interface DateRangeContextProps {
  date: DateRange;
  setDate: (date: DateRange) => void;
}
