import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
// import { Rating } from './containers/Rating'
import { Rewievs } from './containers/Rewievs'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
         <Rewievs />
      </ThemeProvider>
   )
}

export default App
