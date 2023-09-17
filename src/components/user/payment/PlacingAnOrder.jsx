import React, { useState } from 'react'
import { styled } from '@mui/material'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'
import { StepPayment } from './StepPayment'
import { DeliveryOptions } from './paymentPartOne/DeliveryOptions'
import { MiniBasketOrderPrice } from './UIPayment/miniBasket/MiniBasketOrderPrice'

export const breadcrumbs = [
   { path: '/', label: 'Главная' },
   {
      path: '/',
      label: 'Корзина',
   },
   { label: 'Оформление заказа' },
]

export const PlacingAnOrder = () => {
   const [page, setPage] = useState([0])

   const onBackHandler = () => {
      const newPage = page.slice(0, page.length - 1)

      if (page.length !== 1) {
         setPage(newPage)
      }
   }

   const onNextHandler = () => {
      const newPage = page.length

      if (page.length !== 0 && page.length !== 3) {
         setPage([...page, newPage])
      }
   }

   return (
      <Container>
         <button onClick={onBackHandler}>Back</button>
         <button onClick={onNextHandler}>Next</button>

         <div>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <BoxTitle>
               <p>Оформление заказа</p>
            </BoxTitle>

            <ContainerStepper>
               <StepPayment page={page} />

               <div>
                  <MiniBasketOrderPrice />
               </div>
            </ContainerStepper>

            <div>
               <DeliveryOptions />
            </div>
         </div>
      </Container>
   )
}

export const Container = styled('div')`
   /* background-color: #f4f4f4; */
   padding: 0 12.1875rem;
   padding-bottom: 7.5rem;
`

export const BoxTitle = styled('div')`
   margin: 1.875rem 0 3rem 0;

   p {
      color: #292929;
      font-family: Ubuntu;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      padding-bottom: 1.25rem;
      margin: 0;
      border-bottom: 0.0625rem solid #cdcdcd;
   }
`

const ContainerStepper = styled('div')`
   display: flex;
   width: 100%;
   justify-content: space-between;
`
