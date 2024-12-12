import { describe, it, expect, expectTypeOf } from 'vitest';
import { mock } from '../src/data/mock';

import type { MockData } from '../src/data/mock';

describe('Mock Data', () => {
  it('should be defined and match the correct type', () => {
    expect(mock).toBeDefined();

    expectTypeOf(mock).toMatchTypeOf<MockData[]>();
  });
});
