import { TableCell, TableHead, TableRow, styled } from '@mui/material'

export const TablesHeadPartTwo = ({ subProduct, newProduct }) => {
   return (
      <StyledTableHead sx={{ marginBottom: '10px' }}>
         <TableRow sx={{ display: 'flex' }}>
            <TableCellStyle sx={{ paddingLeft: '1.25rem' }} width="10.26vw">
               Бренд
            </TableCellStyle>
            <TableCellStyle width="8.333vw">Цвет</TableCellStyle>
            {subProduct.rom && (
               <TableCellStyle width="10.052vw">Объем памяти</TableCellStyle>
            )}
            {subProduct.screenResolution && (
               <TableCellStyle width="11.306vw">
                  Разрешение экрана
               </TableCellStyle>
            )}
            {subProduct.screenSize && (
               <TableCellStyle width="10vw">Размер экрана</TableCellStyle>
            )}
            {subProduct.ram && (
               <TableCellStyle width="12.708vw">
                  Оперативная память
               </TableCellStyle>
            )}
            {subProduct.processor && (
               <TableCellStyle width="10vw">Процессор</TableCellStyle>
            )}
            {subProduct.sim && (
               <TableCellStyle width="12.24vw">Кол-во SIM-карт</TableCellStyle>
            )}
            {subProduct.materialBracelet ? (
               <TableCellStyle width="12vw">Материал браслета</TableCellStyle>
            ) : (
               ''
            )}
            {subProduct.housingMaterial ? (
               <TableCellStyle width="12vw">Материал корпуса</TableCellStyle>
            ) : (
               ''
            )}
            {subProduct.gender ? (
               <TableCellStyle width="10vw">Пол</TableCellStyle>
            ) : (
               ''
            )}
            <TableCellStyle
               width={newProduct.categoryId === 1 ? '19.063vw' : '10vw'}
            >
               Дата выпуска
            </TableCellStyle>
            <TableCellStyle width="8.333vw" sx={{ paddingLeft: '1.042vw' }}>
               Кол-во товара
            </TableCellStyle>
            <TableCellStyle width="8.594vw" sx={{ paddingLeft: '1.042vw' }}>
               Цена
            </TableCellStyle>
         </TableRow>
      </StyledTableHead>
   )
}

const StyledTableHead = styled(TableHead)`
   background-color: #384255e5;
   margin-bottom: 10px;
`
const TableCellStyle = styled(TableCell)(({ theme, width }) => ({
   color: '#fff',
   fontFamily: theme.typography.mainFontFamily,
   fontSize: '0.781vw',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   letterSpacing: '1px',
   textTransform: 'capitalize',
   width,
   padding: 0,
   display: 'flex',
   alignItems: 'center',
   height: '2.5rem',
   border: 'none',
}))
