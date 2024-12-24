import Dashboard from './components/Dashboard/Dashboard';
import TabNavigation from './components/TabNavigation/TabNavigation';

import './App.css';

function App() {
  return <TabNavigation children={<Dashboard />} />;
}

export default App;
