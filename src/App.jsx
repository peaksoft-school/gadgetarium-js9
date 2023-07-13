import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
// import { CustomToast } from './components/UI/snackbar/CustomToast'
import { FAG } from './components/fag/Fag'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <FAG />
         {/* <CustomToast /> */}
      </ThemeProvider>
   )
}

export default App
