import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import { Contacts } from './components/contacts/Contacts'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <Contacts />
         <CustomToast />
      </ThemeProvider>
   )
}

export default App
