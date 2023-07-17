import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import DeleteButton from './components/UI/icon.button/DeleteButton'
import PlayButton from './components/UI/icon.button/PlayButton'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <DeleteButton />
         <PlayButton />
         <CustomToast />
      </ThemeProvider>
   )
}

export default App
