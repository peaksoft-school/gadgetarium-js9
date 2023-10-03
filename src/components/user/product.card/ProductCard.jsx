import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Rating, styled } from '@mui/material'
import { ReactComponent as Comparison } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Favourite } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Recommendation } from '../../../assets/icons/recommendation.svg'
import { ReactComponent as FilledFavoriteIcon } from '../../../assets/icons/filled-favorite-icon.svg'
import { Button } from '../../UI/Button'
import { postFavoriteItem } from '../../../store/favorite/favorite.thunk'
import { postBasketById } from '../../../store/basket/basket.thunk'
import { AuthorizationModal } from '../AuthorizationModal'
import { postCompareProduct } from '../../../store/compare/compare.thunk'
import { infoPageActions } from '../../../store/informationPhone/infoPageSlice'
import { postRecentlyViewedProduct } from '../../../store/informationPhone/infoPageThunk'

export const ProductCard = ({
   recomendationState = false,
   newState = false,
   price = 100000,
   image = 'https://www.myphone.kg/files/media/17/17378.webp',
   prodName = 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RU00RE)',
   quantity,
   rating = 1,
   discount = 20,
   countOfReviews = 56,
   favoriteState,
   comparisonState,
   basketState,
   pageSize,
   color,
   id = '1',
   productId,
   sendSelectedCategoriesHandler,
   ...props
}) => {
   const { isAuthorization } = useSelector((state) => state.auth)
   const navigate = useNavigate()
   const [openModal, setOpenModal] = useState(false)
   const dispatch = useDispatch()
   const discountPrice = price - (price * discount) / 100
   const toggleFavoriteHandler = async () => {
      if (isAuthorization) {
         dispatch(
            postFavoriteItem({
               id,
               favoriteState,
               pageSize,
               sendSelectedCategoriesHandler,
            })
         )
      } else {
         setOpenModal(!openModal)
      }
   }
   const toggleComparisonHandler = () => {
      if (isAuthorization) {
         dispatch(
            postCompareProduct({
               id,
               addOrDelete: !comparisonState,
               pageSize,
               sendSelectedCategoriesHandler,
            })
         )
      } else {
         setOpenModal(!openModal)
      }
   }
   const cardHandler = () => {
      navigate(`/product/${productId}/details`)
      dispatch(infoPageActions.changeSubProductColor(color))
      dispatch(postRecentlyViewedProduct(id))
   }
   const postProductToBasket = async () => {
      if (isAuthorization) {
         dispatch(
            postBasketById({
               id,
               needSnackbar: true,
               pageSize: 100,
               sendSelectedCategoriesHandler,
            })
         )
      } else {
         setOpenModal(!openModal)
      }
   }
   const toggleHandler = () => {
      setOpenModal(!openModal)
   }
   return (
      <Card {...props}>
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
         <Image src={image} onClick={cardHandler} />
         <Container>
            <InStock>В наличии ({quantity})</InStock>
            <Title>
               {prodName.length > 45 ? `${prodName.slice(0, 20)}...` : prodName}
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
               {quantity === 0 && <Error>Нет в наличии</Error>}
               {basketState && quantity !== 0 && (
                  <StyledButton
                     padding="1.1111vh 0.99vw"
                     variant="contained"
                     texttransform="uppercase"
                     fontSize="0.73vw"
                     onClick={() => navigate('/basket')}
                  >
                     <StyledBasketIcon /> В корзинe
                  </StyledButton>
               )}
               {!basketState && quantity !== 0 && (
                  <Button
                     padding="1.1111vh 0.99vw"
                     variant="contained"
                     texttransform="uppercase"
                     fontSize="0.73vw"
                     onClick={postProductToBasket}
                  >
                     <StyledBasketIcon /> В корзину
                  </Button>
               )}
            </ButtonContainerTwo>
         </Container>
      </Card>
   )
}
const MarginDiv = styled('div')`
   width: 1.891vw;
   height: 1.891vw;
`
const Error = styled('p')`
   margin: 0;
   color: red;
   font-size: 1.042vw;
   margin-top: 4px;
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
const StyledButton = styled(Button)`
   background: #2fc509;
   :hover {
      background: #2fc509;
   }
   :active {
      background: #2fc509;
   }
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
   background: #fff;
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
