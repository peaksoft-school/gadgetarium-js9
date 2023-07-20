import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const Calendar = ({ placeholder, value, onChange }) => {
   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
               label={placeholder}
               value={value}
               onChange={onChange}
            />
         </LocalizationProvider>
      </div>
   )
}

const StyledDatePicker = styled(DatePicker)({
   '& label': {
      color: '#91969E',
      fontSize: '1rem',
      marginTop: '-11px',
   },
   '& .MuiOutlinedInput-root': {
      width: '9rem',
      height: '2.1875rem',
      fontSize: '0.8rem',
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
