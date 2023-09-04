import { useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CheckboxInput from '../../UI/icon.input/CheckboxInput'
import { ReactComponent as DeleteButton } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as FavoriteButton } from '../../../assets/icons/favourites-icon.svg'
import { BasketCard } from './BasketCard'
import { Button } from '../../UI/Button'
import { getBasket } from '../../../store/basket/basket.thunk'

export const Basket = () => {
   const dispatch = useDispatch()
   const { basket, basketResponses, isCheckedAll } = useSelector(
      (state) => state.basket
   )
   useEffect(() => {
      dispatch(getBasket())
   }, [])

   return (
      <Container>
         <WidthContaniner>
            <Title>Товары в корзине</Title>
            <AllContainer>
               <ToolContainer>
                  {isCheckedAll && (
                     <Tools>
                        <StyledCheckboxInput isChecked={isCheckedAll} />
                        Отменить все
                     </Tools>
                  )}

                  <Tools>
                     <StyledDeleteButton />
                     Удалить
                  </Tools>
                  <Tools>
                     <StyledFavoriteButton />
                     Переместить в избранное
                  </Tools>
               </ToolContainer>
               <ProductsAndToolContainer>
                  <Products>
                     {basketResponses?.map((el) => {
                        return (
                           <BasketCard
                              key={el.subProductId}
                              id={el.subProductId}
                              title={el.title}
                              numberOfReviews={el.numberOfReviews}
                              quantity={el.quantity}
                              price={el.price}
                              theNumberOfOrders={el.theNumberOfOrders}
                              articleNumber={el.articleNumber}
                              image={el.image}
                              isChecked={el.isChecked}
                           />
                        )
                     })}
                  </Products>
                  <OrderAmount>
                     <OrderAmountTitle>Сумма заказа</OrderAmountTitle>
                     <CountOfGoods>
                        Количество товаров:{' '}
                        <span>{basket?.quantitySubProducts} шт.</span>
                     </CountOfGoods>
                     <YourDiscount>
                        Ваша скидка:{' '}
                        <span>
                           {' '}
                           - {basket.totalDiscount?.toLocaleString()}{' '}
                           <span>с</span>
                        </span>
                     </YourDiscount>
                     <SumTitle>
                        Сумма:{' '}
                        <span>
                           {basket.totalPrice?.toLocaleString()} <span>с</span>
                        </span>
                     </SumTitle>
                     <TotalAmount>
                        Итого:{' '}
                        <span>
                           {basket.toPay?.toLocaleString()} <span>с</span>
                        </span>
                     </TotalAmount>
                     <StyledButton variant="contained">
                        Перейти к оформлению
                     </StyledButton>
                  </OrderAmount>
               </ProductsAndToolContainer>
            </AllContainer>
         </WidthContaniner>
      </Container>
   )
}
const WidthContaniner = styled('div')`
   width: 79.688vw;
`
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 11.1111vh;
`
const Title = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 30px;
   font-style: normal;
   font-weight: 500;
   border-bottom: 1px solid #cdcdcd;
   padding-bottom: 20px;
   line-height: 110%;
   margin-bottom: 30px;
`
const ToolContainer = styled('div')`
   display: flex;
   gap: 1.667vw;
   align-items: center;
   margin-bottom: 1.406vw;
`
const Tools = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1.042vw;
   font-style: normal;
   font-weight: 400;
   line-height: 110%;
   margin: 0;
   display: flex;
   align-items: center;
   cursor: pointer;
`
const StyledButton = styled(Button)`
   width: 100%;
   height: 2.344vw;
   font-family: Inter;
   font-size: 0.729vw;
   font-weight: 600;
   line-height: normal;
   text-transform: uppercase !important;
   margin-top: 20px;
   :hover {
      background: #e313bf;
   }
   :active {
      background: #c90ea9;
   }
`
const StyledCheckboxInput = styled(CheckboxInput)`
   width: 1.563vw;
   height: 1.563vw;
   margin-right: 0.313vw;
   svg {
      width: 1.38vw;
      height: 1.38vw;
   }
`
const StyledDeleteButton = styled(DeleteButton)`
   margin-right: 0.313vw;
   width: 1.25vw;
   height: 1.25vw;
`
const StyledFavoriteButton = styled(FavoriteButton)`
   width: 1.25vw;
   height: 1.25vw;
   margin-right: 0.313vw;
   path {
      stroke: #909cb5;
   }
`
const Products = styled('div')``
const ProductsAndToolContainer = styled('div')`
   display: flex;
   width: 100%;
   justify-content: space-between;
`
const AllContainer = styled('div')``
const OrderAmount = styled('div')`
   width: 23.385vw;
   padding: 1.563vw;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   border-radius: 4px;
   background: #fff;
`
const OrderAmountTitle = styled('div')`
   color: #292929;
   font-family: Inter;
   width: 100%;
   font-size: 1.042vw;
   font-style: normal;
   font-weight: 500;
   line-height: 120%;
   border-bottom: 1px solid #cdcdcd;
   padding-bottom: 1.2963vh;
`
const CountOfGoods = styled('p')`
   margin: 0;
   margin-top: 1.2963vh;
   width: 15.417vw;
   color: #292929;
   font-family: Inter;
   font-size: 0.833vw;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   display: flex;
   justify-content: space-between;
`
const YourDiscount = styled('p')`
   margin: 0;
   width: 15.417vw;
   color: #292929;
   font-family: Inter;
   font-size: 0.833vw;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   display: flex;
   justify-content: space-between;
   span {
      color: #f10000;
      font-family: Inter;
      font-size: 0.833vw;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      span {
         text-decoration: underline;
      }
   }
`
const SumTitle = styled('p')`
   margin: 0;
   width: 15.417vw;
   color: #292929;
   font-family: Inter;
   font-size: 0.833vw;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
   display: flex;
   justify-content: space-between;
   span {
      span {
         text-decoration: underline;
      }
   }
`
const TotalAmount = styled('p')`
   margin: 0;
   margin-top: 0.625vw;
   width: 15.417vw;
   color: #292929;
   font-family: Inter;
   font-size: 0.833vw;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   display: flex;
   justify-content: space-between;
   span {
      span {
         text-decoration: underline;
      }
   }
`
