import React from 'react'
import { styled } from '@mui/material'
import { Attribute } from './Attribute'

export const InfoPagesContainer = () => {
   return (
      <Container>
         <Attribute />
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   background-color: #fff;
`
