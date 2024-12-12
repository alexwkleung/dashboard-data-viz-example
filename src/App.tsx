import Dashboard from './components/Dashboard/Dashboard';
import TabNavigation from './components/TabNavigation/TabNavigation';

import './App.css';

function App() {
  return (
    <>
      <div className="flex">
        <TabNavigation />
        <div className="flex-1">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
