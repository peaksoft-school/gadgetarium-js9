import { useEffect, useState, memo } from 'react'
import { styled } from '@mui/material'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { HeaderAddingAProduct } from '../HeaderAddingAProduct'
import { InputUi } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { TablesPartTwo } from './table/TablesPartTwo'
import {
   addAllPriceAndQuantity,
   editNewProductAndReturnNewEditDataHandler,
   rowTableValidBoolean,
} from '../../../../store/addProduct/addProductPartOne.slice'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'
import { useSnackbar } from '../../../../hooks/useSnackbar'

const schema = Yup.object().shape({
   price: Yup.number().required('Обязательное поле'),
   quantity: Yup.number().required('Обязательное поле'),
})

export const QuantityOfGoodsAndPrice = memo(() => {
   const dispatch = useDispatch()
   const { newProduct, rowTableValidBool } = useSelector(
      (state) => state.addProduct
   )
   const [changeBooleanValue, setChangeBooleanValue] = useState(false)
   const navigate = useNavigate()
   const [isErrorValid, setIsErrorValid] = useState(false)
   const { snackbarHandler } = useSnackbar()

   const title = changeBooleanValue ? 'Общая цена' : 'Общая количество'
   const titleBtn = changeBooleanValue ? 'цену' : 'количество'

   const finishedAddPriceAndQuantity = () => {
      const containsFalse = rowTableValidBool.includes(false)

      if (!containsFalse) {
         navigate('/admin/goods/add-products-part-3')
         setIsErrorValid(false)
      } else {
         setIsErrorValid(true)
         snackbarHandler({
            message: 'Bce поле должны быть запонены',
            type: 'error',
         })
      }
   }

   useEffect(() => {
      dispatch(rowTableValidBoolean())
   }, [newProduct.subProductRequests])

   const onCollectorPriceAndQuantity = (values) => {
      dispatch(
         addAllPriceAndQuantity({
            price: +values.price,
            quantity: +values.quantity,
         })
      )
   }

   const onChangeBooleanValuePrice = () => {
      setChangeBooleanValue(true)
   }

   const onChangeBooleanValueQuantity = () => {
      setChangeBooleanValue(false)
   }

   const { values, handleSubmit, setFieldValue } = useFormik({
      initialValues: {
         price: 0,
         quantity: 0,
      },
      onSubmit: onCollectorPriceAndQuantity,
      validateOnBlur: true,
      validationSchema: schema,
   })

   const handleChangeNoMinus = (e) => {
      const newValue = e.target.value

      if (!Number.isNaN(newValue) && newValue >= 0) {
         setFieldValue(e.target.name, newValue)
      }
   }

   useEffect(() => {
      dispatch(editNewProductAndReturnNewEditDataHandler(newProduct))
   }, [])

   return (
      <Container>
         <WidthContainer>
            <BreadCrumbs
               breadcrumbs={[
                  { path: '/admin/goods', label: 'Товары' },

                  { label: 'Установление цены и количества' },
               ]}
            />
            <HeaderAddingAProduct
               title="Установка цены и количества товара"
               pathNumber={2}
            />

            <div className="box">
               <ContainerTotalPriceAndQuanti>
                  <p>{title}</p>

                  <FormStyle onSubmit={handleSubmit}>
                     <InputUi
                        fontSize="1.2rem"
                        borderradius="6px"
                        width="9.1vw"
                        height="47px"
                        type="number"
                        value={
                           changeBooleanValue === true
                              ? values.price
                              : values.quantity
                        }
                        name={
                           changeBooleanValue === true ? 'price' : 'quantity'
                        }
                        onChange={handleChangeNoMinus}
                     />
                     <Button
                        variant="contained"
                        fontSize="1rem"
                        padding="0.75rem 1.625rem"
                        width="140px"
                        type="submit"
                     >
                        Установить {titleBtn}
                     </Button>
                  </FormStyle>
               </ContainerTotalPriceAndQuanti>
               <TablesPartTwo
                  onChangeBooleanValuePrice={onChangeBooleanValuePrice}
                  onChangeBooleanValueQuantity={onChangeBooleanValueQuantity}
                  changeBooleanValue={changeBooleanValue}
                  isErrorValid={isErrorValid}
               />

               <ContainerButton>
                  <Button
                     onClick={finishedAddPriceAndQuantity}
                     padding="10px 1.5rem"
                     fontSize="1rem"
                     variant="contained"
                  >
                     Далее
                  </Button>
               </ContainerButton>
            </div>
         </WidthContainer>
      </Container>
   )
})

QuantityOfGoodsAndPrice.displayName = 'QuantityOfGoodsAndPrice'

const Container = styled('div')`
   display: flex;
   justify-content: center;
   .box {
      display: flex;
      flex-direction: column;
      gap: 3.8125rem;
   }

   margin-bottom: 3.125rem;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
`
const ContainerTotalPriceAndQuanti = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   padding: 0;
   margin-top: 60px;

   p {
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      margin: 0;
   }
`

const FormStyle = styled('form')`
   display: flex;
   gap: 1.25rem;
`

const ContainerButton = styled('div')`
   display: flex;
   justify-content: flex-end;
   align-items: center;
`
