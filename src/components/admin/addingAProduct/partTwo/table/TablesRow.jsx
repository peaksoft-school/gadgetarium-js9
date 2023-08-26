import { TableBody, TableCell, TableRow, styled } from '@mui/material'
import { InputUi } from '../../../../UI/Input'

export const TablesRow = ({ rows, columns }) => {
   console.log('columns: ', columns)

   return (
      <TableBody>
         {rows.subProductRequests.map((row) => {
            console.log('row: ', row)
            return (
               <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCellStyle align="center">{rows.brand}</TableCellStyle>
                  <TableCellStyle>{row.codeColor}</TableCellStyle>
                  <TableCellStyle>{row.rom}ГБ</TableCellStyle>
                  <TableCellStyle>RAM {row.ram}ГБ</TableCellStyle>
                  <TableCellStyle>{row.sim}</TableCellStyle>
                  <TableCellStyle>{rows.dateOfIssue}</TableCellStyle>

                  <TableCellStyle>
                     <InputUi />
                  </TableCellStyle>
                  <TableCellStyle>
                     <InputUi />
                  </TableCellStyle>
               </TableRow>
            )
         })}
      </TableBody>
   )
}

const TableCellStyle = styled(TableCell)(({ theme }) => ({
   fontFamily: theme.typography.mainFontFamily,
   fontSize: '1rem',
   color: '#292929',
   height: '74px',
   padding: 0,
}))

//  .slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//  )

// {columns.map((column) => {
// 	const value = row[column.key]

// 	if (column.render) {
// 		 return (
// 				<TableCell key={column.key}>
// 					 {column.render(row)}
// 				</TableCell>
// 		 )
// 	}

// 	return (
// 		 <TableCell key={column.key} align={column.align}>
// 				{row.rom ? `${row.rom}ГБ` : value}
// 		 </TableCell>
// 	)
// })}

//! 97 86 720

//* -248 3 766
