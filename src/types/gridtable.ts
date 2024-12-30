import type { GridColDef } from '@mui/x-data-grid';
import type { MockData } from './mockdata';
import type { Status } from './status';

export interface GridTable {
  rows: MockData[];
  columns: GridColDef<{
    id: number;
    title: string;
    description: string;
    dateCreated: string;
    status: Status;
    comments: string;
  }>[];
}
