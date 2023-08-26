import { styled } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { HeaderAddingAProduct } from '../HeaderAddingAProduct'
import { InputUi } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { TablesPartTwo } from './table/TablesPartTwo'

const schema = Yup.object().shape({
   price: Yup.number().required('Обязательное поле').min(3).max(9999999),
   quantity: Yup.number().required('Обязательное поле').min(1).max(9999),
})

export const QuantityOfGoodsAndPrice = () => {
   const title = 'Общая цена'

   const onSubmit = (values) => {
      console.log('values: ', values)
   }

   const { values, handleChange, errors, handleBlur, handleSubmit } = useFormik(
      {
         initialValues: {
            price: 0,
            quantity: 0,
         },
         onSubmit,
         validateOnBlur: true,
         validationSchema: schema,
      }
   )

   console.log('values: ', values)

   console.log('errors: ', errors)

   return (
      <Container>
         <HeaderAddingAProduct
            title="Установка цены и количества товара"
            pathNumber={2}
         />

         <ContainerTotalPriceAndQuanti>
            <p>{title}</p>

            <FormStyle onSubmit={handleSubmit}>
               <InputUi
                  fontSize="1.2rem"
                  borderradius="6px"
                  height="40px"
                  width="9.1vw"
                  type="number"
                  value={values.price}
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
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

         <TablesPartTwo />
      </Container>
   )
}

const Container = styled('div')`
   margin-left: 6.25rem;
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
