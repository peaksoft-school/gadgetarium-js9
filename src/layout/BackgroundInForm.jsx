import { styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomToast } from '../components/UI/snackbar/CustomToast'
import { routes } from '../utils/common/constants/routesConstants'

export const BackgroundInForm = ({ children }) => {
   const navigate = useNavigate()

   const backToHomePage = () => {
      navigate(routes.USER.index)
   }
   return (
      <>
         <Container>
            <Letter>
               <Title onClick={backToHomePage}>
                  <GadgeteriumContainer>
                     <GIcons>G</GIcons>
                  </GadgeteriumContainer>
                  <AdgetariumTitle>adgetarium</AdgetariumTitle>
               </Title>
            </Letter>
            <ChildrenContainer>{children}</ChildrenContainer>
         </Container>
         <CustomToast />
      </>
   )
}

const Container = styled('div')`
   background: linear-gradient(135deg, #6b0fa9, #4d0eb8);
   height: 100vh;
   display: flex;
   flex-direction: column;
`

const Title = styled('div')`
   display: flex;
   align-items: center;
   cursor: pointer;
`
const ChildrenContainer = styled('div')`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
const AdgetariumTitle = styled('p')`
   font-size: 1.7806rem;
   color: #ffffff;
   font-family: Orbitron;
   margin-left: 0.1563rem;
`
const Letter = styled('div')`
   display: flex;
   width: 20vw;
   justify-content: center;
`

const GadgeteriumContainer = styled('div')`
   width: 2.1875rem;
   height: 2.1875rem;
   display: flex;
   background-color: #cb11ab;
   align-items: center;
   justify-content: center;
`
const GIcons = styled('p')`
   color: #fff;
   font-family: Outfit;
   font-size: 2.0033rem;
   font-style: normal;
   font-weight: 700;
`
