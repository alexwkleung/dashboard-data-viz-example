import { NavLink, useLocation } from 'react-router';
import { useEffect } from 'react';

import type { PropsWithChildren } from 'react';

const Tabs = () => {
  const locationPath: string = useLocation().pathname;

  useEffect(() => {
    // change title based on the current location path
    switch (locationPath) {
      case '/':
        document.title = 'Dashboard | Dashboard Data Visualization Template';
        break;
      case '/tab-2':
        document.title = 'Tab 2 | Dashboard Data Visualization Template';
        break;
      default:
        document.title = 'Dashboard Data Visualization Template';
    }
  }, [locationPath]);

  return (
    <div>
      <div className="max-width-sidebar b-color flex h-screen w-96 flex-col justify-between border-e">
        <div className="px-3 py-0">
          <ul className="mt-6 space-y-1">
            <li>
              <NavLink
                to="/"
                className={
                  (locationPath === '/'
                    ? 'border-gray-500 bg-gray-100 text-gray-700'
                    : 'border-gray-300 text-gray-700') +
                  ' block rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700'
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li className="pt-2">
              <NavLink
                to="/tab-2"
                className={
                  (locationPath === '/tab-2'
                    ? 'border-gray-500 text-gray-700'
                    : 'border-gray-300 text-gray-700') +
                  ' block rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700'
                }
              >
                Tab 2
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TabNavigation = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex">
      <Tabs />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default TabNavigation;
