import { NavLink, useLocation } from 'react-router';

const TabNavigation = () => {
  const locationPath: string = useLocation().pathname;

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

            <li>
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

export default TabNavigation;
