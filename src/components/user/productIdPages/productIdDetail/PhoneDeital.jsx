import { styled, Button } from '@mui/material'
import Rating from '@mui/material/Rating'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as FavoriteIcon } from '../../../../assets/icons/favourites-icon.svg'
import { ReactComponent as FilledFavoriteIcon } from '../../../../assets/icons/filled-favorite-icon.svg'
import { ProductChracteristics } from './ProductChracter'
import { ReactComponent as Delete } from '../../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as Basket } from '../../../../assets/icons/basket-icon.svg'
import { postFavoriteItem } from '../../../../store/favorite/favorite.thunk'
import {
   getBasket,
   postBasketQuantity,
} from '../../../../store/basket/basket.thunk'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'
import { AuthorizationModal } from '../../AuthorizationModal'
import { deleteProduct } from '../../../../store/admin.goods/admin.goods.thunk'

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
      quantity,
   } = useSelector((state) => state.product.infoPhone)

   const { role, isAuthorization } = useSelector((state) => state.auth)

   const navigate = useNavigate()
   const [openModal, setOpenModal] = useState()
   const { snackbarHandler } = useSnackbar()

   const [count, setCount] = useState(1)

   const [changePrice, setChangePrice] = useState(price)
   const dispatch = useDispatch()

   const postFavoriteHandler = () => {
      if (isAuthorization) {
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
      } else {
         setOpenModal(true)
      }
   }
   const toggleModalHandler = () => {
      setOpenModal(!openModal)
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
      if (quantity > count) {
         setCount((prev) => prev + 1)
         setChangePrice((prevChangePrice) => prevChangePrice + price)
      }
   }
   const deleteHandler = () => {
      dispatch(deleteProduct(subProductId))
         .unwrap()
         .then(() => {
            navigate('/admin/goods')
         })
   }
   const postQuantityBasket = () => {
      if (isAuthorization) {
         const data = {
            subProductId,
            quantity: count,
         }
         setCount(1)

         dispatch(
            postBasketQuantity({
               data,
               snackbarHandler,
            })
         )
            .unwrap()
            .then(() => {
               dispatch(getInfoPage({ productId, colours }))
               dispatch(getBasket())
            })
         setChangePrice(price)
      } else {
         setOpenModal(true)
      }
   }

   const discount = (discountOfProduct / 100) * changePrice
   const result = changePrice - discount
   const resultPrice = Math.floor(result)

   const formattedRating = rating ? Math.round(rating * 2) / 2 : 0

   return (
      <>
         <AuthorizationModal
            openModal={openModal}
            toggleHandler={toggleModalHandler}
         />
         <Container>
            <ProductName>{name}</ProductName>
            <Line>
               <Block1>
                  <Stock>В наличии ({quantity}шт)</Stock>
                  <ArticleContainer>
                     <Article>
                        <p>Артикул: {articleNumber}</p>
                     </Article>
                  </ArticleContainer>
                  <RatingBlockParent>
                     <RatingBlock>
                        <Rating
                           name="half-rating"
                           value={formattedRating}
                           readOnly
                        />
                        <p>({rating})</p>
                     </RatingBlock>
                  </RatingBlockParent>
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

               <CounterContainer>
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
                     {role === 'GUEST' && (
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
               </CounterContainer>
               <ContainerChildren>
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
                                 {resultPrice?.toLocaleString()}
                                 <span>c</span>
                              </strong>
                              <DiscountPrice>
                                 {changePrice?.toLocaleString()} с
                              </DiscountPrice>
                           </>
                        )}
                     </BlockPrice>
                  </BlockDiscount>
                  {role === 'USER' || role === 'GUEST' ? (
                     <BlockUi>
                        <HeartStyle
                           onClick={postFavoriteHandler}
                           favorite={favorite}
                        >
                           {favorite ? (
                              <FilledFavoriteIcon />
                           ) : (
                              <StyledFavoriteIcon />
                           )}
                        </HeartStyle>
                        {quantity === 0 && <Error>Нет в наличии</Error>}
                        {inBasket && quantity !== 0 && (
                           <ButtonUiGreen
                              onClick={() => navigate('/basket')}
                              variant="contained"
                           >
                              <BasketStyle />В корзине
                           </ButtonUiGreen>
                        )}
                        {!inBasket && quantity !== 0 && (
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
                        <HeartStyle onClick={deleteHandler}>
                           <DeleteIcon />
                        </HeartStyle>
                        <ButtonUi
                           variant="contained"
                           onClick={() =>
                              navigate(
                                 `/admin/goods/edit-product/${subProductId}`
                              )
                           }
                        >
                           Редактировать
                        </ButtonUi>
                     </BlockUi>
                  )}
               </ContainerChildren>
            </Block2>
            <ProductChracteristics />
         </Container>
      </>
   )
}

const Line = styled('div')`
   width: 100%;
   border-bottom: 1px solid #cdcdcd;
`

const Stock = styled('p')`
   color: #2fc509;
   font-weight: 500;
`
const Container = styled('div')`
   strong {
      color: #292929;
      font-family: Inter;
   }
`
const Block1 = styled('div')`
   display: flex;
   width: 32rem;
   justify-content: space-between;
`
const RatingBlock = styled('div')`
   display: flex;
   position: relative;
   justify-content: space-between;
   align-items: center;
   .MuiRating-root {
      font-size: 18px;
   }
`
const Error = styled('p')`
   margin: 0;
   color: red;
   font-size: 22px;
`
const Block2 = styled('div')`
   display: flex;
   /* width: 40.5vw; */
   width: 41rem;
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
   font-family: Inter;
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
   box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
   background: ${(props) => props.bgcolor && props.bgcolor};
`
const BlockUi = styled('div')`
   display: flex;
   width: 17rem;
   justify-content: space-between;
   align-items: center;
   padding-top: 1.25rem;
`
const HeartStyle = styled('button')`
   width: 64px;
   height: 45px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   background: none;
   border: 1px solid
      ${(props) => (props.favorite ? 'rgb(241, 0, 0)' : '#909cb5')};
   border-radius: 4px;

   .HeartIsRed {
      color: red;
      cursor: pointer;
   }
   .HeartIsGray {
      color: gray;
      cursor: pointer;
   }
`
const StyledFavoriteIcon = styled(FavoriteIcon)`
   path {
      stroke: #909cb5;
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
   font-family: Inter;
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
   gap: 0.75rem;
`
const BlockCounter = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.3rem;
`

const CounterContainer = styled('div')`
   display: flex;
   width: 6.9rem;
   justify-content: flex-start;
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
const ContainerChildren = styled('div')`
   display: flex;
   flex-direction: column;
   width: 16.875rem;
   justify-content: flex-start;
`
const RatingBlockParent = styled('div')`
   display: flex;
   width: 7.5rem;
   justify-content: flex-start;
`
const Article = styled('div')`
   display: flex;
   justify-content: flex-end;
   p {
      font-weight: 500;
   }
`

const ArticleContainer = styled('div')``
