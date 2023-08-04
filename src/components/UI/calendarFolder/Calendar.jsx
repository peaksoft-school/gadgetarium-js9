import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const Calendar = ({ placeholder, value, onChange, ...props }) => {
   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
               label={placeholder}
               value={value}
               onChange={onChange}
               {...props}
            />
         </LocalizationProvider>
      </div>
   )
}

const StyledDatePicker = styled(DatePicker)(({ fontSize, width }) => ({
   '& label': {
      color: '#91969E',
      marginTop: '-11px',
      fontFamily: 'Inter',
      fontWeight: 300,
   },
   '& .MuiOutlinedInput-root': {
      width: width || '9rem',
      height: '2.1875rem',
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
}))
