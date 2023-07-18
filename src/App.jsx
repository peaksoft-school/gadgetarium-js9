import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import { BrowserRouter } from 'react-router-dom'

function App() {
   return (
      <BrowserRouter>
        <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
      </ThemeProvider>
      </BrowserRouter>
    
   )
}

export default App
