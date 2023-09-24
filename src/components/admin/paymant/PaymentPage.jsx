import React from 'react'
import { styled } from '@mui/material'
import { InformationOrder } from './InformationOrder'

export const PaymentPage = () => {
   return (
      <Container>
         <h2>Оплата заказа 000000-455247</h2>
         <InfoContainer>
            <div>
               <Info>
                  <InfoName>
                     <p>Наименование:</p>
                     <p>Кол-во товара:</p>
                     <p>Общая сумма заказа:</p>
                     <p>Скидка:</p>
                     <p>Сумма скидки:</p>
                  </InfoName>
                  <div>
                     <p>Samsung Galaxy S21 128gb синий 9(MLP3RU)</p>
                     <p>1шт</p>
                     <p>60 000 с</p>
                     <Discount>15%</Discount>
                     <p>9 000 с</p>
                  </div>
               </Info>
               <TotalContainer>
                  <Total>
                     <p>Итого:</p>
                     <span>51 000 с</span>
                  </Total>
               </TotalContainer>
            </div>
            <InformationOrder />
         </InfoContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 6.88rem;
   width: 89.583vw;

   h2 {
      padding-bottom: 1.25rem;
      border-bottom: 1px solid black;
   }
`

const InfoContainer = styled('div')`
   display: flex;
`

const Info = styled('div')`
   display: flex;
   width: 38vw;
   justify-content: space-between;

   padding-bottom: 1.25rem;
   border-bottom: 1px solid #cdcdcd;
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
   position: relative;
   right: 7.5rem;
   color: red;
`
