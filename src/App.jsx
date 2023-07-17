import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import { CalendarTest } from './components/calendar/CalendarTest'
import Calendar from './components/calendar/Calendar'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <Calendar />
         <CalendarTest />
         <CustomToast />
      </ThemeProvider>
   )
}

export default App
