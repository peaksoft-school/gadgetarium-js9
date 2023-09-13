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
            {children}
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
   align-items: center;
`

const Title = styled('div')`
   display: flex;
   align-items: center;
   cursor: pointer;
`
const AdgetariumTitle = styled('p')`
   font-size: 28.49px;
   color: #ffffff;
   font-family: Orbitron;
   margin-left: 0.1563rem;
`
const Letter = styled('div')`
   display: flex;
   top: 1rem;
   right: 40rem;
   align-items: center;
   height: 75.5px;
   width: 79.688vw;
   margin-right: 16px;
`

const GadgeteriumContainer = styled('div')`
   width: 35px;
   height: 35px;
   display: flex;
   background-color: #cb11ab;
   align-items: center;
   justify-content: center;
`
const GIcons = styled('p')`
   color: #fff;
   font-family: Outfit;
   font-size: 32.053px;
   font-style: normal;
   font-weight: 700;
`
