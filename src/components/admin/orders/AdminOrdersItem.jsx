import { TableCell, TableRow, styled } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrows/down-icon.svg'
// import {
//    deleteIsAdminThunk,
//    orderIsAdminThunk,
// } from '../../../store/order/Order.thunk'
import { Button } from '../../UI/Button'
import { Modal } from '../../UI/Modal'

export const AdminOrderItem = ({ tables, index, ...item }) => {
   const time = item.createdAt ? item.createdAt.split(' ')[1] : null
   const [openModal, setOpenModal] = useState(false)

   const toggleModalHandler = () => {
      setOpenModal(!openModal)
   }

   return (
      <>
         <StyledTableRow key={item.key} sx={{ marginTop: '0.625rem' }}>
            {tables.map((el) => {
               if (el.name === 'ID') {
                  return (
                     <StyledTableCell
                        sx={{
                           width: '3.438vw',
                           paddingLeft: '1.042vw',
                        }}
                        key={el.name}
                     >
                        {index + 1}
                     </StyledTableCell>
                  )
               }
               if (el.name === 'ФИО') {
                  return (
                     <StyledTableCell sx={{ width: el.width }} key={el.name}>
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
                        key={el.name}
                     >
                        {item.number}
                        <ModelName>{time}</ModelName>
                     </StyledTableCell>
                  )
               }
               if (el.name === 'Кол-во') {
                  return (
                     <StyledTableCell sx={{ width: el.width }} key={el.name}>
                        {item.quantity} {el.width === '7.188vw' && 'шт.'}
                     </StyledTableCell>
                  )
               }
               if (el.name === 'Общая сумма') {
                  return (
                     <StyledTableCell sx={{ width: el.width }} key={el.name}>
                        {item.totalPrice}
                     </StyledTableCell>
                  )
               }
               if (el.name === 'Оформление заказа') {
                  return (
                     <StyledTableCell sx={{ width: el.width }} key={el.name}>
                        {item.typeDelivery}
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
                        key={el.name}
                     >
                        {item.status} <StyledArrowDown />
                     </StyledTableCell>
                  )
               }

               if (el.name === 'Действия') {
                  return (
                     <StyledTableCell
                        sx={{
                           width: el.width,
                           display: 'flex',
                           justifyContent: 'center',
                        }}
                        key={el.name}
                     >
                        <StyledDeleteIcon
                           onClick={() =>
                              // dispatch(deleteIsAdminThunk(row.orderId))
                              //    .unwrap()
                              //    .then(() => {
                              //       dispatch(orderIsAdminThunk())
                              //    })
                              setOpenModal(true)
                           }
                           style={{ marginLeft: el.edit === false && '0' }}
                        />
                     </StyledTableCell>
                  )
               }
               return null
            })}
         </StyledTableRow>
         <StyledModal
            onClose={toggleModalHandler}
            open={openModal}
            padding="20px 90px"
         >
            <ModalTitle>
               Вы уверены, что хотите удалить товар
               <FullNameDelete> {item.fullName}</FullNameDelete>?
            </ModalTitle>
            <ButtonContainer>
               <Button
                  onClick={toggleModalHandler}
                  padding="6px 24px"
                  variant="outlined"
                  backgroundhover="#CB11AB"
                  backgroundactive="#E313BF"
               >
                  Отменить
               </Button>
               <Button
                  variant="contained"
                  padding="10px 24px"
                  backgroundhover="#E313BF"
                  backgroundactive="#C90EA9"
               >
                  Удалить
               </Button>
            </ButtonContainer>
         </StyledModal>
      </>
   )
}
const StyledTableRow = styled(TableRow)(() => ({
   width: '67.969vw',
   height: '4.75rem',
   background: 'none',
   borderRadius: '0.375rem',
   transition: 'background 0.3s',

   boxSizing: 'border-box',
   display: 'flex',
   alignItems: 'flex-start',
   border: '1px solid #CDCDCD',
   ': hover': {
      background: 'rgba(144, 156, 181, 0.20)',
   },
}))
const StyledTableCell = styled(TableCell)(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontSize: '0.833vw',
   fontWeight: 500,
   marginTop: '18px',
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

const StyledArrowDown = styled(ArrowDown)`
   width: 0.833vw;
   margin-left: 0.313vw;
   height: 0.833vw;
`
const StyledModal = styled(Modal)`
   .MuiBox-root {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
   }
`
const ModalTitle = styled('p')`
   width: 21.875rem;
   color: #292929;
   text-align: center;
   font-family: Inter;
   font-size: 18px;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
   margin: 0;
`
const ButtonContainer = styled('div')`
   display: flex;
   gap: 30px;
`
const FullNameDelete = styled('span')`
   color: #000;
   font-family: Inter;
   font-size: 1.125rem;
   font-weight: 600;
`
