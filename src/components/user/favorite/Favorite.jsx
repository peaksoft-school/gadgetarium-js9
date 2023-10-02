import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { deleteFavoriteItems } from '../../../store/favorite/favorite.thunk'
import { ReactComponent as DeleteIcon } from '../../../assets/icons/cross/small-cross-icon.svg'
import favoriteImage from '../../../assets/images/sammy-order-completed-by-a-delivery-girl 1.png'
import { ProductCard } from '../product.card/ProductCard'
import { Button } from '../../UI/Button'
import { CardPhone } from '../card/CardPhone'
import { Loading } from '../../UI/loading/Loading'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'

export const Favorite = React.memo(() => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { favoriteItems, isLoadingFavorite } = useSelector(
      (state) => state.favorite
   )
   const deleteFavoriteItemsHandler = () => {
      dispatch(deleteFavoriteItems())
   }
   const enterPurchases = () => {
      navigate('/')
   }
   const arrayForSceleton = [
      { id: 1, name: 'firstCard' },
      { id: 2, name: 'secondCard' },
      { id: 3, name: 'thirdCard' },
      { id: 4, name: 'fourthCard' },
      { id: 5, name: 'fifthCard' },
   ]
   return (
      <>
         {isLoadingFavorite && <Loading />}
         <Container>
            <SecondContainer>
               <BreadCrumbs
                  breadcrumbs={[
                     { path: '/', label: 'Главная' },
                     { label: 'Избранное' },
                  ]}
               />

               <Title>Избранное</Title>
            </SecondContainer>

            {favoriteItems?.length === 0 ? (
               <VoidContainer>
                  <Image src={favoriteImage} alt="" />
                  <SecondTitle>В избранном пока пусто</SecondTitle>
                  <Paragraph>
                     Воспользуйтесь поиском или каталогом, выберите нужные
                     товары и добавьте их в избранное!
                  </Paragraph>
                  <Button
                     variant="contained"
                     fontSize="1rem"
                     padding="11px 21px"
                     backgroundhover="#E313BF"
                     backgroundactive="#C90EA9"
                     onClick={enterPurchases}
                  >
                     К покупкам
                  </Button>
               </VoidContainer>
            ) : (
               <SecondContainer>
                  <CleanButton onClick={deleteFavoriteItemsHandler}>
                     <StyledDeleteIcon />
                     Очистить список товаров
                  </CleanButton>
                  <Products>
                     {isLoadingFavorite
                        ? arrayForSceleton.map((el) => {
                             return <CardPhone key={el.id} />
                          })
                        : favoriteItems?.map((el) => {
                             return (
                                <ProductCard
                                   favoriteState
                                   basketState={el.basket}
                                   comparisonState={el.comparison}
                                   id={el.subProductId}
                                   key={el.subProductId}
                                   discount={el.discount}
                                   prodName={el.name}
                                   image={el.image}
                                   quantity={el.quantity}
                                   countOfReviews={el.countOfReviews}
                                   price={el.price}
                                   rating={el.rating}
                                   productId={el.productId}
                                />
                             )
                          })}
                  </Products>
                  <ButtonContainer>
                     <Button
                        variant="outlined"
                        backgroundhover="#CB11AB"
                        backgroundactive="#E20FBE"
                        padding="8px 20px"
                        fontSize="1rem"
                        onClick={enterPurchases}
                     >
                        Продолжить покупки
                     </Button>
                  </ButtonContainer>
               </SecondContainer>
            )}
         </Container>
      </>
   )
})
Favorite.displayName = 'Favorite'

const Title = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
   margin-top: 1.875rem;
   margin-bottom: 2.5rem;
   padding-bottom: 1.25rem;
   border-bottom: 0.0625rem solid #cdcdcd;
`

const VoidContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 11.1111vh;
   margin-bottom: 11.1111vh;
`
const Image = styled('img')`
   width: 15.625vw;
   height: 15.625vw;
`
const SecondTitle = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1.25vw;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
   margin-top: 2.7778vh;
   margin-bottom: 1.8519vh;
`
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const ButtonContainer = styled('div')`
   display: flex;
   width: 100%;
   justify-content: center;
   margin-bottom: 11.1111vh;
`
const SecondContainer = styled('div')`
   width: 79.688vw;
`
const CleanButton = styled('button')`
   font-family: Inter;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
   border: none;
   padding: 0;
   cursor: pointer;
   background: none;
   margin-bottom: 1.875rem;
`
const StyledDeleteIcon = styled(DeleteIcon)`
   width: 0.5625rem;
   height: 0.5625rem;
   path {
      fill: #292929;
   }
   margin-right: 0.375rem;
`
const Products = styled('div')`
   width: 79.688vw;
   display: flex;
   flex-wrap: wrap;
   gap: 0.391vw;
   margin-bottom: 2.625rem;
`
const Paragraph = styled('p')`
   text-align: center;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   width: 24.792vw;
   margin: 0;
   margin-bottom: 2.2222vh;
`
