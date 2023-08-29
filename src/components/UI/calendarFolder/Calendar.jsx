import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { forwardRef } from 'react'

export const Calendar = forwardRef(function CalendarComponent(
   {
      placeholder,
      value,
      onChange,
      marginTop = '-11px',
      onBlur,
      name,
      error,
      ...props
   },
   ref
) {
   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
               label={placeholder}
               value={value === undefined || null ? '' : value}
               marginTop={marginTop}
               onChange={onChange}
               name={name}
               error={error}
               onBlur={onBlur}
               ref={ref}
               {...props}
            />
         </LocalizationProvider>
      </div>
   )
})

const StyledDatePicker = styled(DatePicker)(
   ({ fontSize, width, height, marginTop, error }) => ({
      '& label': {
         color: '#91969E',
         marginTop,
         fontFamily: 'Inter',
         fontWeight: 300,
         fontSize,
      },

      '& .MuiOutlinedInput-notchedOutline': {
         borderColor: `${
            error === true ? '#ff0000 !important' : '#0000003b !important'
         } `,
      },

      '& .MuiOutlinedInput-root': {
         width: width || '9rem',
         height: height || '2.1875rem',
         fontSize: fontSize || '0.8rem',
         fontWeight: '400',
      },
      '& .MuiSvgIcon-root': {
         fontSize: '20px',
      },
      '& label.Mui-focused': {
         display: 'none',
      },
      '& .MuiTextField-root label': {
         display: 'none',
      },
      '& .MuiFormLabel-filled': {
         display: 'none',
      },
      '& .MuiOutlinedInput-notchedOutline legend span': {
         display: 'none',
      },
   })
)
