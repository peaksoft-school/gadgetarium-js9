import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SecondProductCard } from './SecondProductCard'
import { getRecentlyViewedProduct } from '../../../../store/informationPhone/infoPageThunk'

export const ViewedProducts = () => {
   const dispatch = useDispatch()

   const productViewed = useSelector((state) => state.product.viewedProduct)

   useEffect(() => {
      dispatch(getRecentlyViewedProduct())
   }, [])
   return (
      <Container>
         <ViewedTitle>Просмотренные товары</ViewedTitle>
         <ProductCard>
            {productViewed.map((el) => (
               <SecondProductCard key={el} el={el} />
            ))}
         </ProductCard>
      </Container>
   )
}

const Container = styled('div')`
   width: 79.888vw;
   height: 41.69rem;
`
const ViewedTitle = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-weight: 500;
   margin-top: 7rem;
`

const ProductCard = styled('div')`
   display: flex;
   gap: 1rem;
`
