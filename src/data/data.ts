import data from './json/data.json';

import type { MockData } from '../types/mockdata';

// mock data
export const mockData: MockData[] = JSON.parse(JSON.stringify(data));
