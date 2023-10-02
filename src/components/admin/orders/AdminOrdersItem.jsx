import { TableCell, TableRow, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as ArrowDown } from '../../../assets/icons/arrows/down-icon.svg'
import {
   changeStatusOrder,
   deleteIsAdminThunk,
   getSearchUserOrder,
} from '../../../store/order/Order.thunk'
import { Button } from '../../UI/Button'
import { Modal } from '../../UI/Modal'
import { statusTranslate } from '../../../utils/common/constants/constantsAdminAddNewProduct'
import {
   CANCEL,
   COURIER_ON_THE_WAY,
   DELIVERED,
   IN_PROCESSING,
   PENDING,
   READY_FOR_DELIVERY,
} from '../../../utils/common/constants/globalConstants'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/tools-for-site/delete-icon.svg'

const tabArray = [
   {
      id: '1',
      status: 'В ожидании',
   },
   {
      id: '2',
      status: 'Готов к выдаче',
   },
   {
      id: '3',
      status: 'Доставлен',
   },
   {
      id: '4',
      status: 'Отменить',
   },
]
const tabArray2 = [
   {
      id: '1',
      status: 'В ожидании',
   },
   {
      id: '2',
      status: 'Готов к выдаче',
   },
   {
      id: '3',
      status: ' Курьер в пути',
   },
   {
      id: '4',
      status: 'Доставлен',
   },
   {
      id: '5',
      status: 'Отменить',
   },
]

export const AdminOrderItem = ({ dataFunc, tables, index, ...item }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const time = item.createdAt ? item.createdAt.split(' ')[1] : null
   const [openModal, setOpenModal] = useState(false)
   const [arrowIconFlipped, setArrowIconFlipped] = useState(false)
   const { snackbarHandler } = useSnackbar()
   const open = Boolean(arrowIconFlipped)
   const toggleModalHandler = () => {
      setOpenModal(!openModal)
   }
   const handleClick = (event) => {
      setArrowIconFlipped(event.currentTarget)
   }
   const handleClose = () => {
      setArrowIconFlipped(false)
   }
   const navigateToPaymentPage = () => {
      navigate(
         `/admin/orders/${item.orderId}/paymentIsOrder/${item.userFullName}`
      )
   }

   const handleCloseMenuItem = (statusTab) => {
      const data = {
         orderId: item.orderId,
         status: statusTab,
      }
      dispatch(changeStatusOrder(data))
         .unwrap()
         .then(() => {
            dispatch(getSearchUserOrder(dataFunc))
            snackbarHandler({
               message: 'Статус товара успешно изменен',
               type: 'success',
            })
         })
      handleClose()
   }

   return (
      <>
         <StyledTableRow key={item.key} sx={{ marginTop: '0.625rem' }}>
            <TablesContainer onClick={navigateToPaymentPage}>
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
                           {item.userFullName}
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
                           {item.orderNumber}
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
                           {item.typeDelivery === 'PICKUP' && (
                              <TypeDelivery>Самовывоз</TypeDelivery>
                           )}
                           {item.typeDelivery === 'DELIVERY' && (
                              <TypeDelivery>Доставка</TypeDelivery>
                           )}
                        </StyledTableCell>
                     )
                  }

                  return null
               })}
            </TablesContainer>
            {tables.map((el) => {
               if (el.name === 'Статус') {
                  return (
                     <StyledTableCell
                        onClick={(event) => {
                           setArrowIconFlipped(!arrowIconFlipped)
                           if (!arrowIconFlipped) {
                              handleClick(event)
                           }
                        }}
                        sx={{
                           width: el.width,
                           display: 'flex',
                           alignItems: 'center',
                        }}
                        key={el.name}
                     >
                        {item.status === PENDING && (
                           <StatusStyle>
                              {statusTranslate[item.status]}
                           </StatusStyle>
                        )}
                        {item.status === DELIVERED && (
                           <DeliverStyle>
                              {statusTranslate[item.status]}
                           </DeliverStyle>
                        )}
                        {item.status === IN_PROCESSING && (
                           <StatusStyle>
                              {statusTranslate[item.status]}
                           </StatusStyle>
                        )}
                        {item.status === COURIER_ON_THE_WAY && (
                           <OnMyWay>{statusTranslate[item.status]}</OnMyWay>
                        )}
                        {item.status === CANCEL && (
                           <CancellTab>
                              {statusTranslate[item.status]}
                           </CancellTab>
                        )}
                        {item.status === READY_FOR_DELIVERY && (
                           <DeliverStyle>
                              {statusTranslate[item.status]}
                           </DeliverStyle>
                        )}
                        <StyledArrowDown
                           flipped={arrowIconFlipped}
                           onClick={(event) => {
                              setArrowIconFlipped(!arrowIconFlipped)
                              if (!arrowIconFlipped) {
                                 handleClick(event)
                              }
                           }}
                        />
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
                           onClick={() => setOpenModal(true)}
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
               <FullNameDelete> {item.userFullName}</FullNameDelete>?
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
                  onClick={() =>
                     dispatch(deleteIsAdminThunk(item.orderId))
                        .unwrap()
                        .then(() => {
                           dispatch(getSearchUserOrder(dataFunc))
                           setOpenModal(false)
                           snackbarHandler({
                              message: 'Заказ успешно удален!',
                              type: 'success',
                           })
                        })
                  }
                  variant="contained"
                  padding="10px 24px"
                  backgroundhover="#E313BF"
                  backgroundactive="#C90EA9"
               >
                  Удалить
               </Button>
            </ButtonContainer>
         </StyledModal>

         <Menu anchorEl={arrowIconFlipped} open={open} onClose={handleClose}>
            {tabArray.map((el) => (
               <div key={el.id}>
                  {item.typeDelivery === 'PICKUP' && (
                     <MenuTitle onClick={() => handleCloseMenuItem(el.status)}>
                        {el.status}
                     </MenuTitle>
                  )}
               </div>
            ))}
            {tabArray2.map((el) => (
               <div key={el.id}>
                  {item.typeDelivery === 'DELIVERY' && (
                     <MenuTitle onClick={() => handleCloseMenuItem(el.status)}>
                        {el.status}
                     </MenuTitle>
                  )}
               </div>
            ))}
         </Menu>
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
   cursor: 'pointer',
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

const StyledArrowDown = styled(ArrowDown)(({ flipped }) => ({
   width: '0.833vw',
   marginLeft: '0.313vw',
   height: '0.833vw',
   cursor: 'pointer',
   transform: flipped ? 'rotate(0deg)' : 'rotate(180deg)',
}))
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
const MenuTitle = styled(MenuItem)`
   color: #292929;
   font-family: Inter;
   font-size: 0.875rem;
   font-weight: 400;
`
const TypeDelivery = styled('span')`
   color: #292929;
   font-family: Inter;
   font-size: 0.833vw;
   font-weight: 400;
`
const StatusStyle = styled('span')`
   color: #f99808;
`
const DeliverStyle = styled('span')`
   color: green;
`
const CancellTab = styled('span')`
   color: red;
`
const OnMyWay = styled('span')`
   color: #0812a5;
`
const TablesContainer = styled('div')`
   padding-top: 1.125rem;
   box-sizing: border-box;
   height: 100%;
`
