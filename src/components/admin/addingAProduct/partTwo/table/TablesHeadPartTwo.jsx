import { TableCell, TableHead, TableRow, styled } from '@mui/material'

export const TablesHeadPartTwo = ({ subProduct }) => {
   return (
      <TableHead sx={{ marginBottom: '10px' }}>
         <TableRow sx={{ display: 'flex' }}>
            <TableCellStyle sx={{ paddingLeft: '1.25rem' }} width="5.4vw">
               Бренд
            </TableCellStyle>
            <TableCellStyle width="8vw">Цвет</TableCellStyle>
            {subProduct.rom && (
               <TableCellStyle width="10vw">Объем памяти</TableCellStyle>
            )}
            {subProduct.category !== 'Планшеты' && subProduct.screenSize && (
               <TableCellStyle width="10vw">Размер экрана</TableCellStyle>
            )}
            {subProduct.category === 'Планшеты' &&
               subProduct.screenResolution && (
                  <TableCellStyle width="12vw">
                     Разрешение экрана
                  </TableCellStyle>
               )}
            {subProduct.category !== 'Планшеты' && subProduct.ram && (
               <TableCellStyle width="12vw">Оперативная память</TableCellStyle>
            )}
            {subProduct.processor && (
               <TableCellStyle width="11.1vw">Процессор</TableCellStyle>
            )}
            {subProduct.sim && (
               <TableCellStyle width="11vw">Кол-во SIM-карт</TableCellStyle>
            )}
            {subProduct.housingMaterial && (
               <TableCellStyle width="12vw">Материал браслета</TableCellStyle>
            )}
            {subProduct.diagonalScreen && (
               <TableCellStyle width="11vw">Диагональ экрана</TableCellStyle>
            )}
            {subProduct.gender && (
               <TableCellStyle width="11vw">Пол</TableCellStyle>
            )}
            <TableCellStyle width="10vw">Дата выпуска</TableCellStyle>
            <TableCellStyle width="11vw">Кол-во товара</TableCellStyle>
            <TableCellStyle width="12.1vw">Цена</TableCellStyle>
         </TableRow>
      </TableHead>
   )
}

const TableCellStyle = styled(TableCell)(({ theme, width }) => ({
   backgroundColor: '#384255e5',
   color: '#fff',
   fontFamily: theme.typography.mainFontFamily,
   fontSize: '14px',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   letterSpacing: '1px',
   textTransform: 'capitalize',
   width,
   padding: 0,
   display: 'flex',
   alignItems: 'center',
   height: '40px',
   // border: '1px solid #000',
}))
