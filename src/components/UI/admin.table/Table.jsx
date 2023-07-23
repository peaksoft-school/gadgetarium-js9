import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableBody, styled } from '@mui/material'
import { TableItem } from './TableItem'

const tables = [
   [
      { name: 'ID', width: '4.125rem', paddingLeft: '1.25rem' },
      { name: 'Фото', width: '6.625rem ' },
      { name: 'Артикул', width: '8.6875rem' },
      { name: 'Наименование товара', width: '15rem' },
      { name: 'Дата создания', width: '10.875rem' },
      { name: 'Кол-во', width: '9.0625rem' },
      { name: 'Цена товара', width: '9.875rem' },
      { name: 'Текущея цена', width: '11.375rem' },
      { name: 'Действия', edit: true, width: '5.9375rem' },
   ],
   [
      { name: 'ID', width: '4.125rem', paddingLeft: '1.25rem' },
      { name: 'Фото', width: '6.625rem ' },
      { name: 'Наименование товара', width: '16.5625rem' },
      { name: 'Цвет', width: '9.75rem' },
      { name: 'Кол-во SIM-карт', width: '11.25rem' },
      { name: 'ОЗУ', width: '7.125rem' },
      { name: 'ПЗУ', width: '7.3125rem' },
      { name: 'Количество', width: '9.75rem' },
      { name: 'Цена', width: '9.0625rem' },
   ],
   [
      { name: 'ID', width: '4.125rem', paddingLeft: '1.25rem' },
      { name: 'ФИО', width: '14.75rem' },
      { name: 'Номер/Дата', width: '13.0625rem' },
      { name: 'Кол-во', width: '8.625rem' },
      { name: 'Общая сумма', width: '11.625rem' },
      { name: 'Оформление заказа', width: '12.75rem' },
      { name: 'Статус', width: '10.5625rem' },
      { name: 'Действия', edit: false, width: '5.9375rem' },
   ],
   [
      { name: 'Бренд', width: '12.3125rem', paddingLeft: '1.25rem' },
      { name: 'Цвет', width: '10rem' },
      { name: 'Объем памяти', width: '12.0625rem' },
      { name: 'Оперативная память', width: '15.25rem' },
      { name: 'Кол-во SIM-карт', width: '14.6875rem' },
      { name: 'Дата выпуска', width: '22.25rem' },
      { name: 'Кол-во товара', width: '10rem', paddingLeft: '1.25rem' },
      { name: 'Цена', width: '10.3125rem', paddingLeft: '1.25rem' },
   ],
]
export function AdminTable({ indexForTable, itemTableArray }) {
   const textInCenter =
      indexForTable === 1 || indexForTable === 3 ? 'true' : 'false'
   return (
      <StyledTable
         index={indexForTable}
         sx={{ minWidth: 400 }}
         aria-label="simple table"
      >
         <TableHead>
            <StyledTableRow>
               {tables[indexForTable].map((el) => {
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
            {itemTableArray.map((item, index) => (
               <TableItem
                  key={item.id}
                  tables={tables[indexForTable]}
                  textInCenter={textInCenter}
                  indexForTable={indexForTable}
                  index={index}
                  {...item}
               />
            ))}
         </TableBody>
      </StyledTable>
   )
}

const StyledTable = styled(Table)(({ index }) => ({
   width: index === 3 ? '107.5rem' : '81.5625rem',
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
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: 0.0625rem;
   padding: 0;
`
