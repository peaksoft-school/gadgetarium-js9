// import { styled, Button } from '@mui/material'
// import Rating from '@mui/material/Rating'
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import AddIcon from '@mui/icons-material/Add'
// import RemoveIcon from '@mui/icons-material/Remove'
// import FavoriteIcon from '@mui/icons-material/Favorite'

// import { ReactComponent as Basket } from '../../../../assets/icons/basket-icon.svg'
// import { Сharacteristics } from './ Сharacteristics'

// export const PhoneDeital = () => {
//    const {
//       name,
//       price,
//       rating,
//       articleNumber,
//       discountOfProduct,
//       colours,
//       favorite,
//       color,
//    } = useSelector((state) => state.phone.infoPhone)

//    const [count, setCount] = useState(0)

//    const countMinus = () => {
//       if (count !== 0) {
//          setCount((prev) => prev - 1)
//       }
//    }
//    const countPlus = () => {
//       setCount((prev) => prev + 1)
//    }

//    const discount = (discountOfProduct / 100) * price
//    const result = price - discount

//    const formattedRating = rating ? Math.round(rating * 2) / 2 : 0
//    return (
//       <Container>
//          <h2>{name}</h2>
//          <Line>
//             <Block1>
//                <Stock>В наличии (36шт)</Stock>
//                <p>Артикул: {articleNumber}</p>
//                <RatingBlock>
//                   <Rating name="half-rating" value={formattedRating} readOnly />
//                   <p>({rating})</p>
//                </RatingBlock>
//             </Block1>
//          </Line>

//          <Block2>
//             <BlockColors>
//                <strong>Цвет товара:</strong>
//                <StyleColors>
//                   {colours?.map((el) => {
//                      if (color === el) {
//                         return (
//                            <BorderColor key={el} border>
//                               <Color bgcolor={el} />
//                            </BorderColor>
//                         )
//                      }
//                      return (
//                         <BorderColor key={el}>
//                            <Color bgcolor={el} />
//                         </BorderColor>
//                      )
//                   })}
//                </StyleColors>
//             </BlockColors>

//             <BlockCounter>
//                <strong>Количество:</strong>
//                <Counter>
//                   <Button1 onClick={countMinus}>
//                      <RemoveIcon />
//                   </Button1>
//                   <p>{count}</p>
//                   <Button2 onClick={countPlus}>
//                      <AddIcon />
//                   </Button2>
//                </Counter>
//             </BlockCounter>
//             <BlockDiscount>
//                <BlockPrice>
//                   {discountOfProduct === 0 ? (
//                      <strong>
//                         {result} <span>c</span>
//                      </strong>
//                   ) : (
//                      <>
//                         <Discount>
//                            <p>-{discountOfProduct}%</p>
//                         </Discount>
//                         <strong>
//                            {result?.toLocaleString()} <span>c</span>
//                         </strong>
//                         <DiscountPrice>
//                            {price?.toLocaleString()} с
//                         </DiscountPrice>
//                      </>
//                   )}
//                </BlockPrice>

//                <BlockUi>
//                   <HeartStyle>
//                      <FavoriteIcon
//                         className={favorite ? 'HeartIsRed' : 'HeartIsGray'}
//                      />
//                   </HeartStyle>
//                   <ButtonUi variant="contained">
//                      <BasketStyle />В корзину
//                   </ButtonUi>
//                </BlockUi>
//             </BlockDiscount>
//          </Block2>

//          <Сharacteristics />
//       </Container>
//    )
// }

// const Container = styled('div')`
//    margin-top: 2.5rem;
// `
// const Line = styled('div')`
//    width: 100%;
//    border-bottom: 1px solid #cdcdcd;
// `

// const Stock = styled('p')`
//    color: #2fc509;
// `

// const Block1 = styled('div')`
//    display: flex;
//    width: 98%;
//    justify-content: space-between;
// `
// const RatingBlock = styled('div')`
//    display: flex;
//    margin-right: 6rem;
//    justify-content: space-between;
//    align-items: center;
// `

// const Block2 = styled('div')`
//    display: flex;
//    width: 50vw;
//    justify-content: space-between;
//    margin-top: 1.88rem;
// `
// const BlockPrice = styled('div')`
//    display: flex;
//    width: 15rem;
//    justify-content: space-between;
//    align-items: center;
//    strong {
//       font-size: 1.75rem;
//       span {
//          border-bottom: 2px solid black;
//       }
//    }
// `
// const Discount = styled('div')`
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    width: 2.25rem;
//    height: 2.25rem;
//    border-radius: 100%;
//    background-color: red;
//    p {
//       font-size: 0.75rem;
//       color: #fff;
//    }
// `
// const DiscountPrice = styled('p')`
//    margin-top: 1.5rem;
//    color: #909cb5;
//    font-size: 1.125rem;
//    text-decoration: line-through;
// `
// const Counter = styled('div')`
//    display: flex;
//    width: 5.5rem;
//    justify-content: space-between;
//    align-items: center;
//    margin: 0;
//    padding: 0;
// `

