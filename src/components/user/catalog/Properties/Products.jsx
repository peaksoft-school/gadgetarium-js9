import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sendSelectedCategories } from '../../../../store/cataog/categoryThunk'
import { CardPhone } from '../../card/CardPhone'
import { ProductCard } from '../../product.card/ProductCard'

export const Products = () => {
   const {
      filteredProducts,
      isLoading,
      brandsId,
      items,
      pageSize,
      minValue,
      maxValue,
      memory,
      memoryRam,
      simPhoneArray,
      processorArray,
      screenArray,
      videoMemoryArray,
      puprosesArray,
      screenSizeArray,
      itemsColorsId,
      iunterfacesArray,
      shapesArray,
      materialBraceletsArray,
      materialHousingArray,
      floorArray,
      waterProofArray,
      displayDiagonalArray,
      interfacesArray,
      tabletBatteryCapacityArray,
   } = useSelector((state) => state.category)

   const category = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      const dataCategory = {
         id: brandsId,
         pageSize,
         pageNumber: 1,
         gadgetType: Object.values(category),
         minValue,
         maxValue,
         memory,
         memoryRam,
         simPhoneArray,
         processorArray,
         screenArray,
         puprosesArray,
         screenSizeArray,
         itemsColorsId,
         interfacesArray,
         shapesArray,
         materialBraceletsArray,
         materialHousingArray,
         floorArray,
         waterProofArray,
         displayDiagonalArray,
         videoMemoryArray,
         tabletBatteryCapacityArray,
      }
      dispatch(sendSelectedCategories(dataCategory))
   }, [
      items,
      category,
      minValue,
      maxValue,
      memory,
      pageSize,
      memoryRam,
      simPhoneArray,
      processorArray,
      screenArray,
      puprosesArray,
      screenSizeArray,
      itemsColorsId,
      iunterfacesArray,
      shapesArray,
      materialBraceletsArray,
      materialHousingArray,
      floorArray,
      waterProofArray,
      displayDiagonalArray,
      interfacesArray,
      videoMemoryArray,
      tabletBatteryCapacityArray,
   ])

   return (
      <Container>
         {filteredProducts?.map((product) => {
            return isLoading ? (
               <CardStyled key={product.id} />
            ) : (
               <ProductCardStyled
                  key={product.id}
                  prodName={product.name}
                  {...product}
               />
            )
         })}
         {filteredProducts.length === 0 && (
            <Warnings>
               Извините, на данный момент товаров нет в наличии. Мы работаем над
               обновлением ассортимента. Загляните позже!
            </Warnings>
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
   gap: 0.417vw;
   display: flex;
   width: 59.375vw;
   flex-wrap: wrap;
`
const Warnings = styled('h2')`
   width: 42vw;
   margin: 0 auto;
   margin-top: 150px;
   text-align: center;
`
