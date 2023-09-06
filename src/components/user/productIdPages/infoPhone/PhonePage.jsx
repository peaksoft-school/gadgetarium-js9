import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PopUpMain } from '../../UserUI/PopUp/PopUpMain'
import { PhoneDeital } from './PhoneDeital'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'
import { PopUpPage } from '../../UserUI/PopUp/PopUpPage'
import { Attribute } from '../informationPage/Attribute'

export const PhonePage = () => {
   const { brandName } = useSelector((state) => state.phone.infoPhone)
   const [open, setOpen] = useState(false)
   const dispatch = useDispatch()

   const openComponent = () => {
      setOpen((prev) => !prev)
   }

   useEffect(() => {
      dispatch(getInfoPage())
   }, [])
   return (
      <Container>
         {open ? (
            <PopUpPage openComponent={openComponent} />
         ) : (
            <>
               <BrandName>{brandName}</BrandName>
               <ConatinerChilde>
                  <PopUpMain openComponent={openComponent} />
                  <PhoneDeital />
               </ConatinerChilde>
               <Attribute />
            </>
         )}
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 5rem;
`

const BrandName = styled('h1')`
   color: blue;
`
const ConatinerChilde = styled('div')`
   display: flex;
   justify-content: space-between;

   width: 79.688vw;
   border-top: 1px solid #cdcdcd;
`
