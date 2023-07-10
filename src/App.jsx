import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
      </ThemeProvider>
   )
}

export default App
