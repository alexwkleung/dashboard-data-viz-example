import { describe, it, expect, expectTypeOf } from 'vitest';
import { mockData } from '../src/data/data';

import type { MockData } from '../src/types/mockdata';

describe('Mock Data', () => {
  it('should be defined and match the correct type', () => {
    expect(mockData).toBeDefined();

    expectTypeOf(mockData).toMatchTypeOf<MockData[]>();
  });
});
