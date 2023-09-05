import styled from '@emotion/styled'
import React from 'react'
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
   justify-content: center;
   align-items: center;
`
