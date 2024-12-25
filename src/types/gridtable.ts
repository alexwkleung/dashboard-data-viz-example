import type { GridColDef } from '@mui/x-data-grid';

export interface GridTable {
  rows: {
    id: number;
    Title: string;
    Description: string;
    DateCreated: string;
    Comments: string;
  }[];
  columns: GridColDef<{
    id: number;
    Title: string;
    Description: string;
    DateCreated: string;
    Comments: string;
  }>[];
}
