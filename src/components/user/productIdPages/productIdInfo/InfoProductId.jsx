import React from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { Attribute } from './Attribute'

export const InfoProductId = () => {
   const { role } = useSelector((state) => state.auth)

   return (
      <Container>
         <WidthContainer roleadmin={role}>
            <Attribute />
         </WidthContainer>
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   background-color: #fff;
`
const WidthContainer = styled('div')`
   width: ${(props) => (props.roleadmin === 'ADMIN' ? '89.583vw' : '79.888vw')};
`
