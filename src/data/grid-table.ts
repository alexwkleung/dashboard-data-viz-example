import { GridColDef } from '@mui/x-data-grid';
import { mock } from './mock';

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

/**
 * Generate rows
 *
 * @returns Generated rows for grid table
 */
function generateRows(): GridTable['rows'] {
  return mock.map((data) => {
    return {
      id: data.id,
      Title: data.title,
      Description: data.description,
      DateCreated: data.dateCreated,
      Comments: data.comments,
    };
  });
}

/**
 * Generated columns
 *
 * @returns Generated columns for grid table
 */
function generateColumns(): GridTable['columns'] {
  return [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Title',
      headerName: 'Title',
      width: 150,
      editable: false,
    },
    {
      field: 'Description',
      headerName: 'Description',
      width: 150,
      editable: false,
    },
    {
      field: 'DateCreated',
      headerName: 'Date Created',
      width: 150,
      editable: false,
    },
    {
      field: 'Comments',
      headerName: 'Comments',
      width: 150,
      editable: false,
    },
  ];
}

/**
 * Grid table object
 *
 * Holds the rows and columns for the grid table
 */
export const gridTable: GridTable = {
  rows: generateRows(),
  columns: generateColumns(),
};
