import Chart from '../Chart/Chart';
import CardStatistics from '../CardStatistics/CardStatistics';
import DataGridTable from '../DataGridTable/DataGridTable';
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import { DateRangeProvider } from '../../providers/DateRangeProvider';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <CardStatistics />
      <DateRangeProvider>
        <DateRangePicker />
        <Chart />
        <DataGridTable />
      </DateRangeProvider>
    </>
  );
};

export default Dashboard;