// const Button1 = styled('button')`
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    border-radius: 100%;
//    background-color: #fff;
//    width: 2rem;
//    height: 2rem;
//    border: 1px solid gray;
//    font-size: 1.2rem;
//    cursor: pointer;
//    :hover {
//       background-color: #384255;
//       color: #fff;
//       cursor: pointer;
//    }
// `
// const Button2 = styled('button')`
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    border-radius: 100%;
//    background-color: #fff;
//    width: 2rem;
//    height: 2rem;
//    border: 1px solid gray;
//    font-size: 1.2rem;
//    cursor: pointer;
//    :hover {
//       background-color: #384255;
//       color: #fff;
//       cursor: pointer;
//    }
// `
// const Color = styled('p')`
//    width: 1.625rem;
//    height: 1.625rem;
//    border-radius: 100%;
//    background: ${(props) => props.bgcolor && props.bgcolor};
// `
// const BlockUi = styled('div')`
//    display: flex;
//    width: 260px;
//    padding-top: 1.25rem;
//    justify-content: space-around;
//    align-items: center;
//    border-top: 1px solid #cdcdcd;
// `
// const HeartStyle = styled('div')`
//    width: 48px;
//    height: 40px;
//    padding-top: 7.5px;
//    padding-left: 12px;
//    border: 1px solid #909cb5;
//    border-radius: 10px;

//    .HeartIsRed {
//       color: red;
//       cursor: pointer;
//    }
//    .HeartIsGray {
//       color: gray;
//       cursor: pointer;
//    }
// `

// const BasketStyle = styled(Basket)`
//    position: relative;
//    right: 0.5rem;
//    width: 1.25rem;
//    height: 1.25rem;
// `
// const ButtonUi = styled(Button)`
//    width: 12.25rem;
//    height: 2.8125rem;
// `
// const BorderColor = styled('div')`
//    display: flex;
//    width: 34px;
//    height: 34px;
//    justify-content: center;
//    align-items: center;
//    border-radius: 100%;
//    cursor: ${(props) => !props.border && 'pointer'};
//    border: ${(props) => props.border && '2px solid #cb11ab'};
// `
// const StyleColors = styled('div')`
//    display: flex;
// `
// const BlockColors = styled('div')`
//    display: flex;
//    flex-direction: column;
//    gap: 0.75rem;
// `
// const BlockDiscount = styled('div')`
//    display: flex;
//    gap: 0.75rem;
//    flex-direction: column;
// `
// const BlockCounter = styled('div')`
//    display: flex;
//    flex-direction: column;
//    gap: 0.3rem;
// `

import { styled, Button } from '@mui/material'
import Rating from '@mui/material/Rating'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import FavoriteIcon from '@mui/icons-material/Favorite'

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
      color,
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

   const [selectedColor, setSelectedColor] = useState(color)

   const handleColorClick = (el) => {
      setSelectedColor(el === selectedColor ? null : el)
      localStorage.setItem('selectedColor', el)
   }

   useEffect(() => {
      const savedColor = localStorage.getItem('selectedColor')
      if (savedColor) {
         setSelectedColor(savedColor)
      }
   }, [])

   const discount = (discountOfProduct / 100) * price
   const result = price - discount

   const formattedRating = rating ? Math.round(rating * 2) / 2 : 0
   return (
      <Container>
         <h2>{name}</h2>
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
                        border={selectedColor === el}
                        onClick={() => handleColorClick(el)}
                     >
                        <Color bgcolor={el} />
                     </BorderColor>
                  ))}
               </StyleColors>
            </BlockColors>

            <BlockCounter>
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
            </BlockCounter>
            <BlockDiscount>
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
                           {result?.toLocaleString()} <span>c</span>
                        </strong>
                        <DiscountPrice>
                           {price?.toLocaleString()} с
                        </DiscountPrice>
                     </>
                  )}
               </BlockPrice>

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
            </BlockDiscount>
         </Block2>

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

const Stock = styled('p')`
   color: #2fc509;
`

const Block1 = styled('div')`
   display: flex;
   width: 98%;
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
   width: 50vw;
   justify-content: space-between;
   margin-top: 1.88rem;
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
   width: 260px;
   padding-top: 1.25rem;
   justify-content: space-around;
   align-items: center;
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
   gap: 0.75rem;
   flex-direction: column;
`
const BlockCounter = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.3rem;
`
