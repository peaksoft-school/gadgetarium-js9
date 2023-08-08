import { Rating, styled } from '@mui/material'
import { useState } from 'react'
import { ReactComponent as Comparison } from '../../../assets/icons/comparison-icon.svg'
import { ReactComponent as Favourite } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as BasketIcon } from '../../../assets/icons/basket-icon.svg'
import { ReactComponent as Recommendation } from '../../../assets/icons/recommendation.svg'

import { Button } from '../../UI/Button'

const ProductCard = () => {
   const [favourite, setFavourite] = useState(false)
   const [comparison, setComparison] = useState(false)
   const productCard = {
      recomendationState: false,
      newState: false,
      price: 100000,
      image: '',
      prodName: 'Смартфон Apple iPhone 13 256gb синий 9(MLP3RU00RE)',
      quantity: 12,
      rating: 1,
      discount: 20,
      countOfReviews: 56,
      id: '1',
   }

   const discountPrice =
      productCard.price - (productCard.price * productCard.discount) / 100
   const toggleFavouriteHandler = () => {
      setFavourite(!favourite)
   }
   const toggleComparisonHandler = () => {
      setComparison(!comparison)
   }
   return (
      <Card>
         <ButtonContainer>
            <CircleContainer>
               {productCard.discount === 0 &&
                  productCard.newState === false &&
                  productCard.recomendationState === false && <MarginDiv />}
               {productCard.recomendationState && (
                  <Circle>
                     <Recommendation />
                  </Circle>
               )}
               {productCard.discount !== 0 && (
                  <CircleTwo>-{productCard.discount}%</CircleTwo>
               )}
               {productCard.newState && <CircleThree>New</CircleThree>}
            </CircleContainer>

            <IconContainer>
               <StyledComparison
                  comparison={comparison}
                  onClick={toggleComparisonHandler}
               />
               {favourite ? (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     onClick={toggleFavouriteHandler}
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        cursor="pointer"
                        d="M12.6577 3.75827C13.783 2.6325 15.3095 2 16.9013 2C18.493 2 20.0195 2.63247 21.1448 3.75819C22.2705 4.88347 22.9031 6.41012 22.9031 8.00183C22.9031 9.59357 22.2706 11.1201 21.1448 12.2454L12.3048 21.0854C12.1096 21.2806 11.793 21.2806 11.5977 21.0854L2.75774 12.2454C0.414088 9.90173 0.414088 6.10192 2.75774 3.75827C5.10139 1.41462 8.90119 1.41462 11.2448 3.75827L11.9513 4.46472L12.6577 3.75827Z"
                        fill="#F10000"
                     />
                  </svg>
               ) : (
                  <StyledFavourite onClick={toggleFavouriteHandler} />
               )}
            </IconContainer>
         </ButtonContainer>
         <Image
            src="https://www.myphone.kg/files/media/17/17378.webp"
            alt="aa"
         />
         <Container>
            <InStock>В наличии ({productCard.quantity})</InStock>
            <Title>{productCard.prodName.slice(0, 45)}...</Title>
            <RatingContainer>
               Рейтинг <StyledRating readOnly value={productCard.rating} /> (56)
            </RatingContainer>
            <ButtonContainerTwo>
               <PriceContainer>
                  {productCard.discount !== 0 ? (
                     <>
                        <DiscountPrice>
                           {Math.floor(discountPrice).toLocaleString()}{' '}
                           <span>c</span>
                        </DiscountPrice>
                        <Price>{productCard.price.toLocaleString()} c</Price>
                     </>
                  ) : (
                     <DiscountPrice>
                        {productCard.price.toLocaleString()} <span>c</span>
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
export default ProductCard

// const Card = styled('div')`
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    width: 18.75rem;
//    height: 30.9375rem;
//    border-radius: 0.25rem;
//    padding: 0.625rem;
// `
// const RatingContainer = styled('div')`
//    display: flex;
//    align-items: center;
//    gap: 0.375rem;
//    color: #909cb5;
//    font-family: Inter;
//    font-size: 0.75rem;
//    font-style: normal;
//    font-weight: 500;
//    line-height: normal;
// `
// const CircleContainer = styled('div')`
//    display: flex;
//    gap: 0.25rem;
// `
const MarginDiv = styled('div')`
   width: 2.25rem;
   height: 2.25rem;
`
// const ButtonContainerTwo = styled('div')`
//    display: flex;
//    width: 100%;
//    justify-content: space-between;
//    margin-top: 0.5rem;
// `
// const PriceContainer = styled('div')`
//    display: flex;
//    justify-content: center;
//    align-items: flex-end;
//    flex-direction: column;
// `
// const StyledRating = styled(Rating)`
//    && .MuiSvgIcon-root {
//       font-size: 0.9375rem;
//    }
// `
// const Price = styled('p')`
//    font-family: Inter;
//    color: #909cb5;
//    font-style: normal;
//    font-weight: 400;
//    line-height: 135.938%;
//    margin: 0;
//    text-decoration: 0.08rem line-through;
// `
// const DiscountPrice = styled('p')`
//    font-size: 1.125rem;
//    font-style: normal;
//    font-weight: 700;
//    line-height: 130%;
//    font-family: Inter;
//    margin: 0;
//    span {
//       text-decoration: underline;
//       margin-bottom: 3px;
//    }
// `
// const Container = styled('div')`
//    display: flex;
//    flex-direction: column;
//    width: 16.25rem;
//    gap: 0.5rem;
//    margin-top: 1.75rem;
// `
// const Title = styled('p')`
//    font-family: Inter;
//    font-size: 1rem;
//    font-style: normal;
//    font-weight: 500;
//    line-height: 140.023%;
//    text-transform: capitalize;
//    margin: 0;
// `
// const InStock = styled('p')`
//    color: #2fc509;
//    font-family: Inter;
//    font-size: 0.75rem;
//    font-style: normal;
//    font-weight: 500;
//    line-height: normal;
//    margin: 0;
// `
// const Image = styled('img')`
//    margin-top: 0.75rem;
//    width: 11.25rem;
//    height: 14.75rem;
//    object-fit: cover;
// `
// const Circle = styled('div')`
//    width: 2.25rem;
//    height: 2.25rem;
//    border: 100%;
//    background-color: #2c68f5;
//    border-radius: 100%;
//    color: white;
//    opacity: 0.8;
//    font-family: Inter;
//    font-size: 0.75rem;
//    font-style: normal;
//    font-weight: 700;
//    line-height: normal;
//    display: flex;
//    align-items: center;
//    justify-content: center;
// `
// const CircleTwo = styled('div')`
//    width: 2.25rem;
//    height: 2.25rem;
//    border: 100%;
//    background-color: #f10000;
//    border-radius: 100%;
//    color: white;
//    opacity: 0.8;
//    font-family: Inter;
//    font-size: 0.75rem;
//    font-style: normal;
//    font-weight: 700;
//    line-height: normal;
//    display: flex;
//    align-items: center;
//    justify-content: center;
// `
// const CircleThree = styled('div')`
//    width: 2.25rem;
//    height: 2.25rem;
//    border: 100%;
//    background-color: #2fc509;
//    border-radius: 100%;
//    color: white;
//    opacity: 0.8;
//    font-family: Inter;
//    font-size: 0.75rem;
//    font-style: normal;
//    font-weight: 700;
//    line-height: normal;
//    display: flex;
//    align-items: center;
//    justify-content: center;
// `
// const IconContainer = styled('div')`
//    display: flex;
//    gap: 0.875rem;
//    margin-right: 0.25rem;
// `
// const ButtonContainer = styled('div')`
//    display: flex;
//    align-items: center;
//    width: 100%;
//    justify-content: space-between;
// `
// const StyledComparison = styled(Comparison)`
//    cursor: pointer;
//    path {
//       fill: ${(props) => (props.comparison ? '#cb11ab' : '#91969e')};
//    }
// `
// const StyledFavourite = styled(Favourite)`
//    cursor: pointer;
//    path {
//       stroke: #91969e;
//    }
// `
const StyledBasketIcon = styled(BasketIcon)`
   width: 1.25vw;
   height: 1.25vw;
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
   align-items: center;
   flex-direction: column;
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
   object-fit: cover;
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
      fill: ${(props) => (props.comparison ? '#cb11ab' : '#91969e')};
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
