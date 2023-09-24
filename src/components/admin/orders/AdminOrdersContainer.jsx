import React from 'react'
import { styled } from '@mui/material'
import { AdminOrders } from './adminOrders'
// import { PaymentPage } from '../paymant/PaymentPage'

export const AdminOrdersContainer = () => {
   return (
      <Container>
         <AdminOrders />
         {/* <PaymentPage /> */}
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 2.5rem;
`
