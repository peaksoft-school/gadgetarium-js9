import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   getNovelities,
   getRecommend,
   getStock,
} from '../../../store/main.page/main.page.thunk'
import { ProductCard } from '../product.card/ProductCard'
import { Button } from '../../UI/Button'
import { CardPhone } from '../card/CardPhone'

const arrayForSkeleton = [
   { id: 1, name: 'firstCard' },
   { id: 2, name: 'secondCard' },
   { id: 3, name: 'thirdCard' },
   { id: 4, name: 'fourthCard' },
   { id: 5, name: 'fifthCard' },
]

export const FilteredProducts = ({ children, array }) => {
   const { stock, novelties, recommend, isLoading } = useSelector(
      (state) => state.mainPage
   )
   const [pageSize, setPageSize] = useState(5)
   const [visibleProducts, setVisibleProducts] = useState([])
   const dispatch = useDispatch()

   useEffect(() => {
      let action
      switch (array) {
         case 'novelties':
            action = getNovelities
            break
         case 'recommend':
            action = getRecommend
            break
         default:
            action = getStock
      }
      dispatch(action({ page: 1, pageSize: 100 }))
   }, [])

   useEffect(() => {
      let visible
      if (array === 'stock') {
         visible = stock
      }
      if (array === 'novelties') {
         visible = novelties
      }
      if (array === 'recommend') {
         visible = recommend
      }
      setVisibleProducts(visible.slice(0, pageSize))
   }, [stock, novelties, recommend, pageSize, array])

   const renderProductCards = (productArray) => {
      return productArray?.map((el, index) => {
         if (index > pageSize - 1) {
            return null
         }
         return (
            <ProductCard
               id={el.subProductId}
               productId={el.productId}
               key={el.subProductId}
               discount={el.discount}
               prodName={el.prodName}
               image={el.image}
               quantity={el.quantity}
               countOfReviews={el.countOfReviews}
               price={el.price}
               rating={el.rating}
               favoriteState={el.favorite}
               comparisonState={el.comparison}
               pageSize={pageSize}
               color={el.color}
               basketState={el.inBasket}
               newState={array === 'novelties'}
               recomendationState={array === 'recommend'}
            />
         )
      })
   }

   const renderNoGoods = (productArray) => {
      if (!isLoading && productArray.length === 0) {
         return <NoGoods>Здесь нет товаров</NoGoods>
      }
      return null
   }
   const updatePageSize = (action) => {
      if (action === 'increase') {
         setPageSize(pageSize + 5)
      } else if (action === 'decrease') {
         setPageSize(pageSize - 5)
      }
   }

   const showMoreHandler = () => {
      updatePageSize('increase')
   }

   const hideHandler = () => {
      updatePageSize('decrease')
   }

   const renderButton = () => {
      if (visibleProducts.length < 5) {
         return null
      }
      const showMore =
         visibleProducts.length >= 5 && visibleProducts.length >= pageSize

      return (
         <>
            {showMore && (
               <Button
                  padding="0.78240740vh 4.983073vw"
                  variant="outlined"
                  backgroundhover="#CB11AB"
                  backgroundactive="#E313BF"
                  onClick={showMoreHandler}
               >
                  Показать ещё
               </Button>
            )}

            {pageSize > 5 && (
               <Button
                  padding="0.78240740vh 4.983073vw"
                  variant="outlined"
                  backgroundhover="#CB11AB"
                  backgroundactive="#E313BF"
                  onClick={hideHandler}
               >
                  Скрыть
               </Button>
            )}
         </>
      )
   }

   return (
      <Container>
         <Title>{children}</Title>
         <Products>
            {!isLoading && renderProductCards(visibleProducts)}
            {renderNoGoods(visibleProducts)}
            {isLoading &&
               arrayForSkeleton.map((el) => <CardPhone key={el.id} />)}
         </Products>
         <ButtonContainer>{renderButton()}</ButtonContainer>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 11.111111vh;
`
const ButtonContainer = styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
   gap: 1rem;
   margin-top: 2.5rem;
`
const NoGoods = styled('p')`
   font-size: 1.354vw;
`
const Title = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.5625vw;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
   margin-bottom: 2.5rem;
`
const Products = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 0.416666vw;
`
