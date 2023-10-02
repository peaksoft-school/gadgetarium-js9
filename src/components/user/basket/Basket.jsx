import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckboxInput from '../../UI/icon.input/CheckboxInput'
import { ReactComponent as DeleteButton } from '../../../assets/icons/tools-for-site/delete-icon.svg'
import { ReactComponent as FavoriteButton } from '../../../assets/icons/favourites-icon.svg'
import { BasketCard } from './BasketCard'
import { Button } from '../../UI/Button'
import {
   addAllFavoriteGoods,
   deleteAllBasketGoods,
} from '../../../store/basket/basket.thunk'
import { basketActions } from '../../../store/basket/basket.slice'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { Loading } from '../../UI/loading/Loading'
import sammyShopping from '../../../assets/images/sammy-shopping.png'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'
import { FinishModal } from '../payment/FinishModal'

const breadcrumbs = [{ path: '/', label: 'Главная' }, { label: 'Корзина' }]

export const Basket = React.memo(() => {
   const dispatch = useDispatch()
   const { basket, basketResponses, isCheckedAll, basketIdsArray } =
      useSelector((state) => state.basket)
   // const { isLoadingFavorite } = useSelector((state) => state.favorite)
   const paymentData = useSelector((state) => state.payment)
   const { snackbarHandler } = useSnackbar()
   const navigate = useNavigate()
   useEffect(() => {
      dispatch(basketActions.changeCheckedAll())
      dispatch(basketActions.onChangeBasketChecked())
   }, [basketResponses])
   const deleteAllHandler = () => {
      if (basketIdsArray.length === 0) {
         snackbarHandler({
            type: 'error',
            message: 'Выберите товар чтобы удалить!',
         })
      } else {
         dispatch(deleteAllBasketGoods(basketIdsArray))
      }
   }
   const addFavoriteAllHandler = () => {
      if (basketIdsArray.length === 0) {
         snackbarHandler({
            type: 'error',
            message: 'Выберите товар чтобы добавить в избранное!',
         })
      } else {
         const itemsInFavorite = basketResponses.some(
            (el) => el.isChecked && el.favorite
         )

         if (itemsInFavorite) {
            snackbarHandler({
               type: 'error',
               message: 'Некоторые товары уже находятся в избранном!',
            })
         } else {
            dispatch(addAllFavoriteGoods(basketIdsArray))
         }
      }
   }
   const enterPurchases = () => {
      navigate('/')
   }

   const onNavigateGoToCheckoutHandler = () => {
      navigate('/payment/placing-an-order')
   }

   return (
      <>
         {/* {isLoading && <Loading />} */}
         {paymentData.isLoading && <Loading />}
         {paymentData.openSuccessModal && <FinishModal />}

         <Container>
            <WidthContaniner>
               <BreadCrumbs breadcrumbs={breadcrumbs} />

               <Title>Товары в корзине</Title>
               {basketResponses?.length !== 0 ? (
                  <AllContainer>
                     <ToolContainer>
                        {isCheckedAll && (
                           <Tools>
                              <StyledCheckboxInput
                                 isChecked={isCheckedAll}
                                 onClick={() =>
                                    dispatch(
                                       basketActions.toggleCheckEverything(
                                          false
                                       )
                                    )
                                 }
                              />
                              Отменить все
                           </Tools>
                        )}
                        {!isCheckedAll && (
                           <Tools>
                              <StyledCheckboxInput
                                 onClick={() =>
                                    dispatch(
                                       basketActions.toggleCheckEverything(true)
                                    )
                                 }
                              />
                              Отметить все
                           </Tools>
                        )}

                        <Tools onClick={deleteAllHandler}>
                           <StyledDeleteButton />
                           Удалить
                        </Tools>
                        <Tools onClick={addFavoriteAllHandler}>
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
                                    favorite={el.favorite}
                                    rating={el.rating}
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
                                 {basket.totalPrice?.toLocaleString()}{' '}
                                 <span>с</span>
                              </span>
                           </SumTitle>
                           <TotalAmount>
                              Итого:{' '}
                              <span>
                                 {basket.toPay?.toLocaleString()} <span>с</span>
                              </span>
                           </TotalAmount>
                           <StyledButton
                              variant="contained"
                              onClick={onNavigateGoToCheckoutHandler}
                           >
                              Перейти к оформлению
                           </StyledButton>
                        </OrderAmount>
                     </ProductsAndToolContainer>
                  </AllContainer>
               ) : (
                  <VoidContainer>
                     <Image src={sammyShopping} alt="Basket" />
                     <SecondTitle>Ваша корзина пуста</SecondTitle>
                     <Paragraph>Но вы всегда можете её пополнить</Paragraph>
                     <Button
                        variant="contained"
                        fontSize="1rem"
                        padding="11px 21px"
                        backgroundhover="#E313BF"
                        backgroundactive="#C90EA9"
                        onClick={enterPurchases}
                     >
                        К покупкам
                     </Button>
                  </VoidContainer>
               )}
            </WidthContaniner>
         </Container>
      </>
   )
}, [])
Basket.displayName = 'Basket'
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
const Paragraph = styled('p')`
   color: #1a1a25;
   text-align: center;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 400;
   line-height: 140.023%;
   margin: 0;
   margin-bottom: 2.2222vh;
`
const SecondTitle = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1.25vw;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin-top: 2.7778vh;
   margin-bottom: 1.4815vh;
`
const ToolContainer = styled('div')`
   display: flex;
   gap: 1.667vw;
   align-items: center;
   margin-bottom: 1.406vw;
   height: 1.6667vh;
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
   path {
      fill: #909cb5;
   }
`
const StyledFavoriteButton = styled(FavoriteButton)`
   width: 1.25vw;
   height: 1.25vw;
   path {
      stroke: #909cb5;
   }
   margin-right: 0.313vw;
`
const Products = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.8519vh;
`
const ProductsAndToolContainer = styled('div')`
   display: flex;
   align-items: flex-start;
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
const VoidContainer = styled('div')`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 11.1111vh 0px;
`
const Image = styled('img')`
   width: 20.833vw;
   height: 15.625vw;
`
