import { mockData } from '../data/data';

import type { MockData } from '../types/mockdata';

/**
 * Mock fetch delay. Simulates a fetch delay using timeout.
 *
 * Must await the function call.
 *
 * @async
 * @param ms Time in milliseconds
 * @returns A promise that mocks a fetch via timeout
 */
export const mockFetchDelay = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Mock fetch. Simulates data fetching from a url.
 *
 * @async
 * @param url URL to fetch data from (simulate)
 * @returns A promise containing the json object response
 */
export const mockFetch = async (url: string): Promise<Response> => {
  await new Promise((resolve) => setTimeout(resolve, 1100));

  const data = {
    'http://localhost:5173/': {
      ...mockData(),
    },
  };

  // success response
  if (url in data) {
    return new Response(JSON.stringify(data['http://localhost:5173/']), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // error response
  return new Response(
    JSON.stringify({
      error: 'URL not found.',
    }),
    {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

/**
 * Parse mock fetch.
 *
 * @async
 * @returns The fulfilled response containing the mock data objects.
 */
export const parseMockFetch = async (): Promise<MockData[]> => {
  const data: MockData[] = await mockFetch('http://localhost:5173/').then((response) =>
    response.json()
  );

  const parse: MockData[] = [];

  for (const obj in data) {
    parse.push({
      id: data[obj].id,
      title: data[obj].title,
      description: data[obj].description,
      dateCreated: data[obj].dateCreated,
      status: data[obj].status,
      comments: data[obj].comments,
    });
  }

  return parse;
};
