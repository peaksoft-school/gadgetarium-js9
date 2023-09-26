import React from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { InformationOrder } from './InformationOrder'
import { userOrdersPaymentBreadcrumbs } from '../../../utils/common/constants/paymant'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'

export const PaymentPage = () => {
   const { responseAdminList } = useSelector(
      (state) => state.order.orderIsAdmin
   )
   return (
      <Container>
         <ContainerChilde>
            <BreadCrumbsContainer>
               <BreadCrumbs breadcrumbs={userOrdersPaymentBreadcrumbs} />
               {responseAdminList?.map((el) => (
                  <Name key={el.name}>{el.fullName}</Name>
               ))}
            </BreadCrumbsContainer>
            <PaymentParagraph>Оплата заказа 000000-455247</PaymentParagraph>
            <InfoContainer>
               <div>
                  <InfoContainerChilde>
                     <Info>
                        <InfoName>
                           <p>Наименование:</p>
                           <p>Кол-во товара:</p>
                           <p>Общая сумма заказа:</p>
                           <Discount>
                              Скидка: <DiscountPrice>15%</DiscountPrice>
                           </Discount>
                        </InfoName>
                        <div>
                           <p>Samsung Galaxy S21 128gb синий 9(MLP3RU)</p>
                           <p>1шт</p>
                           <p>60 000 с</p>
                        </div>
                     </Info>
                     <TotalSum>
                        <TotalDiscount>Сумма скидки:</TotalDiscount>
                        <p>9 000 с</p>
                     </TotalSum>
                  </InfoContainerChilde>

                  <TotalContainer>
                     <Total>
                        <p>Итого:</p>
                        <span>51 000 с</span>
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
   width: 9vw;
   justify-content: space-between;
   align-items: center;
   p {
      color: #292929;
      font-family: Inter;
      font-size: 1rem;
      font-weight: 600;
   }
`

const Discount = styled('div')`
   color: red;
   font-family: Inter;
   font-size: 1rem;
   font-weight: 600;
`
const DiscountPrice = styled('span')`
   color: red;
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
const TotalSum = styled('div')`
   display: flex;
   width: 20.3vw;
   justify-content: space-between;
`
const TotalDiscount = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1rem;
   font-weight: 600;
`
