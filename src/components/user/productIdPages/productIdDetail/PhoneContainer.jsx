import React from 'react'
import { styled } from '@mui/material'
import { TemprovPages } from '../TemprovPages'

export const PhoneContainer = () => {
   return (
      <Container>
         <TemprovPages />
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
