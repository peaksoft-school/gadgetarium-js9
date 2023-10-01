import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import { Box } from '../UIPayment/Box'
import { PersonalData } from './PersonalData'
import {
   collectorDataPartOne,
   collectorSubProductId,
   validForm,
} from '../../../../store/payment/payment.slice'
import { useSnackbar } from '../../../../hooks/useSnackbar'

export const DeliveryOptions = ({
   delivery,
   onDeliveryHandler,
   onPickupHandler,
   formik,
   nextHandler,
}) => {
   const dispatch = useDispatch()
   const check = delivery
   const { validBoolean } = useSelector((state) => state.payment)
   const { basketResponses } = useSelector((state) => state.basket)
   const navigate = useNavigate()
   const { snackbarHandler } = useSnackbar()

   const valid = formik.isValid

   const onNextPartTwoHandler = () => {
      const deliveryOptions = {
         true: 'PICKUP',
         false: 'DELIVERY',
      }

      const data = {
         typeDelivery: deliveryOptions[check],
         firstName: formik.values.firstName,
         lastName: formik.values.lastName,
         email: formik.values.email,
         phoneNumber: formik.values.telephone,
         address: formik.values.address,
      }

      if (valid) {
         if (!check) {
            if (formik.values.address !== '') {
               dispatch(collectorDataPartOne({ data, delivery }))
               nextHandler()
               dispatch(validForm(true))
            } else {
               snackbarHandler({
                  message: 'Bce поле должны быть заполнены',
                  type: 'error',
               })
            }
         } else {
            dispatch(collectorDataPartOne({ data, delivery }))
            nextHandler()
            dispatch(validForm(true))
         }
      }

      if (valid === false) {
         snackbarHandler({
            message: 'Bce поле должны быть заполнены',
            type: 'error',
         })

         dispatch(validForm(false))
         return
      }

      if (formik.values.address === '') {
         if (delivery === false) {
            snackbarHandler({
               message: 'Bce поле должны быть заполнены',
               type: 'error',
            })

            dispatch(validForm(false))
            return
         }
      }

      if (validBoolean) {
         if (!check) {
            if (formik.values.address !== '') {
               navigate()
               nextHandler()
            } else {
               snackbarHandler({
                  message: 'Bce поле должны быть заполнены',
                  type: 'error',
               })
            }
         } else {
            navigate()
            nextHandler()
         }
      }

      dispatch(collectorSubProductId(basketResponses))
   }

   return (
      <Container>
         <Title>Варианты доставки</Title>

         <FormContainer>
            <ContainerBox>
               <Box
                  onClick={onPickupHandler}
                  check={check === true}
                  width="290px"
               >
                  <BoxContainer>
                     <BoxTitle>
                        <span>Самовывоз из магазина</span>
                     </BoxTitle>

                     <BoxContainerText>
                        <span className="one">Забрать 20 июля,</span>
                        <span className="two">Бесплатно</span>
                     </BoxContainerText>
                  </BoxContainer>
               </Box>

               <Box
                  check={check === false}
                  width="290px"
                  onClick={onDeliveryHandler}
               >
                  <BoxContainer>
                     <BoxTitle>
                        <span>Доставка курьером</span>
                     </BoxTitle>

                     <BoxContainerText>
                        <span className="one">Забрать 20 июля,</span>
                        <span className="two"> Бесплатно свыше 10 000 c</span>
                        <span className="one">до 10 000 c — от 200 c</span>
                     </BoxContainerText>
                  </BoxContainer>
               </Box>
            </ContainerBox>

            <PersonalData
               onNextHandler={onNextPartTwoHandler}
               delivery={delivery}
               formik={formik}
            />
         </FormContainer>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.375rem;
   color: #292929;
   font-family: Inter;
   font-style: normal;
`

const FormContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   width: 688px;
`

const ContainerBox = styled('div')`
   margin-top: 1.875rem;
   display: flex;
   gap: 1.875rem;
   padding-bottom: 2.5rem;
   border-bottom: 1px solid #cdcdcd;
`

const Title = styled('p')`
   color: #292929;
   font-size: 1.5rem;
   font-weight: 700;
   line-height: 110%;
   margin: 0;
`

const BoxContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.625rem;
   height: 129.8px;
`

const BoxTitle = styled('div')`
   font-size: 1.125rem;
   font-weight: 700;
   line-height: 130%;
`

const BoxContainerText = styled('div')`
   display: flex;
   flex-direction: column;

   .one {
      font-size: 1rem;
      font-weight: 400;
      line-height: 150%;
   }

   .two {
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
   }
`
