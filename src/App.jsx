import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
// import InputUi from './components/UI/Input'
import { Inp } from './components/UI/Inp'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <Inp />
      </ThemeProvider>
   )
}

export default App
