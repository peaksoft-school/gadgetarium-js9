import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import Reviews from './components/reviews/Reviews'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
         <Reviews adminReviewState="hi" />
      </ThemeProvider>
   )
}

export default App
