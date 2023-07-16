import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import { PopUpPage } from './components/PopUp/PopUpPage'
import { PopUpTestPage } from './components/PopUp/PopUpTestPage'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <PopUpTestPage />
         <PopUpPage />

         <CustomToast />
      </ThemeProvider>
   )
}

export default App
