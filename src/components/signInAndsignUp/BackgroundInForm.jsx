import { styled } from '@mui/material'
import React from 'react'
import { ReactComponent } from '../../assets/icons/headerIcons/Letter.svg'
import { ReactComponent as ReactComponentIcons } from '../../assets/icons/headerIcons/Background.svg'

export const BackgroundInForm = ({ children }) => {
   return (
      <Container>
         <Title>
            <BackgroundIcons />
            <GIcons />
            <h1>adgetarium</h1>
         </Title>
         {children}
      </Container>
   )
}

const Container = styled('div')`
   background: linear-gradient(135deg, #6b0fa9, #4d0eb8);
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`
const GIcons = styled(ReactComponent)`
   margin-top: 1.4375rem;
   margin-left: -1.75rem;
`
const BackgroundIcons = styled(ReactComponentIcons)`
   margin-top: 1rem;
`
const Title = styled('div')`
   display: flex;
   position: absolute;
   top: 1.5rem;
   left: 3.12rem;
   h1 {
      margin-top: 1rem;
      margin-left: 0.3rem;
      color: #fff;
   }
`
