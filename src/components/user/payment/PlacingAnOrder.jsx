import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'
import { StepPayment } from './StepPayment'
import { DeliveryOptions } from './paymentPartOne/DeliveryOptions'
import { MiniBasketOrderPrice } from './UIPayment/miniBasket/MiniBasketOrderPrice'
import { getBasket } from '../../../store/basket/basket.thunk'
import { getUserData } from '../../../store/payment/payment.thunk'

export const breadcrumbs = [
   { path: '/', label: 'Главная' },
   {
      path: '/basket',
      label: 'Корзина',
   },
   { label: 'Оформление заказа' },
]

export const schema = Yup.object().shape({
   lastName: Yup.string().required('Обязательное поле'),
   firstName: Yup.string().required('Обязательное поле'),
   email: Yup.string().required('Обязательное поле'),
   telephone: Yup.string()
      .matches(/^\+996 \(\d{3}\) \d{2}-\d{2}-\d{2}$/, 'Неверный формат номера')
      .required('Обязательное поле'),
   address: Yup.string(),
})

export const PlacingAnOrder = () => {
   const dispatch = useDispatch()
   const [page, setPage] = useState([0])
   const [delivery, setDelivery] = useState(true)
   const { user } = useSelector((state) => state.payment)
   console.log('user: ', user)

   useEffect(() => {
      dispatch(getUserData())
   }, [])

   const formik = useFormik({
      initialValues: {
         lastName: '',
         firstName: '',
         email: '',
         telephone: '',
         address: '',
      },

      validateOnBlur: true,
      validationSchema: schema,
   })

   console.log('ERROR: ', formik.errors)
   console.log('VALUE: ', formik.values)

   useEffect(() => {
      formik.setFieldValue('lastName', user?.lastName || '')
      formik.setFieldValue('firstName', user?.firstName || '')
      formik.setFieldValue('email', user?.email || '')
      formik.setFieldValue('telephone', user?.phoneNumber || '')
   }, [user])

   const onNextHandler = () => {
      const newPage = page.length

      if (page.length !== 0 && page.length !== 3) {
         setPage([...page, newPage])
      }
   }

   const onPickupHandler = () => {
      setDelivery(true)
   }

   const onDeliveryHandler = () => {
      setDelivery(false)
   }

   useEffect(() => {
      dispatch(getBasket())
   }, [])

   return (
      <Container>
         <div>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <BoxTitle>
               <p>Оформление заказа</p>
            </BoxTitle>

            <ContainerStepper>
               <StepPayment page={page} />

               <ContainerMiniBasket>
                  <MiniBasketOrderPrice />
               </ContainerMiniBasket>
            </ContainerStepper>

            <div>
               <DeliveryOptions
                  delivery={delivery}
                  onPickupHandler={onPickupHandler}
                  onDeliveryHandler={onDeliveryHandler}
                  onNextHandler={onNextHandler}
                  formik={formik}
               />
            </div>
         </div>
      </Container>
   )
}

export const Container = styled('div')`
   /* background-color: #f4f4f4; */
   padding: 0 12.1875rem;
   padding-bottom: 7.5rem;
`

export const BoxTitle = styled('div')`
   margin: 1.875rem 0 3rem 0;

   p {
      color: #292929;
      font-family: Ubuntu;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      padding-bottom: 1.25rem;
      margin: 0;
      border-bottom: 0.0625rem solid #cdcdcd;
   }
`

const ContainerMiniBasket = styled('div')`
   position: relative;
`

const ContainerStepper = styled('div')`
   display: flex;
   width: 100%;
   gap: 8vw;
`
