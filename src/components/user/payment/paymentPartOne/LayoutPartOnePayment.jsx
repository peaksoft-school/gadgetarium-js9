import { styled } from '@mui/material'
import React from 'react'
import { StepPayment } from '../StepPayment'
import { MiniBasketOrderPrice } from '../UIPayment/miniBasket/MiniBasketOrderPrice'
import { DeliveryOptions } from './DeliveryOptions'

export const LayoutPartOnePayment = ({
   page,
   delivery,
   onPickupHandler,
   onDeliveryHandler,
   setPage,
   formik,
   nextHandler,
}) => {
   return (
      <ContainerStepper>
         <div>
            <StepPayment page={page} />
            <DeliveryOptions
               nextHandler={nextHandler}
               delivery={delivery}
               onPickupHandler={onPickupHandler}
               onDeliveryHandler={onDeliveryHandler}
               setPage={setPage}
               formik={formik}
               page={page}
            />
         </div>
         <MiniBasketOrderPrice />
      </ContainerStepper>
   )
}

const ContainerStepper = styled('div')`
   display: flex;
   justify-content: space-between;
`
