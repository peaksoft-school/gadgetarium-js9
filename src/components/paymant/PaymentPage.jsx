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
                        <p>
                           <b>Наименование:</b>
                        </p>
                        <p>
                           <b>Кол-во товара:</b>
                        </p>
                        <p>
                           <b>Общая сумма заказа:</b>
                        </p>

                        <BlockParagraph>
                           <b>Скидка:</b>
                        </BlockParagraph>
                        <p>
                           <b>Сумма скидки:</b>
                        </p>
                     </div>
                     <BlockChilde>
                        <p>Samsung Galaxy S21 128gb синий 9(MLP3RU)</p>
                        <p>1шт</p>
                        <p>60 000 с</p>
                        <Paragraph>{15}%</Paragraph>
                        <Paragraph2>9 000 c</Paragraph2>
                     </BlockChilde>
                  </Block>
               </Line>
               <p>
                  <b>Итого:</b> {total.toLocaleString()} с
               </p>
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
   width: 100%;
   p {
      margin-top: 0;
   }
`
const ContainerChild = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
`
const Line = styled('div')`
   border-bottom: 1px solid black;
   padding-bottom: 0.5rem;
   width: 100%;
`
const BlockChilde = styled('div')`
   position: relative;
   p {
      margin-top: 0;
   }
`
const BlockParagraph = styled('p')`
   color: red;
`
const Paragraph = styled('p')`
   position: absolute;
   right: 28.75rem;
   color: red;
`
const Paragraph2 = styled('p')`
   position: absolute;
   top: 8.75rem;
`
