import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableBody, styled } from '@mui/material'
import { TableItem } from './TableItem'

const tables = [
   [
      { name: 'ID', width: '3.438vw', paddingLeft: '1.042vw' },
      { name: 'Фото', width: '5.521vw ' },
      { name: 'Артикул', width: '7.24vw' },
      { name: 'Наименование товара', width: '12.5vw' },
      { name: 'Дата создания', width: '9.063vw' },
      { name: 'Кол-во', width: '7.552vw' },
      { name: 'Цена товара', width: '8.229vw' },
      { name: 'Текущея цена', width: '9.479vw' },
      { name: 'Действия', edit: true, width: '4.948vw' },
   ],
   [
      { name: 'ID', width: '3.438vw', paddingLeft: '1.042vw' },
      { name: 'Фото', width: '5.521vw ' },
      { name: 'Наименование товара', width: '13.802vw' },
      { name: 'Цвет', width: '8.125vw' },
      { name: 'Кол-во SIM-карт', width: '9.375vw' },
      { name: 'ОЗУ', width: '5.938vw' },
      { name: 'ПЗУ', width: '6.094vw' },
      { name: 'Количество', width: '8.125vw' },
      { name: 'Цена', width: '7.552vw' },
   ],
   [
      { name: 'ID', width: '3.438vw', paddingLeft: '1.042vw' },
      { name: 'ФИО', width: '12.292vw' },
      { name: 'Номер/Дата', width: '10.885vw' },
      { name: 'Кол-во', width: '7.188vw' },
      { name: 'Общая сумма', width: '9.688vw' },
      { name: 'Оформление заказа', width: '10.625vw' },
      { name: 'Статус', width: '8.802vw' },
      { name: 'Действия', edit: false, width: '4.948vw' },
   ],
]
export function AdminTable({ indexForTable, itemTableArray, onClick }) {
   const textInCenter =
      indexForTable === 1 || indexForTable === 3 ? 'true' : 'false'

   return (
      <StyledTable index={indexForTable} aria-label="simple table">
         <TableHead>
            <StyledTableRow>
               {tables[indexForTable]?.map((el) => {
                  return (
                     <StyledTableCell
                        key={el.name}
                        sx={{
                           width: el.width,
                           paddingLeft: el.paddingLeft ? el.paddingLeft : 0,
                        }}
                     >
                        {el.name}
                     </StyledTableCell>
                  )
               })}
            </StyledTableRow>
         </TableHead>
         <TableBody>
            {itemTableArray?.map((item, index) => (
               <TableItem
                  key={item.subProductId}
                  tables={tables[indexForTable]}
                  textInCenter={textInCenter}
                  indexForTable={indexForTable}
                  index={index}
                  onClick={onClick}
                  {...item}
               />
            ))}
         </TableBody>
      </StyledTable>
   )
}

const StyledTable = styled(Table)(() => ({
   width: '67.969vw',
}))

const StyledTableRow = styled(TableRow)`
   background: rgba(56, 66, 85, 0.9);
   height: 2.5rem;
   display: flex;
   align-items: center;
`
const StyledTableCell = styled(TableCell)`
   color: #fff;
   border-bottom: none;
   font-family: Inter;
   font-size: 0.781vw;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: 0.078vw;
   padding: 0;
`

/*
Table 0

{
   id: '1',
   photo: 'https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png',
   vendorCode: '14134242',
   modelName: 'Samsung S21 UltraNanoBich',
   purchaseTime: '07:21:2023 12:20',
   quantityOfGoods: 10,
   quantity: 10,
   productPrice: 50000,
   discount: 10,
   },
*/

/* 
Table 1

{
  id: '1',
  photo:
     'https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png',
  modelName: 'Samsung S21 UltraNanoBich',
  color: 'Красный',
  quantityOfSIMCart: '1',
  RAM: '6',
  ROM: '64',
  quantity: 10,
  productPrice: 50000,
}
*/

/*
Table 2

{
  id: '1',
  fullName: 'Баха Джаркимбаев',
  number: '000000-455247',
  quantity: 10,
  totalSum: '75000',
  ordering: 'Самовывоз',
  status: 'В обработке',
},
*/

/*
Table 3

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
*/
