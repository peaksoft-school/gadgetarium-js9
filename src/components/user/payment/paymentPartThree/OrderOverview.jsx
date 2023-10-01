import { useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StepPayment } from '../StepPayment'
import { MiniBasketOrderPrice } from '../UIPayment/miniBasket/MiniBasketOrderPrice'
import { Button } from '../../../UI/Button'
import { typePaymentData } from '../../../../utils/common/constants/paymant'
import {
   postOrderUserData,
   postPayment,
} from '../../../../store/payment/payment.thunk'
import { useSnackbar } from '../../../../hooks/useSnackbar'

export const OrderOverview = ({
   page,
   navigatePartTwoHandler,
   navigatePartOneHandler,
}) => {
   const dispatch = useDispatch()
   const { orderData, token, user, isError, dataSubProductId } = useSelector(
      (state) => state.payment
   )

   const navigate = useNavigate()
   const { basket } = useSelector((state) => state.basket)
   const { snackbarHandler } = useSnackbar()

   const typePaymentConst = orderData.typePayment

   const onNavigatePartOne = () => {
      navigatePartOneHandler()
   }

   const onNavigatePartTwo = () => {
      navigatePartTwoHandler()
   }

   const onOrderOverviewHandler = () => {
      const tel = user.phoneNumber
      const cleanedText = tel.replace(/\D/g, '')
      const userData = {
         ...orderData,
         phoneNumber: `+${cleanedText}`,
         subProductIds: dataSubProductId,
      }

      const data = {
         userData,
         paymentData: { token, amount: basket.toPay },
      }

      if (token !== '') {
         dispatch(postOrderUserData(data.userData))
         dispatch(postPayment(data.paymentData))
      }

      if (token === '') {
         dispatch(postOrderUserData(data.userData))
      }

      navigate('/basket')
   }

   const valueDelivery =
      orderData.typeDelivery === 'DELIVERY' ? orderData.address : 'Самовызов'

   useEffect(() => {
      if (isError) {
         snackbarHandler({ message: 'Что To пошло не так', type: 'error' })
      }
   }, [isError])

   return (
      <ContainerStepper>
         <div>
            <StepPayment page={page} />
            <Container>
               <p className="title">Обзор заказа</p>

               <ContainerAllInfo>
                  <ContainerInfoTotal>
                     <div>
                        <BoxTotalText>Итого</BoxTotalText>
                     </div>

                     <div>
                        <BoxTotalNumber>
                           {basket.toPay.toLocaleString()}{' '}
                           <span className="c"> c</span>
                        </BoxTotalNumber>
                     </div>
                  </ContainerInfoTotal>
                  <ContainerInfo>
                     <div>
                        <p className="info-title">Доставка</p>
                     </div>

                     <div>
                        <p className="info-text">{valueDelivery}</p>
                     </div>

                     <div onClick={onNavigatePartOne}>
                        <p className="change">Изменить</p>
                     </div>
                  </ContainerInfo>
                  <ContainerInfo>
                     <div>
                        <p className="info-title">Оплата</p>
                     </div>

                     <div>
                        <p className="info-text">
                           {typePaymentData[typePaymentConst]}
                        </p>
                     </div>

                     <div onClick={onNavigatePartTwo}>
                        <p className="change">Изменить</p>
                     </div>
                  </ContainerInfo>
               </ContainerAllInfo>

               <ContainerBtn onClick={onOrderOverviewHandler}>
                  <ButtonStyle variant="contained">ОФОРМИТЬ ЗАКАЗ</ButtonStyle>
               </ContainerBtn>
            </Container>
         </div>

         <MiniBasketOrderPrice />
      </ContainerStepper>
   )
}

const ContainerStepper = styled('div')`
   display: flex;
   justify-content: space-between;
`

const Container = styled('div')`
   margin-top: 2.375rem;
   width: 409px;

   p {
      margin: 0;
   }

   display: flex;
   flex-direction: column;

   .title {
      color: #292929;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
   }

   .info-text {
      color: #384255;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      width: 100px;
   }
   .info-title {
      color: #384255;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      width: 73px;
   }
   .change {
      color: #4b7ee8;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      cursor: pointer;
   }
`

const ContainerAllInfo = styled('div')`
   display: flex;
   flex-direction: column;
   margin-top: 2.5rem;
   padding-bottom: 1.25rem;

   border-bottom: 1px solid #858fa433;
`

const ContainerInfoTotal = styled('div')`
   display: flex;
   align-items: center;
   padding-bottom: 0.75rem;

   border-bottom: 1px solid #858fa433;
`

const ContainerInfo = styled('div')`
   display: flex;
   justify-content: space-between;

   margin-top: 1.25rem;
`

const BoxTotalText = styled('p')`
   color: #cb11ab;
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 800;
   line-height: 120%;

   width: 10.4vw;
`

const BoxTotalNumber = styled('p')`
   color: #cb11ab;
   font-size: 1.0625rem;
   font-style: normal;
   font-weight: 700;
   line-height: 135.938%;

   .c {
      border-bottom: 1px solid;
   }
`

const ContainerBtn = styled('div')`
   margin-top: 1.875rem;
`

const ButtonStyle = styled(Button)`
   height: 57px;
   width: 409px;
   color: #fff;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;

   text-transform: uppercase;
`
