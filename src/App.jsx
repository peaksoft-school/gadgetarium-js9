import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import { AddingAProduct } from './components/admin/addingAProduct/AddingAProduct'

function App() {
   return (
      <BrowserRouter>
         <ThemeProvider theme={themes}>
            {/* <h1>Hello World</h1> */}

            <AddingAProduct />

            <CustomToast />
         </ThemeProvider>
      </BrowserRouter>
   )
}

export default App
