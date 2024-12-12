import { GridColDef } from '@mui/x-data-grid';

export const rows = [
  { id: 1, Title: 'Set 1', Description: '', DateCreated: '', Comments: '' },
  { id: 2, Title: 'Set 2', Description: '', DateCreated: '', Comments: '' },
  { id: 3, Title: 'Set 3', Description: '', DateCreated: '', Comments: '' },
  { id: 4, Title: 'Set 4', Description: '', DateCreated: '', Comments: '' },
  { id: 5, Title: 'Set 5', Description: '', DateCreated: '', Comments: '' },
];

export const columns: GridColDef<(typeof rows)[number]>[] = [
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
