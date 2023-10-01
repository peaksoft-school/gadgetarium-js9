import React from 'react'
import { styled } from '@mui/material'
import { AdminOrders } from './adminOrders'
import { Infographic } from '../infographic/Infographic'

export const AdminOrdersContainer = () => {
   return (
      <Container>
         <WidthContainer>
            <AdminOrders />
            <Infographic />
         </WidthContainer>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.083vw;
   display: flex;
   justify-content: center;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
   display: flex;
   justify-content: space-between;
`
