import React from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { InfoProductId } from './productIdInfo/InfoProductId'
import { PhoneContainer } from './productIdDetail/PhoneContainer'
import { ViewedProducts } from '../UserUI/uiCart/ViewedProducts'
import { Loading } from '../../UI/loading/Loading'

export const ContainerProductId = () => {
   const { role } = useSelector((state) => state.auth)
   const { isLoading } = useSelector((state) => state.product)
   console.log('isLoading: ', isLoading)
   return (
      <Container>
         {isLoading && <Loading />}
         <PhoneContainer />
         <InfoProductId />
         {role === 'USER' && <ViewedProducts />}
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
