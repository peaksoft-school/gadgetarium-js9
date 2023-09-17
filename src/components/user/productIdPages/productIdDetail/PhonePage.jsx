import React, { useEffect } from 'react'
import { styled } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { PopUpMain } from '../../UserUI/PopUp/PopUpMain'
import { PhoneDeital } from './PhoneDeital'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'

export const PhonePage = () => {
   const { infoPhone, subProductColor } = useSelector((state) => state.product)
   const { productId } = useParams()
   const dispatch = useDispatch()

   const role = 'USER'

   useEffect(() => {
      dispatch(getInfoPage({ productId, colour: subProductColor }))
   }, [])

   return (
      <Container>
         <BrandName>{infoPhone?.brandName}</BrandName>
         {role === 'ADMIN' && (
            <BlockTab>
               <NavLinkStyle>Товар</NavLinkStyle>
               <NavLinkStyle>Детали товара</NavLinkStyle>
            </BlockTab>
         )}
         <ConatinerChilde>
            <PopUpMain />
            <PhoneDeital />
         </ConatinerChilde>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 1rem;
   margin-bottom: 7.5rem;
`

const BrandName = styled('h1')`
   color: blue;
   font-family: Orbitron;
   padding-bottom: 20px;
   border-bottom: 1px solid #cdcdcd;
`
const ConatinerChilde = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 79.888vw;
`
const BlockTab = styled('div')`
   display: flex;
   gap: 12px;
`
const NavLinkStyle = styled(NavLink)`
   padding: 8px 20px 9px 20px;
   cursor: pointer;
   text-decoration: none;
   color: #384255;
   border-radius: 4px;
   background-color: #e0e2e7;

   &:hover {
      color: #fff;
      border-radius: 4px;
      background: #384255;
   }
`
