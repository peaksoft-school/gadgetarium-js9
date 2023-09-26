import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MiniBasketOrdersProduct } from './MiniBasketOrdersProduct'

export const MiniBasketOrderPrice = () => {
   const { basket } = useSelector((state) => state.basket)
   const navigate = useNavigate()

   const onEditAndNavigateBasketHandler = () => {
      navigate('/basket')
   }

   const toPay = basket?.toPay === 0 ? basket?.totalPrice : basket?.toPay

   return (
      <Container>
         <div className="box">
            <ContainerOrderPrice>
               <BoxOrderPrice>
                  <p className="order-price">Сумма заказа</p>

                  <div onClick={onEditAndNavigateBasketHandler}>
                     <p className="edit">Изменить</p>
                  </div>
               </BoxOrderPrice>
               <ProductsPriceInformationContainer>
                  <p>
                     <span>Количество товаров:</span>
                     <span>{basket?.quantitySubProducts} шт.</span>
                  </p>
                  <p>
                     <span>Ваша скидка:</span>
                     <span className="discount">
                        - {basket?.totalDiscount?.toLocaleString('ru-RU')}
                        <span className="c"> c</span>
                     </span>
                  </p>
                  <p>
                     <span>Сумма:</span>
                     <span>
                        {basket?.totalPrice?.toLocaleString('ru-RU')}
                        <span className="c"> c</span>
                     </span>
                  </p>

                  <p>
                     <span className="total">Итого</span>
                     <span className="total">
                        {toPay?.toLocaleString('ru-RU')}
                        <span className="c"> c</span>
                     </span>
                  </p>
               </ProductsPriceInformationContainer>
            </ContainerOrderPrice>

            <div>
               <MiniBasketOrdersProduct />
            </div>
         </div>
      </Container>
   )
}

const Container = styled('div')`
   box {
      display: flex;
      flex-direction: column;
   }
`

const ContainerOrderPrice = styled('div')`
   background-color: #ffffff;
   padding: 1.25rem 1.875rem;
   border-radius: 0.25rem;

   display: flex;
   flex-direction: column;

   p {
      display: flex;
      justify-content: space-between;
   }
`

const BoxOrderPrice = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding-bottom: 0.75rem;
   border-bottom: 0.0625rem solid #cdcdcd;

   p {
      margin: 0;
   }

   .order-price {
      color: #292929;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
   }

   .edit {
      color: #4b7ee8;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      cursor: pointer;
   }
`

const ProductsPriceInformationContainer = styled('div')`
   margin-top: 0.75rem;

   p {
      color: #292929;
      margin: 0;

      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      .c {
         border-bottom: 1px solid;
      }

      .discount {
         color: #ff0000;
      }

      .total {
         margin-top: 0.75rem;

         font-weight: 600;
         line-height: normal;
      }
   }
`
