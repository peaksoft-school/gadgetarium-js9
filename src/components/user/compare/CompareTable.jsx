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
import {
   columnDataInfo,
   columns,
   isAllValuesEqual,
} from '../../../utils/common/constants/compare.constants'

const ColumnTable = ({ table, isChecked, productName }) => {
   const isAllValuesEqualFlags = columnDataInfo.map(({ columnName }) =>
      isAllValuesEqual(table, columnName)
   )
   const updatedColumns = columns.filter(
      (column) =>
         (productName === 'Laptop' && column.name !== 'SIM-карты') ||
         (productName === 'Smart Watch' && column.name !== 'SIM-карты') ||
         (productName === 'Phone' && column.name !== 'Экран') ||
         productName === 'Tablet'
   )

   const filteredColumns = columns.filter(
      (column, index) => !isAllValuesEqualFlags[index]
   )
   return (
      <TableContainer>
         <StyledTable>
            <TableHead>
               {isChecked
                  ? filteredColumns.map((column) => (
                       <StyledTableRowHead key={column.name}>
                          <StyledTableCell>{column.name}</StyledTableCell>
                       </StyledTableRowHead>
                    ))
                  : updatedColumns.map((column) => (
                       <StyledTableRowHead key={column.name}>
                          <StyledTableCell>{column.name}</StyledTableCell>
                       </StyledTableRowHead>
                    ))}
            </TableHead>
            <StyledTableBody>
               {table?.slice(0, 6).map((item, index) => (
                  <StyledTableRowBody key={item.subProductId} index={index}>
                     {isChecked
                        ? filteredColumns.map((column) => (
                             <StyledTableCell key={column.name}>
                                {column.render
                                   ? column.render(item)
                                   : column.value || item[column.field]}
                             </StyledTableCell>
                          ))
                        : updatedColumns.map((column) => (
                             <StyledTableCell key={column.name}>
                                {column.render
                                   ? column.render(item)
                                   : item[column.field]}
                             </StyledTableCell>
                          ))}
                  </StyledTableRowBody>
               ))}
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
      font-weight: 800;
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
   display: flex;
   align-items: center;
   padding: 0;
   flex: 1;
   font-family: Inter;
   font-size: 0.833vw;
`
