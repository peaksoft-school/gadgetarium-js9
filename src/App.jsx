import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import AdminTable from './components/UI/admin.table/Table'

function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
         <AdminTable />
      </ThemeProvider>
   )
}

export default App
