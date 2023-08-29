import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendSelectedCategories } from '../../../store/cataog/categoryThunk'
import { CardPhone } from '../card/CardPhone'
import { ProductCard } from '../product.card/ProductCard'

export const Products = () => {
   const { filteredProducts, isLoading, brandsId, items, pageSize } =
      useSelector((state) => state.category)
   const dispatch = useDispatch()

   useEffect(() => {
      const dataCategory = {
         id: brandsId,
         pageSize,
         pageNumber: 1,
      }
      dispatch(sendSelectedCategories(dataCategory))
   }, [items])

   return (
      <Container>
         {filteredProducts?.map((product) =>
            isLoading ? (
               <CardStyled key={product.id} />
            ) : (
               <ProductCardStyled
                  key={product.id}
                  prodName={product.name}
                  {...product}
               />
            )
         )}
      </Container>
   )
}

const ProductCardStyled = styled(ProductCard)`
   width: 14.53125vw;
`

const CardStyled = styled(CardPhone)`
   width: 14.53125vw;
`

const Container = styled('div')`
   width: 59.375vw;
   display: flex;
   flex-wrap: wrap;
   gap: 0.417vw;
`
