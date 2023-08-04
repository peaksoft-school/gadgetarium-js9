import { styled } from '@mui/material'
import React from 'react'

export const BackgroundInForm = ({ children }) => {
   return (
      <Container>
         <Title>
            <Block>
               <h1>G</h1>
               <h2>adgetarium</h2>
            </Block>
         </Title>
         {children}
      </Container>
   )
}

const Container = styled('div')`
   background: linear-gradient(135deg, #6b0fa9, #4d0eb8);
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Title = styled('div')`
   display: flex;
   width: 90%;
   margin-right: 5rem;
`

const Block = styled('div')`
   display: flex;
   h1 {
      color: #fff;
      font-size: 2.78763rem;
      padding: 0 8px 0 8px;
      background-color: #cb11ab;
      font-family: 'Outfit';
   }
   h2 {
      color: #fff;
      font-size: 2.47788rem;
      font-family: 'Orbitron';
   }
`
