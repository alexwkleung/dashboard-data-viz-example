import { generateRandomNumber } from '../../utils/generateRandomNumber';

const CardStatistics = () => {
  return (
    <>
      <div className="cards mt-6 grid grid-cols-2 grid-rows-2 gap-3">
        <div
          className="ml-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6"
          data-swapy-item="a"
        >
          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">{generateRandomNumber(9999)}</p>

            <p className="text-sm text-gray-500">Stat Name 1</p>
          </div>
        </div>

        <div
          className="mr-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6"
          data-swapy-item="b"
        >
          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">{generateRandomNumber(9999)}</p>

            <p className="text-sm text-gray-500">Stat Name 2</p>
          </div>
        </div>

        <div
          className="ml-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6"
          data-swapy-item="c"
        >
          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">{generateRandomNumber(9999)}</p>

            <p className="text-sm text-gray-500">Stat Name 3</p>
          </div>
        </div>

        <div
          className="mr-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6"
          data-swapy-item="d"
        >
          <span className="rounded-full bg-blue-100 p-3 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">{generateRandomNumber(9999)}</p>

            <p className="text-sm text-gray-500">Stat Name 4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStatistics;
