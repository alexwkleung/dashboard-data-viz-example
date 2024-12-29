import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { gridTable } from '../../data/grid-table';
import { useDateRange } from '../../hooks/useDateRange';
import { isBetween } from '../../utils/is-between';
import dayjs from 'dayjs';
import { CircularProgress } from '@mui/material';
import { mockFetch } from '../../utils/mock-fetch';

import type { GridTable } from '../../types/gridtable';

const DataGridTable = () => {
  const { date } = useDateRange();

  const [filterRows, setFilterRows] = useState<GridTable['rows']>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted: boolean = true;

    const fetchData = async () => {
      try {
        await mockFetch(1100);

        if (!isMounted) return;

        // filter rows based on date range
        const filtered: GridTable['rows'] = gridTable.rows.filter((field) =>
          isBetween(dayjs(field.DateCreated), dayjs(date.startDate), dayjs(date.endDate))
        );

        setFilterRows(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

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
      ) : (
        <DataGrid
          sx={{ width: '90%', margin: 'auto' }}
          rows={filterRows}
          columns={gridTable.columns}
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
      )}
    </Box>
  );
};

export default DataGridTable;
