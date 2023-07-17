import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import BackButton from './components/UI/icon.button/back.forth.buttons/BackButton'
import ForthButton from './components/UI/icon.button/back.forth.buttons/ForthButton'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
         <BackButton />
         <ForthButton />
      </ThemeProvider>
   )
}

export default App
