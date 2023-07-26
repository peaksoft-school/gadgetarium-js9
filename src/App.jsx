import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import { AdminTable } from './components/UI/admin.table/Table'

const table = [
   {
      id: '1',
      brand: 'Apple',
      color: 'Красный',
      memory: '32',
      RAM: '6',
      quantityOfSIMCart: '1',
      purchaseTime: '07:21:2023 12:20',
      quantityOfGoods: '24',
      productPrice: 50000,
   },
]
function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
         <AdminTable itemTableArray={table} indexForTable={3} />
      </ThemeProvider>
   )
}

export default App
