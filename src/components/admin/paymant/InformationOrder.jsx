import React from 'react'
import { styled } from '@mui/material'

export const InformationOrder = () => {
   return (
      <Container>
         <h3>Информация о заказе</h3>
         <Block>
            <div>
               <b>Заказ №</b> 000000-455247
            </div>
            <div>
               <b>Состояние:</b> Завершено
            </div>
            <div>
               <b>Контактный телефон:</b>
               <p>+996 (400) 00-00-00</p>
            </div>
            <div>
               <b>Адрес доставки:</b>
               <p>г.Бишкек, Токтоналиева, 145/7 кв 24, дом 5</p>
            </div>
         </Block>
      </Container>
   )
}
const Container = styled('div')`
   border: 1px solid gray;
   padding: 1.875rem;
   border-radius: 0.25rem;
   margin-left: 18rem;
   width: 30rem;

   h3 {
      border-bottom: 1px solid black;
      width: 100%;
      padding-bottom: 1.25rem;
   }
`

const Block = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 1rem;
   width: 100%;
   p {
      margin: 0px;
   }
`
