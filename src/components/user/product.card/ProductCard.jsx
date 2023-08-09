import { Rating, styled } from '@mui/material'
import { useState } from 'react'
import { ReactComponent as Comparison } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Favourite } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Recommendation } from '../../../assets/icons/recommendation.svg'
import { ReactComponent as FilledFavoriteIcon } from '../../../assets/icons/filled-favorite-icon.svg'
import { Button } from '../../UI/Button'

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
   id = '1',
}) => {
   const [favorite, setFavorite] = useState(false)
   const [comparison, setComparison] = useState(false)

   const discountPrice = price - (price * discount) / 100
   const toggleFavoriteHandler = () => {
      setFavorite(!favorite)
   }
   const toggleComparisonHandler = () => {
      setComparison(!comparison)
   }
   return (
      <Card key={id}>
         <ButtonContainer>
            <CircleContainer>
               {discount === 0 &&
                  newState === false &&
                  recomendationState === false && <MarginDiv />}
               {recomendationState && (
                  <Circle>
                     <Recommendation />
                  </Circle>
               )}
               {discount !== 0 && <CircleTwo>-{discount}%</CircleTwo>}
               {newState && <CircleThree>New</CircleThree>}
            </CircleContainer>

            <IconContainer>
               <StyledComparison
                  comparison={comparison ? 'true' : 'false'}
                  onClick={toggleComparisonHandler}
               />
               {favorite ? (
                  <StyledFilledFavoriteIcon onClick={toggleFavoriteHandler} />
               ) : (
                  <StyledFavourite onClick={toggleFavoriteHandler} />
               )}
            </IconContainer>
         </ButtonContainer>
         <Image src={image} />
         <Container>
            <InStock>В наличии ({quantity})</InStock>
            <Title>{prodName.slice(0, 45)}...</Title>
            <RatingContainer>
               Рейтинг <StyledRating readOnly value={rating} /> (
               {countOfReviews})
            </RatingContainer>
            <ButtonContainerTwo>
               <PriceContainer discount={discount}>
                  {discount !== 0 ? (
                     <>
                        <DiscountPrice>
                           {Math.floor(discountPrice).toLocaleString()}{' '}
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
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 15.625vw;
   height: 43vh;
   border-radius: 0.25rem;
   padding: 0.625rem;
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
