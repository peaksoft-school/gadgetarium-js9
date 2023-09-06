import { styled, Button } from '@mui/material'
import Rating from '@mui/material/Rating'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddIcon from '@mui/icons-material/Add'
import { ReactComponent as Basket } from '../../../../assets/icons/basket-icon.svg'
import { Сharacteristics } from './ Сharacteristics'

export const PhoneDeital = () => {
   const {
      name,
      price,
      rating,
      articleNumber,
      discountOfProduct,
      colours,
      favorite,
   } = useSelector((state) => state.phone.infoPhone)

   const [count, setCount] = useState(0)

   const countMinus = () => {
      if (count !== 0) {
         setCount((prev) => prev - 1)
      }
   }
   const countPlus = () => {
      setCount((prev) => prev + 1)
   }

   const discount = (discountOfProduct / 100) * price
   const result = price - discount

   const formattedRating = rating ? Math.round(rating * 2) / 2 : 0
   return (
      <Container>
         <h2>{name}</h2>
         <Line>
            <Block1>
               <p>В наличии (36шт)</p>
               <p>Артикул: {articleNumber}</p>
               <RatingBlock>
                  <Rating name="half-rating" value={formattedRating} readOnly />
                  <p>({rating})</p>
               </RatingBlock>
            </Block1>
         </Line>

         <Block2>
            <strong>Цвет товара:</strong>
            <strong>Количество:</strong>
            <BlockPrice>
               {discountOfProduct === 0 ? (
                  <strong>
                     {result} <span>c</span>
                  </strong>
               ) : (
                  <>
                     <Discount>
                        <p>-{discountOfProduct}%</p>
                     </Discount>
                     <strong>
                        {result} <span>c</span>
                     </strong>
                     <DiscountPrice>{price} с</DiscountPrice>
                  </>
               )}
            </BlockPrice>
         </Block2>

         <Block3>
            <div>
               {colours?.map((el) => (
                  <Color key={el} style={{ backgroundColor: el }} />
               ))}
            </div>
            <Counter>
               <Button1 onClick={countMinus}>
                  <RemoveIcon />
               </Button1>
               <p>{count}</p>
               <Button2 onClick={countPlus}>
                  <AddIcon />
               </Button2>
            </Counter>
         </Block3>

         <BlockUiChilde>
            <BlockUi>
               <HeartStyle>
                  <FavoriteIcon
                     className={favorite ? 'HeartIsRed' : 'HeartIsGray'}
                  />
               </HeartStyle>
               <ButtonUi variant="contained">
                  <BasketStyle />В корзину
               </ButtonUi>
            </BlockUi>
         </BlockUiChilde>

         <Сharacteristics />
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

const Block1 = styled('div')`
   display: flex;
   width: 600px;
   justify-content: space-between;
`
const RatingBlock = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Block2 = styled('div')`
   display: flex;
   width: 690px;
   justify-content: space-between;
   align-items: center;

   padding-top: 1rem;
`
const BlockPrice = styled('div')`
   display: flex;
   width: 15rem;
   justify-content: space-between;
   align-items: center;
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

   margin-top: 1rem;
`

const Button1 = styled('button')`
   display: flex;
   justify-content: center;
   align-items: center;

   background-color: #fff;
   border-radius: 100%;
   width: 2rem;
   height: 2rem;
   border: 1px solid gray;

   .MuiSvgIcon-root {
      font-size: 1.2rem;
   }
`
const Button2 = styled('button')`
   display: flex;
   justify-content: center;
   align-items: center;

   background-color: #384255;
   border-radius: 100%;
   width: 2rem;
   height: 2rem;
   border: 1px solid gray;

   .MuiSvgIcon-root {
      color: #fff;
      font-size: 1.2rem;
   }
`
const Color = styled('p')`
   width: 1.625rem;
   height: 1.625rem;
   border-radius: 100%;
   cursor: pointer;

   margin-top: 1.5rem;
`
const Block3 = styled('div')`
   display: flex;
   position: relative;
   bottom: 1rem;
   width: 20rem;
   justify-content: space-between;
`
const BlockUi = styled('div')`
   display: flex;
   width: 260px;
   justify-content: space-around;
   align-items: center;
   padding-top: 10px;
   border-top: 1px solid #cdcdcd;
`
const HeartStyle = styled('div')`
   width: 48px;
   height: 40px;
   padding-top: 7.5px;
   padding-left: 12px;
   border: 1px solid #909cb5;
   border-radius: 10px;
   .HeartIsRed {
      color: red;
   }
   .HeartIsGray {
      color: gray;
   }
`

const BlockUiChilde = styled('div')`
   display: flex;
   position: relative;
   bottom: 3rem;
   width: 44.5rem;
   justify-content: flex-end;
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
