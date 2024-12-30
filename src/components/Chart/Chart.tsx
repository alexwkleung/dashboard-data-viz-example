import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import { CircularProgress } from '@mui/material';
import { getTotalStatus } from '../../utils/get-mock-data';
import { useDateRange } from '../../hooks/useDateRange';
import dayjs from 'dayjs';
import { mockFetchDelay } from '../../utils/mock-fetch';

import type { Options, SeriesOptionsType } from 'highcharts';
import type { TotalStatus } from '../../types/status';

import './Chart.css';

const Chart = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { date } = useDateRange();

  useEffect(() => {
    let isMounted: boolean = true;

    // fetch chart data
    const fetchChartData = async (): Promise<void> => {
      try {
        await mockFetchDelay(1000);

        if (!isMounted) return;

        const chartTitle: string = 'Status Totals';
        const chartCategoriesX: string[] = ['Open', 'Closed', 'In Progress'];
        const chartTitleY: string = 'Total';

        const totalStatus: TotalStatus = await getTotalStatus(
          dayjs(date.startDate),
          dayjs(date.endDate)
        );

        const chartSeries: SeriesOptionsType[] = [
          {
            data: [
              {
                y: totalStatus.Open,
                color: '#DEC5E3',
              },
              {
                y: totalStatus.Closed,
                color: '#81F7E5',
              },
              {
                y: totalStatus['In Progress'],
                color: '#B6DCFE',
              },
            ],
          },
        ] as SeriesOptionsType[];

        const chartOptions = (): Options => ({
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
          colors: ['#000000'],
        });

        const columnChart: Highcharts.Options = chartOptions();

        if (isMounted && document.getElementById('chart1')) {
          Highcharts.chart('chart1', columnChart);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchChartData();

    return () => {
      isMounted = false;
    };
  }, [date.startDate, date.endDate]);

  return (
    <div className="chart-container-root mt-10">
      <div className="chart1-container">
        {isLoading && (
          <div className="flex h-full items-center justify-center">
            <CircularProgress />
          </div>
        )}
        <div className="chart-container" id="chart1"></div>
      </div>
    </div>
  );
};

export default Chart;
