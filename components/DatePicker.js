import * as React from 'react';
import { makeStyles } from '@emotion/styled';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FirstComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      < DatePicker/>
    </LocalizationProvider>
  );
}