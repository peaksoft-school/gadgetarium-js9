import { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Box } from '../UIPayment/Box'
import { ReactComponent as MasterCard } from '../../../../assets/icons/payment/mastercard.svg'
import { ReactComponent as Visa } from '../../../../assets/icons/payment/visa.svg'
import { ReactComponent as ElCard } from '../../../../assets/icons/payment/элкарт.svg'
import { CheckoutForm } from './CheckoutForm'
import { Button } from '../../../UI/Button'
import { collectorDataPartTwo } from '../../../../store/payment/payment.slice'

const stripePromise = loadStripe(
   'pk_test_51Nax1gA8iPnSdqalkXzMcbIkR51rKA539eoRjaAHLIDoyRcE8KtaFUWrwmOwmqU3lxJRJZrd6PQO4GhT9AcH9KpD00x1MRpIhl'
)

export const PaymentMethod = ({ nextHandler }) => {
   const dispatch = useDispatch()
   const [typePayment, setTypePayment] = useState('CARD_ONLINE')

   const onCashHandlerTypePayment = () => {
      setTypePayment('CASH')
   }

   const onCardOnlineHandlerTypePayment = () => {
      setTypePayment('CARD_ONLINE')
   }

   const onCardOnReceiptHandlerTypePayment = () => {
      setTypePayment('CARD_ON_RECEIPT')
   }

   const onNavigatePartThreeHandler = () => {
      dispatch(collectorDataPartTwo({ typePayment }))
      nextHandler()
   }

   const validTypePayment =
      typePayment !== 'CASH' && typePayment !== 'CARD_ON_RECEIPT'

   return (
      <Container>
         <HeadTitle>Способ оплаты</HeadTitle>

         <ContainerBox>
            <Box
               width="290px"
               onClick={onCardOnlineHandlerTypePayment}
               check={typePayment === 'CARD_ONLINE'}
            >
               <div className="box">
                  <Title>Оплата картой онлайн</Title>

                  <ContainerPaymentIcon>
                     <div>
                        <MasterCard />
                     </div>
                     <div>
                        <Visa />
                     </div>
                     <div>
                        <ElCard />
                     </div>
                  </ContainerPaymentIcon>
               </div>
            </Box>
            <Box
               width="290px"
               onClick={onCardOnReceiptHandlerTypePayment}
               check={typePayment === 'CARD_ON_RECEIPT'}
            >
               <div className="box">
                  <div>
                     <Title>Картой при получении</Title>
                     <span className="span">Предоплата не требуется.</span>
                  </div>

                  <ContainerPaymentIcon>
                     <div>
                        <MasterCard />
                     </div>
                     <div>
                        <Visa />
                     </div>
                     <div>
                        <ElCard />
                     </div>
                  </ContainerPaymentIcon>
               </div>
            </Box>
            <Box
               width="290px"
               onClick={onCashHandlerTypePayment}
               check={typePayment === 'CASH'}
            >
               <div className="box">
                  <div>
                     <Title>Наличными при получении</Title>
                     <span className="span">Предоплата не требуется.</span>
                  </div>
               </div>
            </Box>
         </ContainerBox>

         {validTypePayment && (
            <ContainerCheckout>
               <div>
                  <Elements stripe={stripePromise}>
                     <CheckoutForm
                        nextHandler={nextHandler}
                        typePayment={typePayment}
                     />
                  </Elements>
               </div>

               <div className="box-payment-text">
                  <p>
                     Платеж защищен. Данные карты передаются только в
                     зашифрованном виде по протоколу SSL, защищаются и
                     обрабатываются по стандарту безопасности PCI DSS.
                  </p>
               </div>
            </ContainerCheckout>
         )}

         {!validTypePayment && (
            <BoxBtn>
               <Btn variant="contained" onClick={onNavigatePartThreeHandler}>
                  Продолжить
               </Btn>
            </BoxBtn>
         )}
      </Container>
   )
}

const Container = styled('div')`
   font-family: Inter;
   color: #292929;
   margin-top: 2.375rem;
`

const HeadTitle = styled('div')`
   font-size: 1.5rem;
   font-style: normal;
   font-weight: 700;
   line-height: 110%;
   margin-bottom: 1.875rem;
`

const ContainerBox = styled('div')`
   display: flex;
   gap: 1.875rem;
   .box {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
   }

   .span {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
   }
`

const ContainerPaymentIcon = styled('div')`
   display: flex;
   gap: 0.25rem;
   align-items: center;
`

const Title = styled('p')`
   font-size: 1.125rem;
   font-style: normal;
   font-weight: 700;
   line-height: 150%;
   margin: 0;
`

const ContainerCheckout = styled('div')`
   margin-top: 2.5rem;
   display: flex;
   gap: 2.875rem;
   align-items: center;

   .box-payment-text {
      p {
         width: 440px;
         margin: 0;
         color: #384255;
         font-size: 1rem;
         font-style: normal;
         font-weight: 400;
         line-height: 150%;
      }
   }
`

const BoxBtn = styled('div')`
   margin-top: 1.875rem;

   width: 60.1vw;
   display: flex;
   justify-content: center;
`

const Btn = styled(Button)`
   padding: 0.75rem 10.7vw;

   color: #fff;
   font-size: 1rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
`
