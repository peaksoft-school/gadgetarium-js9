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
      shapesArray,
      materialBraceletsArray,
      materialHousingArray,
      floorArray,
      waterProofArray,
      displayDiagonalArray,
      interfacesArray,
      tabletBatteryCapacityArray,
      sort,
   } = useSelector((state) => state.category)

   const { subCategoriesId } = useSelector((state) => state.allCategory)
   const category = useParams()
   const dispatch = useDispatch()

   const filterProducts = filteredProducts?.responseList

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
         sort,
         subCategoriesId,
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
      shapesArray,
      materialBraceletsArray,
      materialHousingArray,
      floorArray,
      waterProofArray,
      displayDiagonalArray,
      interfacesArray,
      videoMemoryArray,
      tabletBatteryCapacityArray,
      sort,
      subCategoriesId,
   ])

   return (
      <Container>
         {filterProducts?.map((product) => {
            return isLoading ? (
               <CardStyled key={product.subProductId} />
            ) : (
               <ProductCardStyled
                  key={product.subProductId}
                  prodName={product.name}
                  {...product}
               />
            )
         })}
         {filterProducts?.length === 0 && (
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
