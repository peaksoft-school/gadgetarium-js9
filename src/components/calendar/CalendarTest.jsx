import React from 'react'
import { styled } from '@mui/material/styles'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')

export const CalendarTest = () => {
   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
               <StyledDatePicker />
            </DemoContainer>
         </LocalizationProvider>
      </div>
   )
}

const StyledDatePicker = styled(DatePicker)`
   .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
      color: #384255;
      font-size: 0.8rem;
      height: 0.5rem;
      width: 8rem;
   }
   .css-160gj8b-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
      color: #fff;
      background-color: #cb11bf;
      font-weight: 500;
      -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)
         0ms;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
   }

   .css-cwhad8-MuiDateCalendar-root {
      /* Your styles for the MuiDateCalendar component */
      background-color: red;
      margin-top: 100rem;
   }
`
