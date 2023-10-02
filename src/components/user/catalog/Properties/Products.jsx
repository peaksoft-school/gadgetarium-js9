import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sendSelectedCategories } from '../../../../store/cataog/categoryThunk'
import { CardPhone } from '../../card/CardPhone'
import sammyShopping from '../../../../assets/images/sammy-shopping.png'
import { ProductCard } from '../../product.card/ProductCard'
// import { categoryActions } from '../../../../store/cataog/catalogSlice'

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
      waterProofString,
      displayDiagonalArray,
      interfacesArray,
      tabletBatteryCapacityArray,
      sort,
      subCategoriesId,
   } = useSelector((state) => state.category)

   const category = useParams()
   const dispatch = useDispatch()

   const filterProducts = filteredProducts?.responseList
   const sendSelectedCategoriesHandler = () => {
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
         waterProofString,
         displayDiagonalArray,
         videoMemoryArray,
         tabletBatteryCapacityArray,
         sort,
         subCategoriesId,
      }
      dispatch(sendSelectedCategories(dataCategory))
   }

   useEffect(() => {
      sendSelectedCategoriesHandler()
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
      waterProofString,
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
                  id={product.subProductId}
                  comparisonState={product.comparison}
                  basketState={product.basket}
                  favoriteState={product.favorite}
                  sendSelectedCategoriesHandler={sendSelectedCategoriesHandler}
                  {...product}
               />
            )
         })}
         {filterProducts?.length === 0 && (
            <div className="Warning">
               <Image src={sammyShopping} alt="Basket" />
               <Warnings>
                  Извините, на данный момент товаров нет в наличии. Мы работаем
                  над обновлением ассортимента. Загляните позже!
               </Warnings>
            </div>
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
   .Warning {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`
const Warnings = styled('h2')`
   width: 42vw;
   margin: 0 auto;
   text-align: center;
`
const Image = styled('img')`
   width: 30.833vw;
   height: 20.625vw;
   margin-top: 10rem;
   margin-bottom: 2rem;
`
