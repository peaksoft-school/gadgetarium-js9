import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Rating, styled } from '@mui/material'
import { ReactComponent as Comparison } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Favourite } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Recommendation } from '../../../assets/icons/recommendation.svg'
import { ReactComponent as FilledFavoriteIcon } from '../../../assets/icons/filled-favorite-icon.svg'
import { Button } from '../../UI/Button'
import {
   getFavoriteItems,
   postFavoriteItem,
} from '../../../store/favorite/favorite.thunk'
import { postBasketById } from '../../../store/basket/basket.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'
import {
   getNovelities,
   getRecommend,
   getStock,
} from '../../../store/main.page/main.page.thunk'
import { AuthorizationModal } from '../AuthorizationModal'

export const ProductCard = ({
   recomendationState = false,
   newState = false,
   price = 100000,
   image = 'https://www.myphone.kg/files/media/17/17378.webp',
   prodName = 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RU00RE)',
   quantity = 12,
   rating = 1,
   discount = 20,
   countOfReviews = 56,
   favoriteState,
   comparisonState,
   noveltiesPageSize,
   recommendPageSize,
   stockPageSize,
   id = '1',
}) => {
   const { snackbarHandler } = useSnackbar()
   const { isAuthorization } = useSelector((state) => state.auth)

   const [openModal, setOpenModal] = useState(false)
   const dispatch = useDispatch()
   const discountPrice = price - (price * discount) / 100
   const toggleFavoriteHandler = async () => {
      if (isAuthorization) {
         dispatch(postFavoriteItem(id))
            .unwrap()
            .then(() => {
               dispatch(getNovelities({ page: 1, pageSize: noveltiesPageSize }))
               dispatch(getRecommend({ page: 1, pageSize: recommendPageSize }))
               dispatch(getStock({ page: 1, pageSize: stockPageSize }))
               dispatch(getFavoriteItems())
               if (favoriteState) {
                  snackbarHandler({
                     message: 'Товар удален из избранных',
                  })
               } else {
                  snackbarHandler({
                     message: 'Товар добавлен в избранные',
                     linkText: 'Перейти в избранное ',
                     path: '/favorite',
                  })
               }
            })
            .catch((error) => {
               console.error('Error dispatching postFavoriteItem:', error)
               snackbarHandler({ message: error.message, type: 'error' })
            })
      } else {
         setOpenModal(!openModal)
      }
   }

   const toggleComparisonHandler = () => {
      // dispatch(postCompareProduct({ id, addOrDelete: !comparisonState }))
      //    .unwrap()
      //    .then(() => {
      //       dispatch(getNovelities({ page: 1, pageSize: noveltiesPageSize }))
      //       dispatch(getRecommend({ page: 1, pageSize: recommendPageSize }))
      //       dispatch(getStock({ page: 1, pageSize: stockPageSize }))
      //       dispatch(getCompare())
      //       if (comparisonState) {
      //          snackbarHandler({
      //             message: 'Товар удален из сравнения',
      //          })
      //       } else {
      //          snackbarHandler({
      //             message: 'Товар добавлен в сравнения',
      //             linkText: 'Перейти в избранное ',
      //             path: '/favorite',
      //          })
      //       }
      //    })
   }
   const cardHandler = (id) => {
      console.log(id)
   }
   const postProductToBasket = async () => {
      if (isAuthorization) {
         dispatch(postBasketById(id))
            .unwrap()
            .then(() => {
               snackbarHandler({
                  message: 'Товар успешно добавлен в корзину',
                  linkText: 'Перейти в корзину',
                  path: '/basket',
               })
            })
            .catch(() => {
               snackbarHandler({
                  message: 'Товар не добавлен в корзину',
                  type: 'error',
               })
            })
      } else {
         setOpenModal(!openModal)
      }
   }
   const toggleHandler = () => {
      setOpenModal(!openModal)
   }
   return (
      <Card onClick={() => cardHandler(id)}>
         {openModal && (
            <AuthorizationModal
               openModal={openModal}
               toggleHandler={toggleHandler}
            />
         )}

         <ButtonContainer>
            <CircleContainer>
               {discount === 0 &&
                  newState === false &&
                  recomendationState === false && <MarginDiv />}
               {recomendationState && (
                  <Circle>
                     <StyledRecommendation />
                  </Circle>
               )}
               {newState && <CircleThree>New</CircleThree>}
               {discount !== 0 && <CircleTwo>-{discount}%</CircleTwo>}
            </CircleContainer>

            <IconContainer>
               <StyledComparison
                  comparison={comparisonState ? 'true' : 'false'}
                  onClick={toggleComparisonHandler}
               />
               {favoriteState ? (
                  <StyledFilledFavoriteIcon onClick={toggleFavoriteHandler} />
               ) : (
                  <StyledFavourite onClick={toggleFavoriteHandler} />
               )}
            </IconContainer>
         </ButtonContainer>
         <Image src={image} />
         <Container>
            <InStock>В наличии ({quantity})</InStock>
            <Title>
               {prodName.length > 45 ? `${prodName.slice(0, 45)}...` : prodName}
            </Title>
            <RatingContainer>
               Рейтинг <StyledRating readOnly value={rating} precision={0.5} />(
               {countOfReviews})
            </RatingContainer>
            <ButtonContainerTwo>
               <PriceContainer discount={discount}>
                  {discount !== 0 ? (
                     <>
                        <DiscountPrice>
                           {Math.floor(discountPrice).toLocaleString()}
                           <span>c</span>
                        </DiscountPrice>
                        <Price>{price.toLocaleString()} c</Price>
                     </>
                  ) : (
                     <DiscountPrice>
                        {price.toLocaleString()} <span>c</span>
                     </DiscountPrice>
                  )}
               </PriceContainer>
               <Button
                  padding="1.1111vh 0.99vw"
                  variant="contained"
                  textTransform="uppercase"
                  fontSize="0.73vw"
                  onClick={postProductToBasket}
               >
                  <StyledBasketIcon /> В корзину
               </Button>
            </ButtonContainerTwo>
         </Container>
      </Card>
   )
}
const MarginDiv = styled('div')`
   width: 2.25rem;
   height: 2.25rem;
`
const StyledBasketIcon = styled(BasketIcon)`
   width: 1.25vw;
   height: 1.25vw;
`
const StyledFilledFavoriteIcon = styled(FilledFavoriteIcon)`
   width: 1.25vw;
   height: 1.25vw;
   cursor: pointer;
`
const Card = styled('div')`
   background-color: white;
   user-select: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 15.625vw;
   border-radius: 0.25rem;
   padding: 0.52081vw;
   :hover {
      transition: box-shadow 0.2s ease-in-out;
      cursor: pointer;
      box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.1),
         0px -8px 25px 0px rgba(0, 0, 0, 0.1);
   }
   background: white;
`
const RatingContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.3vw;
   color: #909cb5;
   font-family: Inter;
   font-size: 0.62vw;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
