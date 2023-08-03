import React from 'react'
import { styled } from '@mui/material'
import { InformationOrder } from './InformationOrder'

export const PaymentPage = () => {
   const total = 12000

   return (
      <Container>
         <h2>Оплата заказа 000000-455247</h2>
         <Info>
            <ContainerChild>
               <Line>
                  <Block>
                     <div>
                        <p style={{ marginTop: '0px' }}>
                           <b>Наименование:</b>
                        </p>
                        <p>
                           <b>Кол-во товара:</b>
                        </p>
                        <p>
                           <b>Общая сумма заказа:</b>
                        </p>

                        <p style={{ color: 'red' }}>
                           <b>Скидка:</b>
                        </p>
                        <p>
                           <b>Сумма скидки:</b>
                        </p>
                     </div>
                     <div>
                        <p style={{ marginTop: '0px' }}>
                           Samsung Galaxy S21 128gb синий 9(MLP3RU)
                        </p>
                        <p>1шт</p>
                        <p>60 000 с</p>
                        <p style={{ color: 'red', marginLeft: '-150px' }}>
                           {15}%
                        </p>
                        <p>9 000 c</p>
                     </div>
                  </Block>
               </Line>
               <Total>
                  <p>
                     <b>Итого:</b> {total.toLocaleString()} с
                  </p>
               </Total>
            </ContainerChild>
            <InformationOrder />
         </Info>
      </Container>
   )
}
const Container = styled('div')`
   padding: 0 6.25rem 0;
   display: flex;
   flex-direction: column;
   margin-top: 6.88rem;

   h2 {
      padding-bottom: 1.25rem;
      border-bottom: 1px solid black;
   }
`
const Info = styled('div')`
   display: flex;
   margin-top: 2.5rem;
`
const Block = styled('div')`
   display: flex;
   justify-content: flex-start;
   gap: 2.88rem;
   width: 40rem;
   div {
      height: 200px;
   }
`
const ContainerChild = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`
const Total = styled('div')`
   p {
      margin-top: 0.625rem;
   }
`

const Line = styled('div')`
   border-bottom: 1px solid black;
   width: 550px;
`
