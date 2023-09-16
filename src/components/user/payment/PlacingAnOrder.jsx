import React from 'react'
import { styled } from '@mui/material'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'
import { StepPayment } from './StepPayment'
import { DeliveryOptions } from './paymentPartOne/DeliveryOptions'

export const breadcrumbs = [
   { path: '/', label: 'Главная' },
   {
      path: '/',
      label: 'Корзина',
   },
   { label: 'Оформление заказа' },
]

export const PlacingAnOrder = () => {
   return (
      <Container>
         <div>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <BoxTitle>
               <p>Оформление заказа</p>
            </BoxTitle>

            <StepPayment />

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

export const ContainerStepper = styled('div')`
   width: 41.6875rem;
`
