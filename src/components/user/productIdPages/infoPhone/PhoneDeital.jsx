import styled from '@emotion/styled'
import Rating from '@mui/material/Rating'
import React from 'react'
import { useSelector } from 'react-redux'

export const PhoneDeital = () => {
   const { name, price, rating, articleNumber, discountOfProduct } =
      useSelector((state) => state.phone.infoPhone)

   const discount = (discountOfProduct / 100) * price
   const result = price - discount

   const formattedRating = rating ? Math.round(rating * 2) / 2 : 0
   return (
      <div>
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

         <Block4>
            <strong>Коротко о товаре:</strong>
            <Product>
               <Key>
                  <p>Экран............................................</p>
                  <p>Цвет..............................................</p>
                  <p>Дата выпуска..............................</p>
                  <p>Операционная система............</p>
                  <p>Память.........................................</p>
               </Key>
               <Value>
                  <p>53 (2340×1080) IPS</p>
                  <p>Black</p>
                  <p>Март 2022</p>
                  <p>Android 12</p>
                  <p>128GB</p>
               </Value>
            </Product>
         </Block4>
      </div>
   )
}

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
`
const BlockPrice = styled('div')`
   display: flex;
   width: 15rem;
   justify-content: space-between;
   align-items: center;
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
const Product = styled('div')`
   display: flex;
   margin-top: 0.5rem;
`
const Key = styled('div')`
   color: #91969e;
   font-size: 1rem;
`
const Value = styled('div')`
   color: #292929;
   font-size: 1rem;
`
const Block4 = styled('div')`
   margin-top: 10rem;
`
