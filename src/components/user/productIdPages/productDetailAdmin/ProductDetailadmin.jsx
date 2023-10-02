import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TablesAdmin } from './TablesDetail'
import { getByIdProductDetail } from '../../../../store/informationPhone/infoPageThunk'

export const ProductDetailIsAdmin = ({ productId }) => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getByIdProductDetail({ productId }))
   }, [])
   return (
      <Container>
         <ContainerChilde>
            <TablesAdmin productId={productId} />
         </ContainerChilde>
      </Container>
   )
}

const Container = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
`
const ContainerChilde = styled('div')`
   width: 89.583vw;
`
