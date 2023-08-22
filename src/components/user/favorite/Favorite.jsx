import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { getFavoriteItems } from '../../../store/favorite/favorite.thunk'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/cross/small-cross-icon.svg'
import { ProductCard } from '../product.card/ProductCard'

export const Favorite = () => {
   const dispatch = useDispatch()
   const { favoriteItems } = useSelector((state) => state.favorite)
   useEffect(() => {
      console.log('el')
      dispatch(getFavoriteItems())
   }, [])
   return (
      <>
         {/* {isLoading && <Loading />} */}
         <Container>
            <SecondContainer>
               <Title>Избранное</Title>
               <CleanButton>
                  <StyledDeleteIcon />
                  Очистить список товаров
               </CleanButton>
               <Products>
                  {favoriteItems?.map((el) => {
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
            </SecondContainer>
         </Container>
      </>
   )
}
const Title = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 30px;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
   margin-top: 30px;
   margin-bottom: 40px;
   padding-bottom: 20px;
   border-bottom: 1px solid #cdcdcd;
`
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const SecondContainer = styled('div')`
   width: 79.688vw;
`
const CleanButton = styled('button')`
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
   border: none;
   padding: 0;
   cursor: pointer;
   background: none;
   margin-bottom: 30px;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   width: 9px;
   height: 9px;
   path {
      fill: #292929;
   }
   margin-right: 6px;
`
const Products = styled('div')``
