import React from 'react'
import {
   Table,
   TableContainer,
   TableHead,
   TableCell,
   TableRow,
   TableBody,
   styled,
} from '@mui/material'

const data = [
   { id: 1, name: 'Бренд' },
   { id: 2, name: 'Экран' },
   { id: 3, name: 'Цвет' },
   { id: 4, name: 'Операционная система' },
   { id: 5, name: 'Память' },
   { id: 7, name: 'SIM-карты' },
]

const ColumnTable = ({ table }) => {
   return (
      <TableContainer>
         <StyledTable>
            <TableHead>
               {data.map((el) => {
                  return (
                     <StyledTableRowHead key={el.id}>
                        <StyledTableCell>{el.name}</StyledTableCell>
                     </StyledTableRowHead>
                  )
               })}
            </TableHead>
            <StyledTableBody>
               {table?.map((item, index) => {
                  if (index > 5) {
                     return null
                  }
                  return (
                     <StyledTableRowBody key={item.id} index={index}>
                        {data?.map((el) => {
                           if (el.name === 'Бренд') {
                              return (
                                 <StyledTableCell key={el.id}>
                                    {item.brandName}
                                 </StyledTableCell>
                              )
                           }
                           if (el.name === 'Экран') {
                              return (
                                 <StyledTableCell key={el.id}>
                                    53* ({item.screen}) IPS
                                 </StyledTableCell>
                              )
                           }
                           if (el.name === 'Цвет') {
                              return (
                                 <StyledTableCell key={el.id}>
                                    {item.color}
                                 </StyledTableCell>
                              )
                           }
                           if (el.name === 'Операционная система') {
                              return (
                                 <StyledTableCell key={el.id}>
                                    {item.operationalSystems}
                                 </StyledTableCell>
                              )
                           }
                           if (el.name === 'Память') {
                              return (
                                 <StyledTableCell key={el.id}>
                                    {item.rom}ГБ
                                 </StyledTableCell>
                              )
                           }
                           if (el.name === 'SIM-карты') {
                              return (
                                 <StyledTableCell key={el.id}>
                                    2 (nano SIM)
                                 </StyledTableCell>
                              )
                           }
                           return null
                        })}
                     </StyledTableRowBody>
                  )
               })}
            </StyledTableBody>
         </StyledTable>
      </TableContainer>
   )
}

export default ColumnTable
const StyledTable = styled(Table)`
   display: flex;
`
const StyledTableRowHead = styled(TableRow)`
   display: flex;
   width: 13.438vw;
   th {
      font-weight: 700;
   }
`
const StyledTableBody = styled(TableBody)`
   display: flex;
`
const StyledTableRowBody = styled(TableRow)`
   display: flex;
   flex-direction: column;
   width: ${(props) => (props.index === 5 ? '11.458vw' : '12.813vw')};
`
const StyledTableCell = styled(TableCell)`
   height: 53px;
   padding-left: 0;
   flex: 1;
   font-family: Inter;
   font-size: 0.833vw;
`
