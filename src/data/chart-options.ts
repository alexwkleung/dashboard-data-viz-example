import { getTotalStatus } from '../utils/getMockData';

import type { Options, SeriesOptionsType } from 'highcharts';

/**
 * Chart title
 */
const chartTitle: string = 'Column Chart';

/**
 * Chart categories (X-Axis)
 */
const chartCategoriesX: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

/**
 * Chart title (Y-Axis)
 */
const chartTitleY: string = 'Value';

/**
 * Chart series
 */
const chartSeries: SeriesOptionsType[] = [
  {
    data: [getTotalStatus('Open')],
  },
  {
    data: [getTotalStatus('Closed')],
  },
  {
    data: [getTotalStatus('In Progress')],
  },
] as SeriesOptionsType[];

/**
 * Chart options
 *
 * @returns Chart options
 */
export function chartOptions(): Options {
  return {
    chart: {
      type: 'column',
    },
    title: {
      text: chartTitle,
    },
    xAxis: {
      categories: chartCategoriesX,
    },
    yAxis: {
      title: {
        text: chartTitleY,
      },
    },
    series: chartSeries,
    accessibility: {
      enabled: true,
    },
  };
}
