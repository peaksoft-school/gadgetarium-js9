import React from 'react'
import { styled } from '@mui/material'
import { AdminOrders } from './adminOrders'

export const AdminOrdersContainer = () => {
   return (
      <Container>
         <AdminOrders />
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: flex-start;

   margin-top: 2.5rem;
`
