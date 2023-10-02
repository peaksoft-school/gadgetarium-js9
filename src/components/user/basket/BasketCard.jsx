import { Rating, styled } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckboxInput from '../../UI/icon.input/CheckboxInput'
import { ReactComponent as FavoriteButton } from '../../../assets/icons/favourites-icon.svg'
import { ReactComponent as FilledFavoriteButton } from '../../../assets/icons/filled-favorite-icon.svg'
import { ReactComponent as CrossButton } from '../../../assets/icons/cross/small-cross-icon.svg'
import { basketActions } from '../../../store/basket/basket.slice'
import {
   deleteAllBasketGoods,
   deleteBasketById,
   postBasketById,
} from '../../../store/basket/basket.thunk'
import { postFavoriteItem } from '../../../store/favorite/favorite.thunk'
import { useSnackbar } from '../../../hooks/useSnackbar'

export const BasketCard = ({
   image,
   id,
   title,
   rating,
   numberOfReviews,
   quantity,
   articleNumber,
   price,
   isChecked,
   theNumberOfOrders,
   favorite,
}) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { snackbarHandler } = useSnackbar()

   const onPostBasketByIdHandler = () => {
      if (theNumberOfOrders <= quantity - 1) {
         dispatch(postBasketById({ id, needSnackbar: false }))
      } else {
         snackbarHandler({
            message: `В наличии только ${quantity} штук`,
            type: 'error',
         })
      }
   }

   return (
      <Container>
         <StyledCheckboxInput
            isChecked={isChecked}
            onChange={() => dispatch(basketActions.checkedHandler(id))}
         />
         <BasketCardContainer>
            <Image src={image} />
            <TotalContainer>
               <TitlePriceDecrementAndIncrementContainer>
                  <TitleContainer>
                     <Title>{title}</Title>
                     <RatingContainer>
                        Рейтинг{' '}
                        <StyledRating readOnly value={rating} precision={0.5} />
                        ({numberOfReviews})
                     </RatingContainer>
                     <InStock>В наличии ({quantity}шт)</InStock>
                  </TitleContainer>
                  <DecrementAndIncrementContainer>
                     <ToolButton onClick={() => dispatch(deleteBasketById(id))}>
                        <Remove />
                     </ToolButton>
                     <Count>{theNumberOfOrders}</Count>
                     <ToolButton onClick={onPostBasketByIdHandler}>
                        <Add />
                     </ToolButton>
                  </DecrementAndIncrementContainer>
                  <Price>{price.toLocaleString()} с</Price>
               </TitlePriceDecrementAndIncrementContainer>
               <SecondToolContainer>
                  <GoodCode>Код товара: {articleNumber}</GoodCode>
                  <FavoriteDeleteContainer>
                     {favorite ? (
                        <ToolFavoriteAndDelete
                           onClick={() => navigate('/favorite')}
                        >
                           <StyledFilledFavoriteButton />В избранном
                        </ToolFavoriteAndDelete>
                     ) : (
                        <ToolFavoriteAndDelete
                           onClick={() =>
                              dispatch(
                                 postFavoriteItem({
                                    id,
                                    favoriteState: favorite,
                                 })
                              )
                           }
                        >
                           <StyledFavoriteButton />В избранное
                        </ToolFavoriteAndDelete>
                     )}

                     <ToolFavoriteAndDelete
                        cursor="true"
                        onClick={() => dispatch(deleteAllBasketGoods([id]))}
                     >
                        <StyledCrossButton />
                        Удалить
                     </ToolFavoriteAndDelete>
                  </FavoriteDeleteContainer>
               </SecondToolContainer>
            </TotalContainer>
         </BasketCardContainer>
      </Container>
   )
}
const Container = styled('div')`
   width: 50.885vw;
   display: flex;
   justify-content: space-between;
`
const StyledCheckboxInput = styled(CheckboxInput)`
   width: 1.563vw;
   height: 1.563vw;
   svg {
      width: 1.38vw;
      height: 1.38vw;
   }
`
const FavoriteDeleteContainer = styled('div')`
   display: flex;
   gap: 0.729vw;
`
const ToolFavoriteAndDelete = styled('p')`
   color: #909cb5;
   font-family: Inter;
   font-size: 0.729vw;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
   display: flex;
   align-items: center;
   cursor: pointer;
   margin: 0;
`
const GoodCode = styled('div')`
   color: #384255;
   font-family: Inter;
   font-size: 0.729vw;
   font-style: normal;
   font-weight: 400;
   line-height: 140%;
`
const BasketCardContainer = styled('div')`
   width: 48.385vw;
   border-radius: 4px;
   background: #fff;
   padding: 1.042vw;
   display: flex;
   gap: 1.563vw;
`
const Image = styled('img')`
   width: 5.521vw;
   height: 6.302vw;
   margin-left: 0.365vw;
   margin-bottom: 0.9259vh;
`
const TitleContainer = styled('div')`
   display: flex;
   flex-direction: column;
   width: 20.313vw;
   gap: 0.417vw;
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
const StyledRating = styled(Rating)`
   && .MuiSvgIcon-root {
      font-size: 0.7818vw;
   }
`
const Title = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   margin: 0;
`
const DecrementAndIncrementContainer = styled('div')`
   display: flex;
   gap: 0.625vw;
   align-items: center;
`
const ToolButton = styled('div')`
   cursor: pointer;
   width: 1.458vw;
   height: 1.458vw;
   color: #384255;
   font-family: Inter;
   font-size: 1.25vw;
   font-style: normal;
   font-weight: 500;
   line-height: 140%;
   text-transform: lowercase;
   border-radius: 100%;
   border: 1px solid #909cb5;
   :hover {
      border-color: #cb11ab;
      .MuiSvgIcon-root {
         path {
            fill: #cb11ab;
         }
      }
   }
   :active {
      border-color: #e313bf;
      .MuiSvgIcon-root {
         path {
            fill: #e313bf;
         }
      }
   }
   display: flex;
   align-items: center;
   justify-content: center;
   .MuiSvgIcon-root {
      font-size: 0.833vw;
      path {
         fill: #909cb5;
      }
   }
`

const Count = styled('div')`
   color: #909cb5;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 400;
   line-height: 135.938%;
`
const Price = styled('div')`
   color: #292929;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
`
const TotalContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.9259vh;
   justify-content: space-between;
`

const TitlePriceDecrementAndIncrementContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 1.563vw;
   margin-left: 0.885vw;
`
const SecondToolContainer = styled('div')`
   display: flex;
   align-items: center;
   margin-left: 0.885vw;
   justify-content: space-between;
   width: 37.969vw;
`
const StyledFavoriteButton = styled(FavoriteButton)`
   width: 0.833vw;
   height: 0.729vw;
   margin-right: 0.313vw;
   path {
      stroke: #909cb5;
   }
`
const StyledFilledFavoriteButton = styled(FilledFavoriteButton)`
   width: 0.833vw;
   height: 0.729vw;
   margin-right: 0.313vw;
`
const StyledCrossButton = styled(CrossButton)`
   width: 0.521vw;
   height: 0.521vw;
   path {
      fill: #909cb5;
   }
   margin-right: 0.417vw;
`
