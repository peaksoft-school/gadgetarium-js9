import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled, css } from '@mui/material'
import { useParams } from 'react-router-dom'
import {
   DELIVERED,
   PENDING,
   IN_PROCESSING,
   CANCEL,
   COURIER_ON_THE_WAY,
   RECEIVED,
   READY_FOR_DELIVERY,
} from '../../../../utils/common/constants/globalConstants'
import { orderByIdRequest } from '../../../../store/order/Order.thunk'
import { SecondProductCard } from '../../UserUI/uiCart/SecondProductCard'
import { Loading } from '../../../UI/loading/Loading'
import { userOrdersBreadcrumbsDetail } from '../../../../utils/common/constants/paymant'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'

export const HistoryDetail = () => {
   const param = useParams()

   const dispatch = useDispatch()

   const { orders, isLoading } = useSelector((state) => state.order)

   const state = orders?.status

   useEffect(() => {
      dispatch(orderByIdRequest(param))
   }, [])

   return (
      <>
         {isLoading && <Loading />}
         <Container>
            <BreadCrumbs breadcrumbs={userOrdersBreadcrumbsDetail} />
            <OrdersHistoryTitle>История заказов</OrdersHistoryTitle>
            <Line />
            <BlockContainer>
               <h2>№ {orders.orderNumber}</h2>
               <BlockCard>
                  {orders.productsInfoResponses?.map((el) => (
                     <SecondProductCard key={el.subProductId} el={el} />
                  ))}
               </BlockCard>
               <p>Статус</p>
               <div>
                  {state === DELIVERED && <Deliver>Доставлено</Deliver>}
                  {state === PENDING && <Pending>В ожидании</Pending>}
                  {state === CANCEL && <Canceled>Отменен</Canceled>}
                  {state === IN_PROCESSING && (
                     <Processing>В обработке</Processing>
                  )}
                  {state === COURIER_ON_THE_WAY && (
                     <OnMyWay>Курьер в пути</OnMyWay>
                  )}
                  {state === RECEIVED && <Deliver>Получен</Deliver>}
                  {state === READY_FOR_DELIVERY && (
                     <Deliver>Готов к выдаче</Deliver>
                  )}
               </div>
               <Block>
                  <BlockChilde1>
                     <div>
                        <p>Клиент</p>
                        <Paragraph>{orders.client}</Paragraph>
                     </div>
                     <div>
                        <p>Имя</p>
                        <Paragraph>{orders.firstName}</Paragraph>
                     </div>
                     <div>
                        <p>Фамилия</p>
                        <Paragraph>{orders.lastName}</Paragraph>
                     </div>
                     <div>
                        <p>Адрес</p>
                        <Paragraph>
                           {orders.address === null ? (
                              <Paragraph>Исанова 55</Paragraph>
                           ) : (
                              orders.address
                           )}
                        </Paragraph>
                     </div>
                  </BlockChilde1>

                  <BlockChilde2>
                     <div>
                        <p>Телефон</p>
                        <Paragraph>{orders.phoneNumber}</Paragraph>
                     </div>
                     <div>
                        <p>Email</p>
                        <Paragraph>{orders.email}</Paragraph>
                     </div>
                     <div>
                        <p>Дата</p>
                        <Paragraph>{orders.date}</Paragraph>
                     </div>
                     <div>
                        <p>Способ оплаты</p>

                        {orders.typePayment === 'CASH' ? (
                           <Paragraph>Наличные</Paragraph>
                        ) : (
                           <Paragraph>Без наличные</Paragraph>
                        )}
                     </div>
                  </BlockChilde2>
               </Block>
               <TotalDiskount>
                  <p>
                     Скидка: <Span>{orders.totalDiscount} c</Span>
                  </p>
                  <p>
                     Итого: <Span>{orders.totalPrice} c</Span>
                  </p>
               </TotalDiskount>
            </BlockContainer>
         </Container>
      </>
   )
}

const Container = styled('div')`
   width: 79.888vw;
   height: 94rem;
   p {
      font-family: Inter;
      font-size: 0.875rem;
      font-weight: 400;
   }
   .MuiCardMedia-root {
      height: 10rem;
   }
   .MuiTypography-root {
      margin-bottom: 0px;
   }
   h1 {
      font-family: Ubuntu;
      font-size: 1.875rem;
   }
   .MuiCard-root:not(:first-of-type) {
      margin-left: 2rem;
   }
   .MuiCard-root:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
   }
`

const BlockContainer = styled('div')`
   margin-top: 2.5rem;
`

const BlockCard = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 16px;
   margin-top: 1.88rem;
   padding-bottom: 1.88rem;
`

const Block = styled('div')`
   display: flex;
   width: 30rem;
   justify-content: space-between;
`
const BlockChilde1 = styled('div')`
   display: grid;
   gap: 1rem;
   p {
      margin-bottom: 0.39rem;
      color: #384255;
   }
`
const BlockChilde2 = styled('div')`
   display: grid;
   gap: 1rem;
   p {
      margin-bottom: 0.39rem;
      color: #384255;
   }
`
const Paragraph = styled('span')`
   color: #000;
   font-family: Manrope;
   font-size: 1rem;
`

const Span = styled('span')`
   font-family: Manrope;
   font-size: 1rem;
   font-weight: 500;
   color: #1a1a25;
`
const TotalDiskount = styled('div')`
   margin-top: 2.94rem;
   p {
      margin-top: 3px;
      margin-bottom: 0;
   }
`
const Line = styled('div')`
   border-bottom: 1px solid #cdcdcd;
`

const generalStyle = css`
   display: flex;
   justify-content: center;
   font-family: Manrope;
   font-size: 0.875rem;
   font-weight: 600;
   padding: 0.375rem 0.625rem;
   border-radius: 0.375rem;
   width: 7.8125rem;
`

const Pending = styled('p')`
   ${generalStyle}
   background: #BDDEF1;
   color: #033152;
`
const Canceled = styled('p')`
   ${generalStyle}
   background: #F53B49;
   color: #fff;
`
const Deliver = styled('p')`
   ${generalStyle}
   background: #299a0d;
   color: #fff;
`
const Processing = styled('p')`
   ${generalStyle}
   color: #033152;
   background: #f3daa5;
   font-size: 1rem;
`
const OnMyWay = styled('p')`
   ${generalStyle}
   color: #0812a5;
   font-size: 1rem;
`
const OrdersHistoryTitle = styled('h1')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-weight: 500;
   margin-top: 1.88rem;
`
