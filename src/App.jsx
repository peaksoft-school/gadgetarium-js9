import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import ForthButton from './components/UI/icon.button/back.forth.buttons/ForthButton'
import PlayButton from './components/UI/icon.button/PlayButton'
import DeleteButton from './components/UI/icon.button/DeleteButton'
import BackButton from './components/UI/icon.button/back.forth.buttons/BackButton'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
         <ForthButton bigButton />
         <PlayButton />
         <DeleteButton />
         <BackButton bigButton />
      </ThemeProvider>
   )
}

export default App
