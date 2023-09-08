import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopUpMain } from '../../UserUI/PopUp/PopUpMain'
import { PhoneDeital } from './PhoneDeital'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'

export const PhonePage = () => {
   const { brandName } = useSelector((state) => state.phone.infoPhone)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getInfoPage())
   }, [])
   return (
      <Container>
         <BrandName>{brandName}</BrandName>
         <ConatinerChilde>
            <PopUpMain />
            <PhoneDeital />
         </ConatinerChilde>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 1rem;
`

const BrandName = styled('h1')`
   color: blue;
   font-family: Orbitron;
`
const ConatinerChilde = styled('div')`
   display: flex;
   justify-content: space-between;

   width: 79.688vw;
   border-top: 1px solid #cdcdcd;
`
