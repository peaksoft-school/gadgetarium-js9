/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import {
   useStripe,
   useElements,
   CardNumberElement,
   CardExpiryElement,
   CardCvcElement,
} from '@stripe/react-stripe-js'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import { Button } from '../../../UI/Button'
import { ReactComponent as MasterCard } from '../../../../assets/icons/payment/mastercard.svg'
import { ReactComponent as Visa } from '../../../../assets/icons/payment/visa.svg'
import { ReactComponent as ElCard } from '../../../../assets/icons/payment/элкарт.svg'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import { collectorDataPartTwo } from '../../../../store/payment/payment.slice'

export const CheckoutForm = ({ typePayment, nextHandler }) => {
   const dispatch = useDispatch()
   const stripe = useStripe()
   const elements = useElements()
   const { snackbarHandler } = useSnackbar()
   const [name, setName] = useState('')
   const [validError, setValidError] = useState(false)

   const handleSubmit = async (event) => {
      event.preventDefault()

      if (!stripe || !elements) {
         return
      }

      const cardNumberElement = elements.getElement(CardNumberElement)

      const dataToken = await stripe.createToken(cardNumberElement)

      if (dataToken.error) {
         snackbarHandler({
            message: dataToken.error.message,
            type: 'error',
         })

         setValidError(true)
      }

      if (name === '') {
         snackbarHandler({
            message: 'заполните Имя владельца',
            type: 'error',
         })

         setValidError(true)
      }

      if (name !== '' && !dataToken.error) {
         setValidError(false)
         nextHandler()

         dispatch(
            collectorDataPartTwo({ typePayment, token: dataToken.token.id })
         )
      }
   }

   const validNameInput = validError && name === ''

   const onChangeNameHandler = (e) => {
      setName(e.target.value)
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <Container>
               <BoxIcon>
                  <ContainerPaymentIcon>
                     <div>
                        <Visa />
                     </div>
                     <div>
                        <MasterCard />
                     </div>
                     <div>
                        <ElCard />
                     </div>
                  </ContainerPaymentIcon>
               </BoxIcon>

               <Label>
                  <span>Номер карты</span>
                  <CardNumberElementStyle
                     options={{
                        style: {
                           base: {
                              fontSize: '18px',
                              fontStyle: 'normal',
                              fontWeight: '500',
                           },
                           invalid: {
                              color: 'red',
                           },
                        },
                     }}
                  />
               </Label>
               <Box>
                  <div>
                     <CardExpiryElementStyle
                        options={{
                           placeholder: 'MM / YY',
                           style: {
                              base: {
                                 fontSize: '18px',
                                 fontStyle: 'normal',
                                 fontWeight: '500',
                                 color: '#292929',
                              },
                              invalid: {
                                 color: 'red',
                              },
                           },
                        }}
                     />
                  </div>

                  <div>
                     <CardCvcElementStyle
                        options={{
                           style: {
                              base: {
                                 fontSize: '18px',
                                 fontStyle: 'normal',
                                 fontWeight: '500',
                                 color: '#292929',
                              },
                              invalid: {
                                 color: 'red',
                              },
                           },
                        }}
                     />
                  </div>
               </Box>

               <BoxNameInput>
                  <Input
                     type="text"
                     placeholder="Имя владельца"
                     value={name}
                     onChange={onChangeNameHandler}
                     error={validNameInput}
                  />
               </BoxNameInput>
            </Container>

            <BoxBtn>
               <Btn variant="contained" type="submit" disabled={!stripe}>
                  Продолжить
               </Btn>
            </BoxBtn>
         </form>
      </div>
   )
}

const Container = styled('div')`
   background-color: #ffffff;
   padding: 1.625rem 1.5rem;
   border-radius: 0.25rem;
   width: 446px;
`

const ContainerPaymentIcon = styled('div')`
   display: flex;
   gap: 1.1rem;
   align-items: center;
`

const BoxIcon = styled('div')`
   width: 100%;
   display: flex;
   justify-content: flex-end;
   margin-bottom: 0.875rem;
`

const Label = styled('label')`
   span {
      color: #91969e;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
   }
`

const CardNumberElementStyle = styled(CardNumberElement)`
   padding: 0.3125rem 0;
   border-bottom: 1px solid #cdcdcd;
`

const Box = styled('div')`
   display: flex;
   margin-top: 1.5rem;
   justify-content: space-between;
`

const CardExpiryElementStyle = styled(CardExpiryElement)`
   width: 7.5rem;
   padding-left: 1.2rem;
   border-bottom: 1px solid #cdcdcd;
`

const CardCvcElementStyle = styled(CardCvcElement)`
   width: 7.125rem;
   padding-left: 2.25rem;
   border-bottom: 1px solid #cdcdcd;
`

const BoxNameInput = styled('div')`
   margin-top: 1.25rem;
`

const Input = styled('input')(({ error }) => ({
   width: '100%',
   padding: '0.5rem',
   outline: 'none',
   border: 'none',
   borderBottom: `1px solid ${error === true ? '#ff0000' : '#cdcdcd'}`,

   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: '150%',
}))

const BoxBtn = styled('div')`
   margin-top: 1.875rem;
`

const Btn = styled(Button)`
   width: 446px;
   height: 44px;
   color: #fff;
   font-size: 1rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
`
