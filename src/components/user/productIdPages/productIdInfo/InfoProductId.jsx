import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Attribute } from './Attribute'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'

export const InfoProductId = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getInfoPage())
   }, [])

   return (
      <Container>
         <Attribute />
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   background-color: #fff;
`
