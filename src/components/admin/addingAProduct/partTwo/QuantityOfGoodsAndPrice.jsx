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
} from '../../../../store/addProduct/addProductPartOne.slice'

const schema = Yup.object().shape({
   price: Yup.number().required('Обязательное поле'),
   quantity: Yup.number().required('Обязательное поле'),
})

export const QuantityOfGoodsAndPrice = memo(() => {
   const dispatch = useDispatch()
   const { newProduct } = useSelector((state) => state.addProduct)
   const [changeBooleanValue, setChangeBooleanValue] = useState(false)
   const navigate = useNavigate()

   const title = changeBooleanValue ? 'Общая цена' : 'Общая количество'

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

   const { values, handleSubmit, errors, setFieldValue } = useFormik({
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

   const finishedAddPriceAndQuantity = () => {
      if (!errors.price && !errors.quantity) {
         navigate('/admin/add-products-part-3')
      }
   }

   const onClose = () => {
      navigate('/admin/add-products-part-1')
   }

   return (
      <Container>
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
                     height="40px"
                     width="9.1vw"
                     type="number"
                     value={
                        changeBooleanValue === true
                           ? values.price
                           : values.quantity
                     }
                     name={changeBooleanValue === true ? 'price' : 'quantity'}
                     onChange={handleChangeNoMinus}
                  />
                  <Button
                     variant="contained"
                     fontSize="1rem"
                     padding="0.75rem 1.625rem"
                     width="140px"
                     type="submit"
                  >
                     Установить цену
                  </Button>
               </FormStyle>
            </ContainerTotalPriceAndQuanti>
            <TablesPartTwo
               onChangeBooleanValuePrice={onChangeBooleanValuePrice}
               onChangeBooleanValueQuantity={onChangeBooleanValueQuantity}
               changeBooleanValue={changeBooleanValue}
            />

            <ContainerButton>
               <Button
                  backgroundHover="#CB11AB"
                  onClick={onClose}
                  variant="outlined"
                  fontSize="1rem"
               >
                  Назад
               </Button>

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
      </Container>
   )
})

QuantityOfGoodsAndPrice.displayName = 'QuantityOfGoodsAndPrice'

const Container = styled('div')`
   margin-left: 6.25rem;

   .box {
      display: flex;
      flex-direction: column;
      gap: 3.8125rem;
   }

   margin-bottom: 3.125rem;
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
   width: 79.688vw;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
