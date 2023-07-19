import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material'

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein }
}

const rows = [
   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   createData('Eclair', 262, 16.0, 24, 6.0),
   createData('Cupcake', 305, 3.7, 67, 4.3),
   createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function BasicTable() {
   return (
      <StyledTable sx={{ minWidth: 400 }} aria-label="simple table">
         <StyledTableHead>
            <StyledTableRow>
               <StyledTableCell align="left" sx={{ width: 66 }}>
                  ID
               </StyledTableCell>
               <StyledTableCell align="left" sx={{ width: 106 }}>
                  Фото
               </StyledTableCell>
               <StyledTableCell>Артикул</StyledTableCell>
               <StyledTableCell>Наименования товара</StyledTableCell>
               <StyledTableCell>Дата создания</StyledTableCell>
               <StyledTableCell>Кол-во</StyledTableCell>
               <StyledTableCell>Цена товара</StyledTableCell>
               <StyledTableCell>Текущея цена</StyledTableCell>
               <StyledTableCell>Действия</StyledTableCell>
            </StyledTableRow>
         </StyledTableHead>
         <TableBody>
            {rows.map((row) => (
               <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                  <StyledTableCell component="th" scope="row">
                     {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                     {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
               </TableRow>
            ))}
         </TableBody>
      </StyledTable>
   )
}

const StyledTable = styled(Table)`
   width: 81.5625rem;
`

const StyledTableHead = styled(TableHead)`
   width: 600px;
   background: rgba(56, 66, 85, 0.9);
`
const StyledTableRow = styled(TableRow)`
   height: 40px;
`
const StyledTableCell = styled(TableCell)`
   color: #fff;
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: 0.0625rem;
   padding: 0;
`
