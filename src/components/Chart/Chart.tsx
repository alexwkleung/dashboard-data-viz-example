import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import { CircularProgress } from '@mui/material';
import { chartOptions } from '../../data/chart-options';

import './Chart.css';

const Chart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate fetch
    try {
      setTimeout(() => {
        const columnChart: Highcharts.Options = chartOptions();

        Highcharts.chart('chart1', columnChart);
      }, 1100);
      // catch any thrown errors
    } catch (err) {
      console.error(err);
    }

    // clean up
    return () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1100);
    };
  }, [isLoading]);

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
