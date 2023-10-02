import { TableCell, TableRow, styled } from '@mui/material'
import React, { useState } from 'react'
import CheckboxInput from '../../../UI/icon.input/CheckboxInput'
import { backgroundColors } from '../../../../utils/common/constants/constantsAdminAddNewProduct'

export const TablesDetailItem = ({
   selectedItems,
   setSelectedItems,
   tables,
   index,
   ...item
}) => {
   const time = item.createdAt ? item.createdAt.split(' ')[1] : null
   const [isHovered, setIsHovered] = useState(false)

   const closeHoveredHandler = () => {
      if (selectedItems.includes(item.subProductId)) {
         return null
      }
      return setIsHovered(false)
   }
   const openHoveredHandler = () => {
      setIsHovered(true)
   }
   const toggleCheckbox = () => {
      if (selectedItems.includes(item.subProductId)) {
         setSelectedItems(
            selectedItems.filter(
               (subProductId) => subProductId !== item.subProductId
            )
         )
      } else {
         setSelectedItems([...selectedItems, item.subProductId])
      }
      setIsHovered(true)
   }
   const color =
      item.codeColor &&
      backgroundColors.find((el) => el.color === item?.codeColor)
   return (
      <StyledTableRow
         key={item.key}
         sx={{ marginTop: '0.625rem' }}
         hovered={isHovered ? 'true' : 'false'}
         onMouseEnter={openHoveredHandler}
         onMouseLeave={closeHoveredHandler}
      >
         {tables.map((el) => {
            if (el.name === 'ID') {
               return (
                  <StyledTableCell
                     sx={{
                        width: '3.438vw',
                        paddingLeft: isHovered ? '0.26vw' : '1.042vw',
                     }}
                     key={el.name}
                  >
                     {isHovered ? (
                        <CheckboxInput
                           bgColor="black"
                           checked={selectedItems.includes(item.subProductId)}
                           onChange={toggleCheckbox}
                        />
                     ) : (
                        index + 1
                     )}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Фото') {
               return (
                  <StyledTableCell
                     sx={{
                        display: 'flex',
                        width: el.width,
                        height: '100%',
                        marginTop: '0px',
                        alignItems: 'center',
                     }}
                     key={el.name}
                  >
                     <Image src={item.image} alt="img" />
                  </StyledTableCell>
               )
            }
            if (el.name === 'Наименование товара') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                     }}
                     key={el.name}
                  >
                     {item.productName}
                     <ModelName>{time}</ModelName>
                  </StyledTableCell>
               )
            }
            if (el.name === 'Цвет') {
               return (
                  <StyledTableCell sx={{ width: el.width }} key={el.name}>
                     {color.name}
                  </StyledTableCell>
               )
            }
            if (el.name === 'ОЗУ') {
               return (
                  <StyledTableCell sx={{ width: el.width }} key={el.name}>
                     {item.rom}
                  </StyledTableCell>
               )
            }
            if (el.name === 'ПЗУ') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        display: 'flex',
                        alignItems: 'center',
                     }}
                     key={el.name}
                  >
                     {item.ram}
                  </StyledTableCell>
               )
            }

            if (el.name === 'Количество') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        display: 'flex',
                        justifyContent: 'flex-start',
                     }}
                     key={el.name}
                  >
                     {item.quantity}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Цена') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        color: '#2C68F5',
                     }}
                     key={el.name}
                  >
                     {item.price.toLocaleString()}
                  </StyledTableCell>
               )
            }
            return null
         })}
      </StyledTableRow>
   )
}
const StyledTableRow = styled(TableRow)(({ hovered }) => ({
   width: '67.969vw',
   height: '4.75rem',
   borderRadius: '0.375rem',
   transition: 'background 0.3s',
   boxSizing: 'border-box',
   display: 'flex',
   alignItems: 'center',
   background: hovered === 'true' && 'rgba(144, 156, 181, 0.20)',
}))
const StyledTableCell = styled(TableCell)(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontSize: '0.833vw',
   fontWeight: 500,
   lineHeight: 'normal',
   borderBottom: 'none',
   letterSpacing: '0.0625rem',
   padding: 0,
   flex: '1 1 auto',
   minWidth: 0,
   maxWidth: 'none',
}))

const ModelName = styled('p')`
   color: #909cb5;
   font-family: Inter;
   font-size: 0.729vw;
   font-style: normal;
   font-weight: 400;
   margin: 0;
   margin-top: 0.125rem;
   line-height: normal;
`
const Image = styled('img')`
   width: 4rem;
   height: 4rem;
   object-fit: cover;
`
