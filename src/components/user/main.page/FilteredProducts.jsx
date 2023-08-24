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
import { Loading } from '../../UI/loading/Loading'

const arrayForSceleton = [
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
   const [stockPageSize, setStockPageSize] = useState(5)
   const [noveltiesPageSize, setNoveltiesPageSize] = useState(5)
   const [recommendPageSize, setRecommendPageSize] = useState(5)

   const dispatch = useDispatch()

   const showMoreHandler = () => {
      switch (array) {
         case 'novelties':
            setNoveltiesPageSize(noveltiesPageSize + 5)
            dispatch(getNovelities({ page: 1, pageSize: noveltiesPageSize }))
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
         case 'novelties':
            dispatch(getNovelities({ page: 1, pageSize: noveltiesPageSize }))
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
            {isLoading && <Loading />}
            {array === 'stock' &&
               stock.map((el) => (
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
               ))}
            {array === 'stock' && !isLoading && stock.length === 0 && (
               <NoGoods>Здесь нет товаров</NoGoods>
            )}
            {array === 'novelties' && !isLoading && novelties.length === 0 && (
               <NoGoods>Здесь нет товаров</NoGoods>
            )}
            {array === 'recommend' && !isLoading && recommend.length === 0 && (
               <NoGoods>Здесь нет товаров</NoGoods>
            )}
            {array === 'novelties' &&
               novelties.map((el) => (
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
               ))}

            {array === 'recommend' &&
               recommend.map((el) => (
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
               ))}
            {isLoading
               ? arrayForSceleton.map((el) => {
                    return <CardPhone key={el.id} />
                 })
               : null}
         </Products>
         <ButtonContainer>
            {array === 'stock' && stock?.length >= 5 && (
               <Button
                  padding="0.78240740vh 4.983073vw"
                  variant="outlined"
                  backgroundHover="#CB11AB"
                  backgroundActive="#E313BF"
                  onClick={showMoreHandler}
               >
                  Показать ещё
               </Button>
            )}
            {array === 'novelties' && novelties?.length >= 5 && (
               <Button
                  padding="0.78240740vh 4.983073vw"
                  variant="outlined"
                  backgroundHover="#CB11AB"
                  backgroundActive="#E313BF"
                  onClick={showMoreHandler}
               >
                  Показать ещё
               </Button>
            )}
            {array === 'recommend' && recommend?.length >= 5 && (
               <Button
                  padding="0.78240740vh 4.983073vw"
                  variant="outlined"
                  backgroundHover="#CB11AB"
                  backgroundActive="#E313BF"
                  onClick={showMoreHandler}
               >
                  Показать ещё
               </Button>
            )}
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
