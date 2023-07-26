import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

export const Calendar = ({
   placeholder,
   value,
   width,
   padding,
   onChange,
   labelTop,
   ...props
}) => {
   const formattedDate = dayjs(value).format('yyyy-MM-dd')

   return (
      <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
               label={placeholder}
               value={formattedDate}
               onChange={onChange}
               width={width}
               padding={padding}
               labelTop={labelTop}
               // views={['year', 'month', 'day']}
               {...props}
            />
         </LocalizationProvider>
      </div>
   )
}

const StyledDatePicker = styled(DatePicker)(
   ({ width, padding, height, labelTop }) => ({
      '& label': {
         color: '#91969E',
         fontSize: '1rem',
         marginTop: labelTop,
      },
      '& .MuiOutlinedInput-root': {
         width,
         height,
         fontSize: '1rem',
         fontWeight: '400',
         padding,
      },
      // '& .MuiSvgIcon-root': {
      // fontSize: '30px',
      // },
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
