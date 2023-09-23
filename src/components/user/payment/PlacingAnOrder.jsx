import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'
import { getBasket } from '../../../store/basket/basket.thunk'
import { getUserData } from '../../../store/payment/payment.thunk'
import { breadcrumbs, schema } from '../../../utils/common/constants/paymant'
import { LayoutPartOnePayment } from './paymentPartOne/LayoutPartOnePayment'
import { StepPayment } from './StepPayment'
import { PaymentMethod } from './paymentPartTwo/PaymentMethod'
import { OrderOverview } from './paymentPartThree/OrderOverview'
import { FinishModal } from './FinishModal'

export const PlacingAnOrder = () => {
   const dispatch = useDispatch()
   const [page, setPage] = useState([0])
   const [delivery, setDelivery] = useState(true)
   const { user } = useSelector((state) => state.payment)

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

   useEffect(() => {
      formik.setFieldValue('lastName', user?.lastName || '')
      formik.setFieldValue('firstName', user?.firstName || '')
      formik.setFieldValue('email', user?.email || '')
      formik.setFieldValue('telephone', user?.phoneNumber || '')
   }, [user])

   const onPickupHandler = () => {
      setDelivery(true)
   }

   const onDeliveryHandler = () => {
      setDelivery(false)
   }

   useEffect(() => {
      dispatch(getBasket())
   }, [])

   const nextHandler = () => {
      const newPage = page.length
      if (page.length !== 0 && page.length !== 3) {
         setPage([...page, newPage])
      }
   }

   const navigatePartOneHandler = () => {
      setPage([0])
   }

   const navigatePartTwoHandler = () => {
      setPage([0, 1])
   }

   return (
      <Container>
         <div>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <BoxTitle>
               <p>Оформление заказа</p>
            </BoxTitle>

            <FinishModal />

            {page.length === 2 && <StepPayment page={page} />}

            {page.length === 1 && (
               <LayoutPartOnePayment
                  onPickupHandler={onPickupHandler}
                  onDeliveryHandler={onDeliveryHandler}
                  setPage={setPage}
                  delivery={delivery}
                  page={page}
                  formik={formik}
                  nextHandler={nextHandler}
               />
            )}

            {page.length === 2 && <PaymentMethod nextHandler={nextHandler} />}

            {page.length === 3 && (
               <OrderOverview
                  page={page}
                  navigatePartOneHandler={navigatePartOneHandler}
                  navigatePartTwoHandler={navigatePartTwoHandler}
               />
            )}
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
