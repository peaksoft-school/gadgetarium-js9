import React from 'react'
import { styled } from '@mui/material'

import { PhonePage } from './PhonePage'

export const PhoneContainer = () => {
   return (
      <Container>
         <PhonePage />
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
