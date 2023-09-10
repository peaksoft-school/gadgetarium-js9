import React from 'react'
import { styled } from '@mui/material'
import { ViewedProducts } from './ViewedProducts'

export const ViewedContainer = () => {
   return (
      <Container>
         <ViewedProducts />
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: center;
   width: 100%;
   height: 50vh;
`
