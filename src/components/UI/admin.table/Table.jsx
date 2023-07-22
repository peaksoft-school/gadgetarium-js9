import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableBody, styled } from '@mui/material'
import TableItem from './TableItem'

const tables = [
   [
      { photoState: true, widthForPhoto: '6.625rem ' },
      { name: 'Артикул', width: '8.6875rem' },
      { name: 'Наименование товара', width: '15rem' },
      { name: 'Дата создания', width: '10.875rem' },
      { name: 'Кол-во', width: '9.0625rem' },
      { name: 'Цена товара', width: '9.875rem' },
      { name: 'Текущея цена', width: '11.375rem' },
      { action: true, edit: true, widthForAction: '5.9375rem' },
   ],
   [
      { photoState: true, widthForPhoto: '6.625rem ' },
      { name: 'Наименование товара', width: '16.5625rem' },
      { name: 'Цвет', width: '9,75rem' },
      { name: 'Кол-во SIM-карт', width: '11.25rem' },
      { name: 'ОЗУ', width: '7.125rem' },
      { name: 'ПЗУ', width: '7.3125rem' },
      { name: 'Количество', width: '9.75rem' },
      { name: 'Цена', width: '9.0625rem' },
      { action: false },
   ],
   [
      { photoState: false },
      { name: 'ФИО', width: '14.75rem' },
      { name: 'Номер/Дата', width: '13.0625rem' },
      { name: 'Кол-во', width: '8.625rem' },
      { name: 'Общая сумма', width: '11.625rem' },
      { name: 'Оформление заказа', width: '12.75rem' },
      { name: 'Статус', width: '10.5625rem' },
      { action: true, edit: false, widthForAction: '5.9375rem' },
   ],
   [
      { photoState: false },
      { name: 'Бренд', width: '12.3125rem', paddingLeft: '1.25rem' },
      { name: 'Цвет', width: '10rem' },
      { name: 'Объем памяти', width: '12.0625rem' },
      { name: 'Оперативная память', width: '15.25rem' },
      { name: 'Кол-во SIM-карт', width: '14.6875rem' },
      { name: 'Дата выпуска', width: '22.25rem' },
      { name: 'Кол-во товара', width: '10rem', paddingLeft: '1.25rem' },
      { name: 'Цена', width: '10.3125rem', paddingLeft: '1.25rem' },
      { action: false },
   ],
]
export default function AdminTable({ index, itemTableArray }) {
   return (
      <StyledTable
         index={index}
         sx={{ minWidth: 400 }}
         aria-label="simple table"
      >
         <StyledTableHead>
            <StyledTableRow>
               {index === 3 ? null : (
                  <StyledTableCell
                     align="left"
                     sx={{ width: '4.125rem', paddingLeft: '1.25rem' }}
                  >
                     ID
                  </StyledTableCell>
               )}

               {tables[index].map((el) => {
                  return (
                     <>
                        {el.photoState && (
                           <StyledTableCell sx={{ width: '6.625rem' }}>
                              Фото
                           </StyledTableCell>
                        )}
                        <StyledTableCell
                           sx={{
                              width: el.width,
                              paddingLeft: el.paddingLeft ? el.paddingLeft : 0,
                           }}
                        >
                           {el.name}
                        </StyledTableCell>
                        {el.action && (
                           <StyledTableCell sx={{ width: '5.9375rem' }}>
                              Действия
                           </StyledTableCell>
                        )}
                     </>
                  )
               })}
            </StyledTableRow>
         </StyledTableHead>
         <TableBody>
            {itemTableArray.map(() => {
               return (
                  <TableItem
                     tables={tables[index]}
                     textInCenter
                     index={index}
                  />
               )
            })}
         </TableBody>
      </StyledTable>
   )
}

const StyledTable = styled(Table)(({ index }) => ({
   width: index === 3 ? '107.5rem' : '81.5625rem',
}))

const StyledTableHead = styled(TableHead)``
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