`
const CircleContainer = styled('div')`
   display: flex;
   gap: 0.25rem;
`
const ButtonContainerTwo = styled('div')`
   display: flex;
   width: 100%;
   justify-content: space-between;
   margin-top: 0.7407vh;
   margin-bottom: 1.1111vh;
`
const PriceContainer = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: ${(props) => (props.discount === 0 ? 'center' : 'flex-end')};
`
const StyledRating = styled(Rating)`
   && .MuiSvgIcon-root {
      font-size: 0.7818vw;
   }
`
const Price = styled('p')`
   font-family: Inter;
   color: #909cb5;
   font-style: normal;
   font-size: 0.83vw;
   font-weight: 400;
   line-height: 135.938%;
   margin: 0;
   text-decoration: 0.08rem line-through;
   margin-right: 0.5px;
`
const StyledRecommendation = styled(Recommendation)`
   width: 0.781vw;
   height: 1.4815vh;
`
const DiscountPrice = styled('p')`
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 700;
   line-height: 130%;
   font-family: Inter;
   margin: 0;
   span {
      text-decoration: underline;
   }
`
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   width: 13.542vw;
   gap: 0.8vh;
   margin-top: 2.5926vh;
`
const Title = styled('p')`
   font-family: Inter;
   font-size: 0.833vw;
   font-style: normal;
   font-weight: 500;
   line-height: 140.023%;
   text-transform: capitalize;
   margin: 0;
`
const InStock = styled('p')`
   color: #2fc509;
   font-family: Inter;
   font-size: 0.62vw;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   margin: 0;
`
const Image = styled('img')`
   margin-top: 1.1111vh;
   width: 9.375vw;
   height: 21.852vh;
   object-fit: contain;
`
const Circle = styled('div')`
   width: 1.891vw;
   height: 1.891vw;
   border: 100%;
   background-color: #2c68f5;
   border-radius: 100%;
   color: white;
   opacity: 0.8;
   font-family: Inter;
   font-size: 0.6vw;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   display: flex;
   align-items: center;
   justify-content: center;
`
const CircleTwo = styled('div')`
   width: 1.891vw;
   height: 1.891vw;
   border: 100%;
   background-color: #f10000;
   border-radius: 100%;
   color: white;
   opacity: 0.8;
   font-family: Inter;
   font-size: 0.6vw;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   display: flex;
   align-items: center;
   justify-content: center;
`
const CircleThree = styled('div')`
   width: 1.891vw;
   height: 1.891vw;
   border: 100%;
   background-color: #2fc509;
   border-radius: 100%;
   color: white;
   opacity: 0.8;
   font-family: Inter;
   font-size: 0.6vw;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   display: flex;
   align-items: center;
   justify-content: center;
`
const IconContainer = styled('div')`
   display: flex;
   gap: 0.6vw;
   margin-right: 0.2084vw;
`
const ButtonContainer = styled('div')`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: space-between;
`
const StyledComparison = styled(Comparison)`
   width: 1.25vw;
   height: 1.25vw;
   cursor: pointer;
   path {
      fill: ${(props) => (props.comparison === 'true' ? '#cb11ab' : '#91969e')};
   }
`
const StyledFavourite = styled(Favourite)`
   width: 1.25vw;
   height: 1.25vw;
   cursor: pointer;
   path {
      stroke: #91969e;
   }
`
