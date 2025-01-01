import { DatePicker } from '@mui/x-date-pickers';
import { Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDateRange } from '../../hooks/useDateRange';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '../../constants/date-format';

const DateRangePicker = () => {
  const { date, setDate } = useDateRange();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="ml-5 pt-6">
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <DatePicker
            label="Start Date"
            value={dayjs(date.startDate)}
            onChange={(prev) => setDate({ ...date, startDate: prev!.format(DATE_FORMAT.default) })}
            format={DATE_FORMAT.default}
          />
          <DatePicker
            label="End Date"
            value={dayjs(date.endDate)}
            onChange={(prev) => setDate({ ...date, endDate: prev!.format(DATE_FORMAT.default) })}
            format={DATE_FORMAT.default}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
