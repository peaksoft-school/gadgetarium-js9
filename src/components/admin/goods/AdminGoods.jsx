import { styled } from '@mui/material'
import { AdminTable } from '../UI/admin.table/Table'

export const AdminGoods = () => {
   const myTable = [
      {
         id: '1',
         brand: 'Apple',
         purchaseTime: '07:21:2023',
         quantityOfGoods: '24',
         totalSum: '75000',
         memory: '32',
         quantityOfSIMCart: '1',
         modelName: 'Samsung S21 UltraNanoBich',
         quantity: 10,
         productPrice: 50000,
         vendorCode: '14134242',
         RAM: '6',
         discount: 10,
         color: 'Красный',
         ROM: '64',
         fullName: 'Баха',
         number: '000000-455247',
         ordering: 'Самовывоз',
         status: 'В обработке',
      },
      {
         id: '2',
         brand: 'Apple',
         purchaseTime: '08:24:2023',
         quantityOfGoods: '6',
         discount: 10,
         totalSum: '80000',
         quantity: 10,
         productPrice: 50000,
         memory: '64',
         vendorCode: '14134242',
         modelName: 'Samsung S21 UltraNanoBich',
         quantityOfSIMCart: '2',
         color: 'Белый',
         RAM: '8',
         ROM: '64',
         fullName: 'Айзат Жумагулова',
         number: '000000-455247',
         ordering: 'Доставка',
         status: 'В обработке',
      },
   ]
   return (
      <Container>
         <AdminTable indexForTable={0} itemTableArray={myTable} />
      </Container>
   )
}
const Container = styled('div')``
