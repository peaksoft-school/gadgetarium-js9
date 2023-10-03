import { TableCell, TableRow, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as EditIcon } from '../../../../assets/icons/tools-for-site/edit-icon.svg'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/tools-for-site/delete-icon.svg'
import {
   calculateBackgroundColor,
   nestedContentFunction,
} from '../../../../utils/helpers/functions'
import { adminGoodsActions } from '../../../../store/admin.goods/admin.goods.slice'
import { deleteProduct } from '../../../../store/admin.goods/admin.goods.thunk'

export const TableItem = ({
   tables,
   textInCenter,
   indexForTable,
   onClick,
   index,
   ...item
}) => {
   const time = item.createdAt ? item.createdAt.split(' ')[1] : null
   const date = item.createdAt ? item.createdAt.split(' ')[0] : null
   const abbreviatedModelName = item.name && item.name.slice(0, 18)
   const [isHovered, setIsHovered] = useState(false)
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const closeHoveredHandler = () => {
      if (item.isChecked) {
         return null
      }
      return setIsHovered(false)
   }
   const openHoveredHandler = () => {
      setIsHovered(true)
   }
   const deleteHandler = (id) => {
      dispatch(deleteProduct({ id, onClick }))
      return id
   }
   const editHandler = (id) => {
      navigate(`/admin/goods/edit-product/${id}`)
      return id
   }

   const checkboxHandler = (id) => {
      dispatch(adminGoodsActions.changeChecked(id))
      setIsHovered(true)
   }

   const onNavigateToProduct = () => {
      navigate(`/admin/goods/product/${item.productId}`)
   }

   const StyledPhoto = item.image
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
         onMouseEnter={openHoveredHandler}
         onMouseLeave={closeHoveredHandler}
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
                        item.subProductId,
                        item.isChecked
                     )}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Фото') {
               return (
                  <StyledTableCell
                     onClick={onNavigateToProduct}
                     center={textInCenter}
                     sx={{
                        width: el.width,
                        cursor: 'pointer',
                        marginTop: textInCenter === 'true' ? '0' : '0.3125rem',
                     }}
                     key={el.name}
                  >
                     <StyledPhoto src={item.image} />
                  </StyledTableCell>
               )
            }
            if (el.name === 'Артикул') {
               return (
                  <StyledTableCell
                     onClick={onNavigateToProduct}
                     sx={{ width: el.width, cursor: 'pointer' }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.articleNumber}
                  </StyledTableCell>
               )
            }
            if (el.name === 'Наименование товара') {
               return (
                  <StyledTableCell
                     onClick={onNavigateToProduct}
                     sx={{
                        width: el.width,
                        cursor: 'pointer',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {el.width === '12.5vw'
                        ? `Кол-во товара ${item.quantity}шт.`
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
                     onClick={onNavigateToProduct}
                     sx={{ width: el.width, cursor: 'pointer' }}
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
                     onClick={onNavigateToProduct}
                     sx={{
                        width: el.width,
                        color: '#2C68F5',
                        cursor: 'pointer',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.price && item.price.toLocaleString()}с
                     <PersentDiscount>
                        {item.sale ? `${item.sale}%` : '0%'}
                     </PersentDiscount>
                  </StyledTableCell>
               )
            }
            if (el.name === 'Текущея цена') {
               return (
                  <StyledTableCell
                     onClick={onNavigateToProduct}
                     sx={{
                        width: el.width,
                        color: '#2C68F5',
                        cursor: 'pointer',
                     }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.currentPrice
                        ? item.currentPrice.toLocaleString()
                        : item.price.toLocaleString()}
                     с
                  </StyledTableCell>
               )
            }
            if (el.name === 'Кол-во') {
               return (
                  <StyledTableCell
                     onClick={onNavigateToProduct}
                     sx={{ width: el.width, cursor: 'pointer' }}
                     center={textInCenter}
                     key={el.name}
                  >
                     {item.quantity} {el.width === '7.188vw' && 'шт.'}
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
                              editHandler(item.subProductId)
                           }}
                        />
                     )}
                     <StyledDeleteIcon
                        onClick={() => {
                           deleteHandler(item.subProductId)
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
   height: '100%',
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
