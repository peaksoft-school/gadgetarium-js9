import React from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { statusTranslate } from '../../../utils/common/constants/constantsAdminAddNewProduct'

export const InformationOrder = () => {
   const { orderNumber, status, phoneNumber, address } = useSelector(
      (state) => state.order.orderAdminId
   )
   return (
      <Container>
         <Title>Информация о заказе</Title>
         <Block>
            <div>
               <b>Заказ №</b> {orderNumber}
            </div>
            <div>
               <b>Состояние:</b> {statusTranslate[status]}
            </div>
            <div>
               <b>Контактный телефон:</b>
               <p>{phoneNumber}</p>
            </div>
            <div>
               <b>Адрес доставки:</b>
               <p>
                  {address === null
                     ? 'г.Бишкек, Токтоналиева, 145/7 кв 24, дом 5'
                     : address}
               </p>
            </div>
         </Block>
      </Container>
   )
}
const Container = styled('div')`
   border: 1px solid #cdcdcd;
   padding: 1.875rem;
   border-radius: 0.25rem;
   margin-left: 22.083vw;
   width: 30rem;
   font-family: Inter;

   h3 {
      width: 100%;
      padding-bottom: 1.25rem;
   }
`
const Title = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 20px;
   font-style: normal;
   font-weight: 500;
   line-height: 120%;
   border-bottom: 1px solid #cdcdcd;
   padding-bottom: 1rem;
   margin-top: 0;
`

const Block = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 1rem;
   width: 100%;
   p {
      margin: 2px 0 0 0;
   }
`
