import { TableCell, TableRow, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as EditIcon } from '../../../../assets/icons/tools-for-site/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as ArrowDown } from '../../../../assets/icons/arrows/down-icon.svg'
import {
   calculateBackgroundColor,
   nestedContentFunction,
   nestedStyledInput,
} from '../../../../utils/helpers/functions'

export const TableItem = ({
   tables,
   textInCenter,
   indexForTable,
   index,
   ...item
}) => {
   const time = item.purchaseTime ? item.purchaseTime.split(' ')[1] : null
   const date = item.purchaseTime ? item.purchaseTime.split(' ')[0] : null
   const discountAmount =
      item.discount && (item.productPrice * item.discount) / 100
   const finalPrice = item.discount
      ? item.productPrice - discountAmount
      : item.productPrice
   const abbreviatedModelName = item.modelName && item.modelName.slice(0, 18)
   const [isHovered, setIsHovered] = useState(false)
   const toggleHoveredHandler = () => {
      setIsHovered((prev) => !prev)
   }
   const [productPriceInput, setProductPriceInput] = useState(item.productPrice)
   const getProductPrice = (e) => {
      if (Number(e.target.value) < 0) {
         return null
      }
      return setProductPriceInput(e.target.value)
   }

   const deleteHandler = (id) => {
      console.log(id, 'id')
      return id
   }
   const editHandler = (id) => {
      console.log(id, 'id')
      return id
   }
   const checkboxHandler = (id) => {
      console.log(id, 'id')
      return id
   }
   const StyledPhoto = item.photo
      ? styled('img')`
           width: 4rem;
           height: 4rem;
           object-fit: cover;
        `
      : styled('div')`
           width: 4rem;
           height: 4rem;
           background-color: rgba(56, 58, 83, 0.9);
        `
   const hoveredString = isHovered ? 'true' : 'false'
   return (
      <StyledTableRow
         key={item.key}
         hovered={hoveredString}
         center={textInCenter}
         index={indexForTable}
         sx={{ marginTop: '0.625rem' }}
         onMouseEnter={toggleHoveredHandler}
         onMouseLeave={toggleHoveredHandler}
      >
         {tables.map((el) => {
            if (el.name === 'ID') {
               return (
                  <StyledTableCell
                     center={textInCenter}
                     sx={{
                        width: '3.438vw',
                        paddingLeft: isHovered ? '0.26vw' : '1.042vw',
                     }}
                     key={el.name}
                  >
                     {nestedContentFunction(
                        isHovered,
                        indexForTable,
                        index,
                        checkboxHandler,
                        item.id
                     )}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Фото') {
               return (
                  <StyledTableCell
                     center={textInCenter}
                     sx={{
                        width: el.width,
                        marginTop: textInCenter === 'true' ? '0' : '0.3125rem',
                     }}
                     key={el.name}
                  >
                     <StyledPhoto src={item.photo} />
                  </StyledTableCell>
               )
            }
            if (el.name === 'Артикул') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.vendorCode}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Наименование товара') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {el.width === '12.5vw'
                        ? `Кол-во товара ${item.quantityOfGoods}шт.`
                        : `${abbreviatedModelName}...`}
                     {el.width === '12.5vw' && (
                        <ModelName>{`${abbreviatedModelName}...`}</ModelName>
                     )}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Дата создания') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {date}
                     <Time>{time}</Time>
                  </StyledTableCell>
               )
            }
            if (el.name === 'Цена товара') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        color: '#2C68F5',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.productPrice && item.productPrice.toLocaleString()}с
                     <PersentDiscount>
                        {item.discount ? `${item.discount}%` : '0%'}
                     </PersentDiscount>
                  </StyledTableCell>
               )
            }
            if (el.name === 'Текущея цена') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width, color: '#2C68F5' }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {finalPrice ? finalPrice.toLocaleString() : 0}с
                  </StyledTableCell>
               )
            }
            if (el.name === 'ФИО') {
               return (
                  <StyledTableCell
                     center={textInCenter}
                     sx={{ width: el.width }}
                     key={el.name}
                  >
                     {item.fullName}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Номер/Дата') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        color: '#2C68F5',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.number}
                     <ModelName>{time}</ModelName>
                  </StyledTableCell>
               )
            }
            if (el.name === 'Кол-во') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.quantity} {el.width === '7.188vw' && 'шт.'}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Общая сумма') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.totalSum}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Оформление заказа') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.ordering}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Статус') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        color: '#F99808',
                        display: 'flex',
                        alignItems: 'center',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.status} <StyledArrowDown />
                  </StyledTableCell>
               )
            }
            if (el.name === 'Цвет') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.color}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Кол-во SIM-карт') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.quantityOfSIMCart}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Цена') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        color: indexForTable === 3 ? 'black' : '#2C68F5',
                        background:
                           indexForTable === 3 && 'rgba(203, 17, 171, 0.10)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: indexForTable === 3 && '1.042vw',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {nestedStyledInput(
                        item.productPrice,
                        productPriceInput,
                        getProductPrice,
                        el.width
                     )}
                  </StyledTableCell>
               )
            }
            if (el.name === 'ОЗУ') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.RAM}
                  </StyledTableCell>
               )
            }
            if (el.name === 'ПЗУ') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.ROM}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Количество') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.quantity}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Действия') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        display: el.edit === false && 'flex',
                        justifyContent: 'center',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {el.edit && (
                        <StyledEditIcon
                           onClick={() => {
                              deleteHandler(item.id)
                           }}
                        />
                     )}
                     <StyledDeleteIcon
                        onClick={() => {
                           editHandler(item.id)
                        }}
                        style={{ marginLeft: el.edit === false && '0' }}
                     />
                  </StyledTableCell>
               )
            }
            return null
         })}
      </StyledTableRow>
   )
}
const StyledTableRow = styled(TableRow)(
   ({ theme, hovered, center, index }) => ({
      width: index === 3 ? '89.583vw' : '67.969vw',
      height: '4.75rem',
      background: calculateBackgroundColor(hovered, index),
      borderRadius: '0.375rem',
      transition: 'background 0.3s',
      border: `1px solid ${theme.palette.secondary.main}`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: center === 'true' ? 'center' : 'flex-start',
   })
)

const StyledTableCell = styled(TableCell)(({ center }) => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontSize: '0.833vw',
   fontWeight: 500,
   marginTop: center === 'true' ? '0' : '18px',
   lineHeight: 'normal',
   borderBottom: 'none',
   letterSpacing: '0.0625rem',
   padding: 0,
   flex: '1 1 auto',
   minWidth: 0,
   maxWidth: 'none',
}))

const PersentDiscount = styled('p')`
   color: #f10000;
   margin: 0;
   margin-top: 0.125rem;
`
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
const Time = styled('p')`
   color: #909cb5;
   margin: 0;
   margin-top: 0.125rem;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   cursor: pointer;
   margin-left: 1.042vw;
   width: 1.042vw;
   height: 1.042vw;
   :hover {
      path {
         fill: #f10000;
      }
   }
`
const StyledEditIcon = styled(EditIcon)`
   width: 1.042vw;
   height: 1.042vw;
   cursor: pointer;
   :hover {
      path {
         fill: black;
      }
   }
`
const StyledArrowDown = styled(ArrowDown)`
   width: 0.833vw;
   margin-left: 0.313vw;
   height: 0.833vw;
`
