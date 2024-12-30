import { parseMockFetch } from '../utils/mock-fetch';

import type { MockData } from '../types/mockdata';
import type { GridTable } from '../types/gridtable';

/**
 * Generate rows
 *
 * @returns Generated rows for grid table
 */
async function generateRows(): Promise<GridTable['rows']> {
  const data: MockData[] = await parseMockFetch();

  const parse: GridTable['rows'] = [];

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
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: false,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: false,
    },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      width: 150,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: false,
    },
    {
      field: 'comments',
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
// export const gridTable: GridTable = {
//   rows: await generateRows(),
//   columns: generateColumns(),
// };

export const gridTable = async (): Promise<GridTable> => {
  return {
    rows: await generateRows(),
    columns: generateColumns(),
  };
};
