import { TableCell, TableRow, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as EditIcon } from '../../../assets/icons/tools-for-site/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrows/down-icon.svg'
import { themes } from '../../../utils/common/styles/themes'
import {
   calculateBackgroundColor,
   nestedContentFunction,
} from '../../../utils/common/constants/functions'

const TableItem = ({ tables, textInCenter, index, ...item }) => {
   const time = item.purchaseTime.split(' ')[1]
   const date = item.purchaseTime.split(' ')[0]
   const discountAmount = (item.productPrice * item.discount) / 100
   const finalPrice = item.productPrice - discountAmount
   const abbreviatedModelName = item.modelName.slice(0, 18)
   const [isHovered, setIsHovered] = useState(false)
   const toggleHoveredHandler = () => {
      setIsHovered((prev) => !prev)
   }
   const StyledPhoto = item.photo
      ? styled(item.photo)`
           width: 4rem;
           height: 4rem;
        `
      : styled('div')`
           width: 4rem;
           height: 4rem;
           background-color: rgba(56, 58, 83, 0.9);
        `
   return (
      <StyledTableRow
         key={item.key}
         isHovered={isHovered}
         textInCenter={textInCenter}
         index={index}
         sx={{ marginTop: '0.625rem' }}
         onMouseEnter={toggleHoveredHandler}
         onMouseLeave={toggleHoveredHandler}
      >
         {index === 3 ? null : (
            <StyledTableCell
               align="left"
               textInCenter={textInCenter}
               sx={{
                  width: '4.125rem',
                  paddingLeft: isHovered ? '0.3125rem' : '1.25rem',
               }}
            >
               {nestedContentFunction(isHovered, index)}
            </StyledTableCell>
         )}

         {tables.map((el) => {
            if (el.name === 'ФИО') {
               return (
                  <StyledTableCell
                     textInCenter={textInCenter}
                     sx={{ width: el.width }}
                  >
                     {item.fullName}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Бренд') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width, paddingLeft: '1.25rem' }}
                     textInCenter={textInCenter}
                  >
                     {item.brand}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Объем памяти') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     {item.memory} ГБ
                  </StyledTableCell>
               )
            }
            if (el.name === 'Оперативная память') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     RAM {item.RAM}ГБ
                  </StyledTableCell>
               )
            }
            if (el.name === 'Фото') {
               return (
                  <StyledTableCell
                     textInCenter={textInCenter}
                     sx={{
                        width: el.width,
                        marginTop: textInCenter ? '0' : '0.3125rem',
                     }}
                  >
                     <StyledPhoto />
                  </StyledTableCell>
               )
            }
            if (el.name === 'Артикул') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
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
                     textInCenter={textInCenter}
                  >
                     {el.width === 240
                        ? `Кол-во товара ${item.quantityOfGoods}шт.`
                        : `${abbreviatedModelName}`}
                     {el.width === 240 && (
                        <ModelName>{abbreviatedModelName}</ModelName>
                     )}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Цвет') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                     }}
                     textInCenter={textInCenter}
                  >
                     {item.color}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Дата создания') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     {date}
                     <Time>{time}</Time>
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
                     textInCenter={textInCenter}
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
                     textInCenter={textInCenter}
                  >
                     {item.quantity} {el.width === 138 && 'шт.'}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Общая сумма') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     {item.totalSum}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Оформление заказа') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
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
                     textInCenter={textInCenter}
                  >
                     {item.status} <StyledArrowDown />
                  </StyledTableCell>
               )
            }
            if (el.name === 'Кол-во SIM-карт') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     {item.quantityOfSIMCart}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Дата выпуска') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     {date}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Кол-во товара') {
               return (
                  <StyledTableCell
                     sx={{
                        width: el.width,
                        background: 'rgba(203, 17, 171, 0.10)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: index === 3 && '1.25rem',
                     }}
                     textInCenter={textInCenter}
                  >
                     {item.quantityOfGoods}
                  </StyledTableCell>
               )
            }
            if (el.name === 'ОЗУ') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     {item.RAM}
                  </StyledTableCell>
               )
            }
            if (el.name === 'ПЗУ') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
                  >
                     {item.ROM}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Количество') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width }}
                     textInCenter={textInCenter}
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
                        color: index === 3 ? 'black' : '#2C68F5',
                        background: index === 3 && 'rgba(203, 17, 171, 0.10)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: index === 3 && '1.25rem',
                     }}
                     textInCenter={textInCenter}
                  >
                     {item.productPrice.toLocaleString()}
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
                     textInCenter={textInCenter}
                  >
                     {item.productPrice.toLocaleString()}с
                     <PersentDiscount>{item.discount}%</PersentDiscount>
                  </StyledTableCell>
               )
            }
            if (el.name === 'Текущея цена') {
               return (
                  <StyledTableCell
                     sx={{ width: el.width, color: '#2C68F5' }}
                     textInCenter={textInCenter}
                  >
                     {finalPrice.toLocaleString()}с
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
                     textInCenter={textInCenter}
                  >
                     {el.edit && <StyledEditIcon />}
                     <StyledDeleteIcon
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

export default TableItem

const StyledTableRow = styled(TableRow)(
   ({ isHovered, textInCenter, index }) => ({
      width: index === 3 ? '107.5rem' : '81.5625rem',
      height: '4.75rem',
      background: calculateBackgroundColor(isHovered, index),
      borderRadius: '0.375rem',
      transition: 'background 0.3s',
      border: `1px solid ${themes.palette.secondary.main}`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: textInCenter ? 'center' : 'flex-start',
   })
)

const StyledTableCell = styled(TableCell)(({ textInCenter }) => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontSize: '1rem',
   fontWeight: 500,
   marginTop: textInCenter ? '0' : '18px',
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
   font-size: 0.875rem;
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
   margin-left: 1.25rem;
   :hover {
      path {
         fill: #f10000;
      }
   }
`
const StyledEditIcon = styled(EditIcon)`
   cursor: pointer;
   :hover {
      path {
         fill: black;
      }
   }
`
const StyledArrowDown = styled(ArrowDown)`
   width: 1rem;
   margin-left: 0.375rem;
   height: 1rem;
`
