import React from 'react'
import { styled } from '@mui/material'
import { PersonalArea } from './PersonalArea'

export const PersonalAreaContainer = () => {
   return (
      <Container>
         <PersonalArea />
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
`
