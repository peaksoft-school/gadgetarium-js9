import { TableCell, TableHead, TableRow, styled } from '@mui/material'

export const TablesHeadPartTwo = ({ columns }) => {
   console.log('columns: ', columns)

   return (
      <TableHead>
         <TableRow>
            <TableCellStyle
               padding="0.75rem 0 0.75rem 1.25rem"
               width="21.333vw"
            >
               Бренд
            </TableCellStyle>
            <TableCellStyle width="20vw">Цвет</TableCellStyle>
            <TableCellStyle width="24vw">Объем памяти</TableCellStyle>
            <TableCellStyle width="32vw">Оперативная память</TableCellStyle>
            <TableCellStyle width="31.333vw">Кол-во SIM-карт</TableCellStyle>
            <TableCellStyle width="40vw">Дата выпуска</TableCellStyle>
            <TableCellStyle padding="0.75rem 0 0.75rem 1rem" width="21.333vw">
               Кол-во товара
            </TableCellStyle>
            <TableCellStyle padding="0.75rem 0 0.75rem 1rem" width="16vw">
               Цена
            </TableCellStyle>
         </TableRow>
      </TableHead>
   )
}

const TableCellStyle = styled(TableCell)(({ theme, width, padding }) => ({
   backgroundColor: '#384255e5',
   padding: padding || '0.75rem 0',
   color: '#fff',
   fontFamily: theme.typography.mainFontFamily,
   fontSize: '14px',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   letterSpacing: '1px',
   textTransform: 'capitalize',
   width,
}))

/*
{columns.map((column) => (
	<TableCell
	   key={column.key}
	   align={column.align}
	   style={{ minWidth: column.minWidth }}
	>
	   {column.header}
	</TableCell>
))}

*/
