import { ThemeProvider } from '@mui/material'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'
import AdminTable from './components/UI/admin.table/Table'

const myTable = [
   {
      id: '1',
      brand: 'Apple',
      purchaseTime: '07:21:2023',
      quantityOfGoods: '24',
      totalSum: '75000',
      memory: '32',
      quantityOfSIMCart: '1',
      RAM: '6',
      color: 'Красный',
   },
   {
      id: '2',
      brand: 'Apple',
      purchaseTime: '08:24:2023',
      quantityOfGoods: '6',
      totalSum: '80000',
      memory: '64',
      quantityOfSIMCart: '2',
      color: 'Белый',
      RAM: '8',
   },
]
function App() {
   return (
      <ThemeProvider theme={themes}>
         <h1>Hello World</h1>
         <CustomToast />
         <AdminTable index={0} itemTableArray={myTable} />
      </ThemeProvider>
   )
}

export default App
