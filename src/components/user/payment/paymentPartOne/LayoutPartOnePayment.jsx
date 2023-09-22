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
      <>
         <ContainerStepper>
            <StepPayment page={page} />

            <ContainerMiniBasket>
               <MiniBasketOrderPrice />
            </ContainerMiniBasket>
         </ContainerStepper>

         <div>
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
      </>
   )
}

const ContainerMiniBasket = styled('div')`
   position: relative;
`

const ContainerStepper = styled('div')`
   display: flex;
   width: 100%;
   gap: 8vw;
`
