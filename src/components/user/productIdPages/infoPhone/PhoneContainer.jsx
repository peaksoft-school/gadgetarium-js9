import React from 'react'
import { styled } from '@mui/material'
import { PhonePage } from './PhonePage'
import { Attribute } from '../informationPage/Attribute'

export const PhoneContainer = () => {
   return (
      <Container>
         <PhonePage />
         <Attribute />
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
