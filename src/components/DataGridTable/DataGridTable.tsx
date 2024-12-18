import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { gridTable } from '../../data/grid-table';

const DataGridTable = () => {
  return (
    <Box>
      <DataGrid
        sx={{ width: '75%', margin: 'auto' }}
        rows={gridTable.rows}
        columns={gridTable.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataGridTable;
