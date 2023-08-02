import React from 'react'
import { styled } from '@mui/material'

const productInfo = [
   {
      title: 'Заказ № ',
      order: '000000-455247',
   },
   {
      title: 'Состояние:',
      state: 'Завершено',
   },
   {
      title: 'Контактный телефон:',
      numberPhone: '+996 (400) 00-00-00',
   },
   {
      title: 'Адрес доставки:',
      address: 'г.Бишкек, Токтоналиева, 145/7 кв 24, дом 5',
   },
]

export const InformationOrder = () => {
   return (
      <Container>
         <h3>Информация о заказе</h3>
         <Block>
            {productInfo.map((el, index) => {
               if (el.title === 'Заказ № ') {
                  return (
                     <ProductInfoItem index={index}>
                        <b>{el.title}</b>
                        <p style={{ marginLeft: '1rem' }}>{el.order}</p>
                     </ProductInfoItem>
                  )
               }

               if (el.title === 'Состояние:') {
                  return (
                     <ProductInfoItem index={index}>
                        <b>{el.title}</b>
                        <p style={{ marginLeft: '1rem' }}>{el.state}</p>
                     </ProductInfoItem>
                  )
               }
               if (el.title === 'Контактный телефон:') {
                  return (
                     <ProductInfoItem index={index}>
                        <b>{el.title}</b>
                        <p>{el.numberPhone}</p>
                     </ProductInfoItem>
                  )
               }
               if (el.title === 'Адрес доставки:') {
                  return (
                     <ProductInfoItem index={index}>
                        <b>{el.title}</b>
                        <p>{el.address}</p>
                     </ProductInfoItem>
                  )
               }
               return null
            })}
         </Block>
      </Container>
   )
}
const Container = styled('div')`
   border: 1px solid black;
   padding: 1.875rem;
   border-radius: 0.25rem;

   h3 {
      border-bottom: 1px solid black;
      width: 100%;
      padding-bottom: 20px;
   }
`

const Block = styled('div')`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 1rem;
   width: 30rem;
`
const ProductInfoItem = styled('div')(({ index }) => ({
   display: index === 0 || index === 1 ? 'flex' : 'auto',
   p: {
      margin: 0,
   },
}))
