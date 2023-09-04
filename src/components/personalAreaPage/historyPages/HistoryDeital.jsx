import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { orderByIdRequest } from '../../../store/order/Order.thunk'
import { DELIVERED } from '../../../utils/common/constants/globalConstants'

export const HistoryDeital = ({ orderId = 5 }) => {
   const orders = useSelector((state) => state.order.orderInfo)
   console.log(orders.productResponseList)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(orderByIdRequest(orderId))
   }, [])

   return (
      <Conatiner>
         <p>Статус</p>
         <Status>
            {orders.status === DELIVERED ? <Deliver>Доставлено</Deliver> : ''}
         </Status>
         <Block>
            <div>
               <p>Телефон</p>
               <span>{orders.phoneNumber}</span>
            </div>
            <div>
               <p>Адрес</p>
               <span>
                  {orders.address === null ? (
                     <span>Исанова 55</span>
                  ) : (
                     orders.address
                  )}
               </span>
            </div>
         </Block>
      </Conatiner>
   )
}

const Conatiner = styled('div')`
   p {
      color: #384255;
      font-family: Inter;
      font-size: 0.875rem;
      font-weight: 400;
   }
   span {
      font-family: Manrope;
      font-size: 1rem;
      font-weight: 400;
   }
`

const Status = styled('div')``
const Deliver = styled('p')`
   display: flex;
   justify-content: center;
   color: #033152;
   font-family: Manrope;
   font-size: 0.875rem;
   font-weight: 600;
   padding: 0.375rem 0.625rem;
   border-radius: 0.375rem;
   width: 7.8125rem;
   background: #bddef1;
`
const Block = styled('div')`
   display: grid;
   gap: 1.25rem;
`
