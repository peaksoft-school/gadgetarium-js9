import * as React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TableBody, styled } from '@mui/material'
import TableItem from './TableItem'

const tables = [
   [
      { name: 'Наименование товара', width: 240 },
      { name: 'Дата Создания', width: 174 },
      { name: 'Кол-во', width: 145 },
      { name: 'Цена товара', width: 158 },
      { name: 'Текущея цена', width: 182 },
      { name: 'Действия' },
   ],
   [],
   [],
]
export default function AdminTable() {
   return (
      <StyledTable sx={{ minWidth: 400 }} aria-label="simple table">
         <StyledTableHead>
            <StyledTableRow>
               <StyledTableCell
                  align="left"
                  sx={{ width: '66px', paddingLeft: '20px' }}
               >
                  ID
               </StyledTableCell>
               <StyledTableCell sx={{ width: 106 }}>Фото</StyledTableCell>
               <StyledTableCell sx={{ width: 139 }}>Артикул</StyledTableCell>
               <StyledTableCell sx={{ width: 240 }}>
                  Наименования товара
               </StyledTableCell>
               <StyledTableCell sx={{ width: 174 }}>
                  Дата создания
               </StyledTableCell>
               <StyledTableCell sx={{ width: 145 }}>Кол-во</StyledTableCell>
               <StyledTableCell sx={{ width: 158 }}>
                  Цена товара
               </StyledTableCell>
               <StyledTableCell sx={{ width: 182 }}>
                  Текущея цена
               </StyledTableCell>
               <StyledTableCell sx={{ width: 95 }}>Действия</StyledTableCell>
            </StyledTableRow>
         </StyledTableHead>
         <TableBody>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
         </TableBody>
      </StyledTable>
   )
}

const StyledTable = styled(Table)`
   width: 81.5625rem;
`

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
