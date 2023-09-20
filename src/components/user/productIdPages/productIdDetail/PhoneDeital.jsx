import { styled, Button } from '@mui/material'
import Rating from '@mui/material/Rating'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ReactComponent as Delete } from '../../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as Basket } from '../../../../assets/icons/basket-icon.svg'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'
import { postFavoriteItem } from '../../../../store/favorite/favorite.thunk'
import { postBasketQuantity } from '../../../../store/basket/basket.thunk'
import { useSnackbar } from '../../../../hooks/useSnackbar'

export const PhoneDeital = () => {
   const {
      name,
      price,
      rating,
      articleNumber,
      discountOfProduct,
      colours,
      favorite,
      color,
      productId,
      subProductId,
      inBasket,
   } = useSelector((state) => state.product.infoPhone)

   const { role } = useSelector((state) => state.auth)

   const navigate = useNavigate()

   const { snackbarHandler } = useSnackbar()

   const [count, setCount] = useState(1)

   const [changePrice, setChangePrice] = useState(price)
   const dispatch = useDispatch()

   const postFavoriteHandler = () => {
      dispatch(
         postFavoriteItem({
            id: subProductId,
            favoriteState: favorite,
         })
      )
         .unwrap()
         .then(() => {
            dispatch(getInfoPage({ productId, colour: color }))
         })
   }
   const handleColorClick = (el) => {
      setCount(1)
      dispatch(getInfoPage({ productId, colour: el }))
   }

   const countMinus = () => {
      if (count !== 1) {
         setCount((prev) => prev - 1)
         setChangePrice((prevChangePrice) => prevChangePrice - price)
      }
   }
   useEffect(() => {
      setChangePrice(price)
   }, [price])

   const countPlus = () => {
      setCount((prev) => prev + 1)
      setChangePrice((prevChangePrice) => prevChangePrice + price)
   }

   const postQuantityBasket = () => {
      const data = {
         subProductId,
         quantity: count,
      }
      setCount(1)
      dispatch(postBasketQuantity({ data, snackbarHandler }))
      setChangePrice(price)
   }

   const discount = (discountOfProduct / 100) * changePrice
   const result = changePrice - discount

   const formattedRating = rating ? Math.round(rating * 2) / 2 : 0

   return (
      <Container>
         <ProductName>{name}</ProductName>
         <Line>
            <Block1>
               <Stock>В наличии (36шт)</Stock>
               <p>Артикул: {articleNumber}</p>
               <RatingBlock>
                  <Rating name="half-rating" value={formattedRating} readOnly />
                  <p>({rating})</p>
               </RatingBlock>
            </Block1>
         </Line>

         <Block2>
            <BlockColors>
               <strong>Цвет товара:</strong>
               <StyleColors>
                  {colours?.map((el) => (
                     <BorderColor
                        key={el}
                        border={color === el}
                        onClick={() => handleColorClick(el)}
                     >
                        <Color bgcolor={el} />
                     </BorderColor>
                  ))}
               </StyleColors>
            </BlockColors>

            <BlockCounter>
               {role === 'USER' && (
                  <>
                     <strong>Количество:</strong>

                     <Counter>
                        <Button1 onClick={countMinus}>
                           <RemoveIcon />
                        </Button1>
                        <p>{count}</p>
                        <Button2 onClick={countPlus}>
                           <AddIcon />
                        </Button2>
                     </Counter>
                  </>
               )}
            </BlockCounter>
            <BlockDiscount>
               <BlockPrice>
                  {discountOfProduct === 0 ? (
                     <strong>
                        {changePrice} <span>c</span>
                     </strong>
                  ) : (
                     <>
                        <Discount>
                           <p>-{discountOfProduct}%</p>
                        </Discount>
                        <strong>
                           {result?.toLocaleString()}
                           <span>c</span>
                        </strong>
                        <DiscountPrice>
                           {changePrice?.toLocaleString()} с
                        </DiscountPrice>
                     </>
                  )}
               </BlockPrice>

               {role === 'USER' ? (
                  <BlockUi>
                     <HeartStyle onClick={postFavoriteHandler}>
                        <FavoriteIcon
                           className={favorite ? 'HeartIsRed' : 'HeartIsGray'}
                        />
                     </HeartStyle>
                     {inBasket ? (
                        <ButtonUiGreen
                           onClick={() => navigate('/basket')}
                           variant="contained"
                        >
                           <BasketStyle />В корзине
                        </ButtonUiGreen>
                     ) : (
                        <ButtonUi
                           onClick={postQuantityBasket}
                           variant="contained"
                        >
                           <BasketStyle />В корзину
                        </ButtonUi>
                     )}
                  </BlockUi>
               ) : (
                  <BlockUi>
                     <HeartStyle>
                        <DeleteIcon />
                     </HeartStyle>
                     <ButtonUi variant="contained">
                        <p>Редактировать</p>
                     </ButtonUi>
                  </BlockUi>
               )}
            </BlockDiscount>
         </Block2>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.5rem;
`
const Line = styled('div')`
   width: 100%;
   border-bottom: 1px solid #cdcdcd;
`

const Stock = styled('p')`
   color: #2fc509;
`

const Block1 = styled('div')`
   display: flex;
   width: 47.5vw;
   justify-content: space-between;
`
const RatingBlock = styled('div')`
   display: flex;
   margin-right: 6rem;
   justify-content: space-between;
   align-items: center;
`

const Block2 = styled('div')`
   display: flex;
   width: 45vw;
   justify-content: space-between;
   margin-top: 1.88rem;
`
const BlockPrice = styled('div')`
   display: flex;
   width: 17rem;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 0.75rem;
   border-bottom: 1px solid #cdcdcd;
   strong {
      font-size: 1.75rem;
      span {
         border-bottom: 2px solid black;
      }
   }
`
const Discount = styled('div')`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 2.25rem;
   height: 2.25rem;
   border-radius: 100%;
   background-color: red;
   p {
      font-size: 0.75rem;
      color: #fff;
   }
`
const DiscountPrice = styled('p')`
   margin-top: 1.5rem;
   color: #909cb5;
   font-size: 1.125rem;
   text-decoration: line-through;
`
const Counter = styled('div')`
   display: flex;
   width: 5.5rem;
   justify-content: space-between;
   align-items: center;
   margin: 0;
   padding: 0;
`

const Button1 = styled('button')`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   background-color: #fff;
   width: 2rem;
   height: 2rem;
   border: 1px solid gray;
   font-size: 1.2rem;
   cursor: pointer;
   :hover {
      background-color: #384255;
      color: #fff;
      cursor: pointer;
   }
`
const Button2 = styled('button')`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   background-color: #fff;
   width: 2rem;
   height: 2rem;
   border: 1px solid gray;
   font-size: 1.2rem;
   cursor: pointer;
   :hover {
      background-color: #384255;
      color: #fff;
      cursor: pointer;
   }
`
const Color = styled('p')`
   width: 1.625rem;
   height: 1.625rem;
   border-radius: 100%;
   background: ${(props) => props.bgcolor && props.bgcolor};
`
const BlockUi = styled('div')`
   display: flex;
   width: 17rem;
   justify-content: space-between;
   align-items: center;
`
const HeartStyle = styled('div')`
   width: 48px;
   height: 45px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #909cb5;
   border-radius: 10px;

   .HeartIsRed {
      color: red;
      cursor: pointer;
   }
   .HeartIsGray {
      color: gray;
      cursor: pointer;
   }
`

const BasketStyle = styled(Basket)`
   position: relative;
   right: 0.5rem;
   width: 1.25rem;
   height: 1.25rem;
`
const ButtonUi = styled(Button)`
   width: 12.25rem;
   height: 2.8125rem;
`

const ButtonUiGreen = styled(Button)`
   width: 12.25rem;
   height: 2.8125rem;
   background-color: #2fc509;
   &:hover {
      background-color: #2fc509;
   }
`

const BorderColor = styled('div')`
   display: flex;
   width: 34px;
   height: 34px;
   justify-content: center;
   align-items: center;
   border-radius: 100%;
   cursor: ${(props) => !props.border && 'pointer'};
   border: ${(props) => props.border && '2px solid #cb11ab'};
`
const StyleColors = styled('div')`
   display: flex;
`
const BlockColors = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;
`
const BlockDiscount = styled('div')`
   display: flex;
   position: relative;
   left: 2.2rem;
   gap: 0.75rem;
   flex-direction: column;
`
const BlockCounter = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.3rem;
`
const DeleteIcon = styled(Delete)`
   cursor: pointer;
`
const ProductName = styled('p')`
   font-family: Ubuntu;
   font-size: 1.875rem;
   font-weight: 500;
   color: #1a1a25;
`
