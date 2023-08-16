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
// import { Loading } from '../../UI/loading/Loading'

const arrayForSceleton = [
   { id: 1, name: 'firstCard' },
   { id: 1, name: 'secondCard' },
   { id: 1, name: 'thirdCard' },
   { id: 1, name: 'fourthCard' },
   { id: 1, name: 'fifthCard' },
]

export const FilteredProducts = ({ children, array }) => {
   const { stock, novelties, recommend, isLoading } = useSelector(
      (state) => state.mainPage
   )
   const [stockPageSize, setStockPageSize] = useState(5)
   const [novelitiesPageSize, setNovelitiesPageSize] = useState(5)
   const [recommendPageSize, setRecommendPageSize] = useState(5)

   const dispatch = useDispatch()

   const showMoreHandler = () => {
      switch (array) {
         case 'novelities':
            setNovelitiesPageSize(novelitiesPageSize + 5)
            dispatch(getNovelities({ page: 1, pageSize: novelitiesPageSize }))
            break
         case 'recommend':
            setRecommendPageSize(recommendPageSize + 5)
            dispatch(getRecommend({ page: 1, pageSize: recommendPageSize }))
            break
         default:
            setStockPageSize(stockPageSize + 5)
            dispatch(getStock({ page: 1, pageSize: stockPageSize }))
      }
   }
   useEffect(() => {
      switch (array) {
         case 'novelities':
            dispatch(getNovelities({ page: 1, pageSize: novelitiesPageSize }))
            break
         case 'recommend':
            dispatch(getRecommend({ page: 1, pageSize: recommendPageSize }))
            break
         default:
            dispatch(getStock({ page: 1, pageSize: stockPageSize }))
      }
   }, [])
   return (
      <Container>
         <Title>{children}</Title>
         <Products>
            {/* {isLoading && <Loading />} */}
            {array === 'stock' &&
               stock?.map((el) => {
                  return (
                     <ProductCard
                        id={el.subProductId}
                        key={el.subProductId}
                        discount={el.discount}
                        prodName={el.prodName}
                        image={el.image}
                        quantity={el.quantity}
                        countOfReviews={el.countOfReviews}
                        price={el.price}
                        rating={el.rating}
                     />
                  )
               })}
            {array === 'novelities' &&
               novelties?.map((el) => {
                  return (
                     <ProductCard
                        newState
                        id={el.subProductId}
                        key={el.subProductId}
                        discount={el.discount}
                        prodName={el.prodName}
                        image={el.image}
                        quantity={el.quantity}
                        countOfReviews={el.countOfReviews}
                        price={el.price}
                        rating={el.rating}
                     />
                  )
               })}
            {array === 'recommend' &&
               recommend?.map((el) => {
                  return (
                     <ProductCard
                        recomendationState
                        id={el.subProductId}
                        key={el.subProductId}
                        discount={el.discount}
                        prodName={el.prodName}
                        image={el.image}
                        quantity={el.quantity}
                        countOfReviews={el.countOfReviews}
                        price={el.price}
                        rating={el.rating}
                     />
                  )
               })}
            {isLoading
               ? arrayForSceleton.map((el) => {
                    return <CardPhone key={el.id} />
                 })
               : null}
         </Products>
         <ButtonContainer>
            <Button
               padding="0.78240740vh 4.983073vw"
               variant="outlined"
               backgroundHover="#CB11AB"
               backgroundActive="#E313BF"
               onClick={showMoreHandler}
            >
               Показать ещё
            </Button>
         </ButtonContainer>
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
   margin-top: 2.5rem;
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
