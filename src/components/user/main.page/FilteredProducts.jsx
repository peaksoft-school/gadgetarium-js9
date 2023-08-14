import { styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStock } from '../../../store/main.page/main.page.thunk'
import { ProductCard } from '../product.card/ProductCard'
import { Button } from '../../UI/Button'

export const FilteredProducts = ({ children, path }) => {
   const { stock } = useSelector((state) => state.mainPage)
   console.log(stock)
   const dispatch = useDispatch()
   console.log(path)
   useEffect(() => {
      dispatch(getStock())
   }, [])
   return (
      <Container>
         <Title>{children}</Title>
         <Products>
            {stock?.map((el) => {
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
         </Products>
         <ButtonContainer>
            <Button
               padding="0.78240740vh 4.983073vw"
               variant="outlined"
               backgroundHover="#CB11AB"
               backgroundActive="#E313BF"
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
   margin-top: 3.7037038vh;
`
const Title = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.5625vw;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
   margin-bottom: 3.7037038vh;
`
const Products = styled('div')`
   display: flex;
   gap: 0.416666vw;
`
