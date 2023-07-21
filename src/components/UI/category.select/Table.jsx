import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableBody, styled } from '@mui/material'
import TableItem from './TableItem'

const tables = [
   [
      { photoState: true, widthForPhoto: 106 },
      { name: 'Артикул', width: 139 },
      { name: 'Наименование товара', width: 240 },
      { name: 'Дата создания', width: 174 },
      { name: 'Кол-во', width: 145 },
      { name: 'Цена товара', width: 158 },
      { name: 'Текущея цена', width: 182 },
      { action: true, edit: true, widthForAction: 95 },
   ],
   [
      { photoState: true, widthForPhoto: 106 },
      { name: 'Наименование товара', width: 265 },
      { name: 'Цвет', width: 156 },
      { name: 'Кол-во SIM-карт', width: 180 },
      { name: 'ОЗУ', width: 114 },
      { name: 'ПЗУ', width: 117 },
      { name: 'Количество', width: 156 },
      { name: 'Цена', width: 145 },
      { action: false },
   ],
   [
      { photoState: false },
      { name: 'ФИО', width: 236 },
      { name: 'Номер/Дата', width: 209 },
      { name: 'Кол-во', width: 138 },
      { name: 'Общая сумма', width: 186 },
      { name: 'Оформление заказа', width: 204 },
      { name: 'Статус', width: 169 },
      { action: true, edit: false, widthForAction: 95 },
   ],
   [
      { photoState: false },
      { name: 'Бренд', width: 197, paddingLeft: '20px' },
      { name: 'Цвет', width: 160 },
      { name: 'Объем памяти', width: 193 },
      { name: 'Оперативная память', width: 244 },
      { name: 'Кол-во SIM-карт', width: 235 },
      { name: 'Дата выпуска', width: 366 },
      { name: 'Кол-во товара', width: 160, paddingLeft: '20px' },
      { name: 'Цена', width: 165, paddingLeft: '20px' },
      { action: false },
   ],
]
export default function AdminTable({ index }) {
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
                     sx={{ width: '66px', paddingLeft: '20px' }}
                  >
                     ID
                  </StyledTableCell>
               )}

               {tables[index].map((el) => {
                  return (
                     <>
                        {el.photoState && (
                           <StyledTableCell sx={{ width: 106 }}>
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
                           <StyledTableCell sx={{ width: 95 }}>
                              Действия
                           </StyledTableCell>
                        )}
                     </>
                  )
               })}
            </StyledTableRow>
         </StyledTableHead>
         <TableBody>
            <TableItem tables={tables[index]} textInCenter index={index} />
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
