import styled from '@emotion/styled'
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
         <h1>{brandName}</h1>
         <ConatinerChilde>
            <PopUpMain />
            <PhoneDeital />
         </ConatinerChilde>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 5rem;
   h1 {
      color: blue;
   }
`

const ConatinerChilde = styled('div')`
   width: 79vw;
   border-top: 1px solid #cdcdcd;

   display: flex;
   justify-content: space-between;
   align-items: center;
`
