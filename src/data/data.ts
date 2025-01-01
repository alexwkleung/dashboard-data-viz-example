import data from './json/data.json';
import { schemaArray } from './schema/schema';

import type { MockData } from '../types/mockdata';
import type { SafeParseReturnType } from 'zod';
import type { Status } from '../types/status';

/**
 * Defined safe parse return type based on mock data
 */
type SafeParseArray = SafeParseReturnType<
  {
    id: number;
    title: string;
    description: string;
    dateCreated: string;
    status: Status;
    comments: string;
  }[],
  {
    status: Status;
    id: number;
    title: string;
    description: string;
    dateCreated: string;
    comments: string;
  }[]
>;

/**
 * Mock data.
 *
 * @returns Validated mock data
 */
export function mockData(): MockData[] | undefined {
  const zSchema: SafeParseArray = schemaArray.safeParse(JSON.parse(JSON.stringify(data)));

  if (zSchema.success) {
    return zSchema.data;
  } else {
    console.log('Data validation error: ', zSchema.error);
  }
}
