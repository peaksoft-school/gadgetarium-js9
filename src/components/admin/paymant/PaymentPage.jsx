import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { InformationOrder } from './InformationOrder'
import { userOrdersPaymentBreadcrumbs } from '../../../utils/common/constants/paymant'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'
import { getOrderById } from '../../../store/order/Order.thunk'

export const PaymentPage = () => {
   const dispatch = useDispatch()
   const param = useParams()
   const { productResponseList } = useSelector(
      (state) => state.order.orderAdminId
   )

   useEffect(() => {
      dispatch(getOrderById(param.orderId))
   }, [])
   return (
      <Container>
         <ContainerChilde>
            <BreadCrumbsContainer>
               <BreadCrumbs breadcrumbs={userOrdersPaymentBreadcrumbs} />
               <Name>{param.fullName}</Name>
            </BreadCrumbsContainer>

            <PaymentParagraph>
               Оплата заказа {productResponseList?.orderNumber}
            </PaymentParagraph>
            <InfoContainer>
               <div>
                  <InfoContainerChilde>
                     <Info>
                        <InfoName>
                           <p>Наименование:</p>
                           <p>Кол-во товара:</p>
                           <p>Общая сумма заказа:</p>
                           <Discount>
                              Скидка: {productResponseList?.sale}%
                           </Discount>
                           <TotalDiscount>Сумма скидки:</TotalDiscount>
                        </InfoName>
                        <div>
                           <p>{productResponseList?.names}</p>
                           <p>{productResponseList?.quantity} шт</p>
                           <p>
                              {productResponseList?.totalPrice.toLocaleString()}{' '}
                              с
                           </p>
                           <DiscountPrice>`</DiscountPrice>
                           <p>
                              {productResponseList?.sumOfDiscount.toLocaleString()}
                              с
                           </p>
                        </div>
                     </Info>
                  </InfoContainerChilde>

                  <TotalContainer>
                     <Total>
                        <p>Итого:</p>
                        <span>
                           {productResponseList?.allPrice.toLocaleString()} с
                        </span>
                     </Total>
                  </TotalContainer>
               </div>
               <InformationOrder />
            </InfoContainer>
         </ContainerChilde>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: center;
`
const ContainerChilde = styled('div')`
   display: flex;
   flex-direction: column;
   width: 89.583vw;
`

const PaymentParagraph = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-weight: 500;
   padding-bottom: 1.25rem;
   border-bottom: 1px solid black;
`

const InfoContainer = styled('div')`
   display: flex;
`

const InfoContainerChilde = styled('div')`
   padding-bottom: 1.25rem;
   border-bottom: 1px solid #cdcdcd;
`

const Info = styled('div')`
   display: flex;
   width: 38vw;
   justify-content: space-between;
`

const InfoName = styled('div')`
   p {
      color: #292929;
      font-family: Inter;
      font-size: 1rem;
      font-weight: 600;
   }
`

const TotalContainer = styled('div')`
   display: flex;
   width: 38vw;
   justify-content: flex-end;
`

const Total = styled('div')`
   display: flex;
   align-items: center;
   p {
      color: #292929;
      font-family: Inter;
      font-size: 1rem;
      font-weight: 600;
      margin-right: 0.88rem;
   }
`

const Discount = styled('div')`
   color: red;
   font-family: Inter;
   font-size: 1rem;
   font-weight: 600;
`
const DiscountPrice = styled('span')`
   color: #fff;
`

const BreadCrumbsContainer = styled('div')`
   display: flex;
   align-items: center;
`
const Name = styled('p')`
   position: relative;
   top: 1.8rem;
   font-family: Inter;
   font-size: 0.875rem;
   font-weight: 400;
`

const TotalDiscount = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1rem;
   font-weight: 600;
`
