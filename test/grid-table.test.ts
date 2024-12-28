import { describe, expect, it, expectTypeOf } from 'vitest';
import { gridTable } from '../src/data/grid-table';

import type { GridTable } from '../src/types/gridtable';

describe('Grid table', () => {
  it('should be defined and match the correct type', () => {
    expect(gridTable).toBeDefined();
    expectTypeOf(gridTable).toMatchTypeOf<GridTable>();
  });
});
