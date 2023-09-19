import React from 'react'
import { styled } from '@mui/material'
import { InfoProductId } from './productIdInfo/InfoProductId'
import { PhoneContainer } from './productIdDetail/PhoneContainer'
import { ViewedProducts } from '../UserUI/uiCart/ViewedProducts'

export const ContainerProductId = () => {
   return (
      <Container>
         <PhoneContainer />
         <InfoProductId />
         <ViewedProducts />
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
