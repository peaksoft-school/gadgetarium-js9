import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'

const AppContent = () => {
   return (
      <div>
         <h1>Hello World</h1>
      </div>
   )
}

const App = () => {
   return (
      <ThemeProvider theme={themes}>
         <AppContent />
      </ThemeProvider>
   )
}

export default App
