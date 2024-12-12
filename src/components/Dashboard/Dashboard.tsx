import Chart from '../Chart/Chart';
import CardStatistics from '../CardStatistics/CardStatistics';
import DataGridTable from '../DataGridTable/DataGridTable';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <CardStatistics />
      <Chart />
      <DataGridTable />
    </>
  );
};

export default Dashboard;
