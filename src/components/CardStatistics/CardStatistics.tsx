import { generateRandomNumber } from '../../utils/generateRandomNumber';

const CardStatistics = () => {
  return (
    <>
      <div className="cards mt-6 grid grid-cols-2 grid-rows-2 gap-3">
        <div className="ml-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6 hover:bg-gray-100">
          <span className="rounded-full bg-blue-300 p-3 hover:bg-blue-200">
            <svg className="size-8" stroke="currentColor"></svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">{generateRandomNumber(9999)}</p>

            <p className="text-sm text-gray-500">Stat Name 1</p>
          </div>
        </div>

        <div className="mr-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6 hover:bg-gray-100">
          <span className="rounded-full bg-blue-300 p-3 hover:bg-blue-200">
            <svg className="size-8" stroke="currentColor"></svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">{generateRandomNumber(9999)}</p>

            <p className="text-sm text-gray-500">Stat Name 2</p>
          </div>
        </div>

        <div className="ml-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6 hover:bg-gray-100">
          <span className="rounded-full bg-blue-300 p-3 hover:bg-blue-200">
            <svg className="size-8" stroke="currentColor"></svg>
          </span>

          <div>
            <p className="text-2xl font-medium text-gray-900">{generateRandomNumber(9999)}</p>

            <p className="text-sm text-gray-500">Stat Name 3</p>
          </div>
        </div>

        <div className="mr-5 flex items-center gap-4 rounded-lg border border-gray-500 bg-white p-6 hover:bg-gray-100">
          <span className="rounded-full bg-blue-300 p-3 hover:bg-blue-200">
            <svg className="size-8" stroke="currentColor"></svg>
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
