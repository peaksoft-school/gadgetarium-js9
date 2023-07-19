import { styled } from '@mui/material/styles'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const Calendar = ({ dd, value, onChange }) => {
   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
               <StyledDatePicker label={dd} value={value} onChange={onChange} />
            </DemoContainer>
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
   '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
      color: '#384255',
      fontSize: '0.8rem',
      fontWeight: '400',
   },
   '& .css-1laqsz7-MuiInputAdornment-root': {
      width: '3.125rem',
      height: '1.125rem',
   },
   '& .css-g8h0ho-MuiInputBase-root-MuiOutlinedInput-root': {
      width: ' 8.6875rem',
      height: ' 2.1875rem',
   },
   '& .css-i4bv87-MuiSvgIcon-root': {
      width: '1.125rem',
      height: '1.125rem',
   },
   '& .css-14lo706 ': {
      display: 'none',
   },
   '& .css-efw76p-MuiFormLabel-root-MuiInputLabel-root': {
      display: 'none',
   },
})
