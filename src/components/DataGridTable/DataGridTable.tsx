import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { gridTable } from '../../data/grid-table';
import { useDateRange } from '../../hooks/useDateRange';
import { isBetween } from '../../utils/is-between';
import dayjs from 'dayjs';
import { CircularProgress } from '@mui/material';
import { mockFetchDelay } from '../../utils/mock-fetch';
import { Typography } from '@mui/material';

import type { GridTable } from '../../types/gridtable';

const DataGridTable = () => {
  const { date } = useDateRange();

  const [filterRows, setFilterRows] = useState<GridTable['rows']>();

  const [gridTableData, setGridTableData] = useState<GridTable>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted: boolean = true;

    // fetch table data
    const fetchTableData = async (): Promise<void> => {
      try {
        await mockFetchDelay(1000);

        const data: GridTable = await gridTable();

        setGridTableData(data);

        if (!isMounted) return;

        if (data && data.rows) {
          // filter rows based on date range
          const filtered: GridTable['rows'] = data.rows.filter((field) =>
            isBetween(dayjs(field.dateCreated), dayjs(date.startDate), dayjs(date.endDate))
          );

          setFilterRows(filtered);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchTableData();

    // clean up
    return () => {
      isMounted = false;
    };
  }, [date]);

  return (
    <Box>
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <CircularProgress />
        </div>
      ) : gridTableData && gridTableData.columns && filterRows ? (
        <DataGrid
          sx={{ width: '90%', margin: 'auto' }}
          rows={filterRows}
          columns={gridTableData.columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 50,
              },
            },
          }}
          pageSizeOptions={[50]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <Typography>No table data available</Typography>
        </div>
      )}
    </Box>
  );
};

export default DataGridTable;
