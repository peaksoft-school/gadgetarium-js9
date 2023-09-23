import { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { EditSelect } from './EditSelect'
import { BrandSelect } from './BrandSelect'
import { EditInput } from './EditInput'
import { getSubCategory } from '../../../../../store/edit.product/edit.product.thunk'
import { Calendar } from '../../../../UI/calendarFolder/Calendar'
import { schema } from '../../../../../utils/helpers/filterCategory'
import { editActions } from '../../../../../store/edit.product/edit.product.slice'
import {
   categoryProduct,
   subProductDataCategory,
} from '../../../../../utils/common/constants/constantsAdminAddNewProduct'

export const FirstSelectContainer = ({ onChange, value }) => {
   const { product, subCategories, allCategory, brandAll, getProduct } =
      useSelector((state) => state.editProduct)
   const dispatch = useDispatch()
   const { values, handleChange, errors, handleBlur, setFieldValue } =
      useFormik({
         initialValues: {
            name: '',
            guarantee: '',
            dateOfIssue: null,
         },
         validateOnBlur: true,
         validationSchema: schema,
      })
   const [categoryValue, setCategoryValue] = useState('')
   const [subCategoryValue, setSubCategoryValue] = useState('')
   const [brandValue, setBrandValue] = useState('')

   const onChangeValueDateHandler = (event) => {
      setFieldValue('dateOfIssue', new Date(event))
   }
   const getCategoryId = (value) => {
      setSubCategoryValue('')
      dispatch(editActions.getCategoryId(value))
      if (categoryProduct[getProduct?.categoryTitle] !== value && value) {
         dispatch(editActions.resetSubProductRequest(value))
      }
   }

   useEffect(() => {
      setFieldValue('name', getProduct.productName)
      setFieldValue('guarantee', getProduct.productGuarantee)
      setFieldValue('dateOfIssue', getProduct.productDataOfIssue)
   }, [getProduct])
   useEffect(() => {
      if (product.categoryId !== 0) {
         dispatch(getSubCategory(product.categoryId))
      }
   }, [product.categoryId])
   useEffect(() => {
      if (allCategory.length !== 0) {
         setCategoryValue(categoryProduct[getProduct.categoryTitle] || '')
      }
   }, [allCategory, getProduct])
   useEffect(() => {
      onChange(values)
   }, [value])
   useEffect(() => {
      if (subCategories.length !== 0) {
         const checkChange = subCategories.some(
            (el) =>
               el.name === subProductDataCategory[getProduct.subCategoryTitle]
         )
         if (checkChange) {
            setSubCategoryValue(
               subProductDataCategory[getProduct.subCategoryTitle] || ''
            )
         }
      }
   }, [subCategories, getProduct])
   useEffect(() => {
      if (brandAll.length !== 0) {
         setBrandValue(getProduct.brandTitle || '')
      }
   }, [brandAll, getProduct])
   return (
      <Container>
         <EditSelect
            value={allCategory.length !== 0 ? categoryValue : ''}
            star
            onChange={getCategoryId}
            label="Выберите категорию"
            name="categoryId"
            array={allCategory}
         />
         {product.categoryId ? (
            <>
               <EditSelect
                  star
                  value={subCategories.length !== 0 ? subCategoryValue : ''}
                  onChange={(value) =>
                     dispatch(editActions.getSubCategoryId(value))
                  }
                  label="Выберите подкатегорию"
                  name="subCategoryId"
                  array={subCategories}
               />
               <BrandSelect
                  value={brandAll.length !== 0 ? brandValue : ''}
                  onChange={(value) => dispatch(editActions.getBrandId(value))}
                  label="Бренд"
                  array={brandAll}
                  name="brandId"
               />
               <EditInput
                  handleChange={(e) => {
                     const newValue = e.target.value
                     if (newValue > 120) {
                        setFieldValue('guarantee', '120')
                     } else {
                        setFieldValue('guarantee', newValue)
                     }
                  }}
                  value={values.guarantee}
                  error={!!errors.guarantee}
                  type="number"
                  label="Гарантия (месяцев)"
                  name="guarantee"
               />

               <EditInput
                  handleChange={handleChange}
                  value={values.name}
                  error={!!errors.name}
                  type="text"
                  label="Название товара"
                  name="name"
               />
               <BoxLabel>
                  <p>Дата выпуска</p>

                  <StyledCalendar
                     placeholder="Введите дату выпуска"
                     value={
                        getProduct
                           ? dayjs(new Date(values.dateOfIssue))
                           : values.dateOfIssue
                     }
                     onChange={onChangeValueDateHandler}
                     name="dateOfIssue"
                     width="24.7rem"
                     padding="0.8rem 0.75rem 0.8rem 0rem"
                     onBlur={handleBlur('dateOfIssue')}
                     height="39px"
                     marginTop="-7px"
                     //  error={
                     //     errorCategory === true
                     //        ? Boolean(errors.dateOfIssue)
                     //        : false
                     //  }
                     fontSize="1rem"
                  />
               </BoxLabel>
            </>
         ) : (
            ''
         )}
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 16px;
   width: 812px;
`
const StyledCalendar = styled(Calendar)`
   .MuiInputBase-input {
      font-family: Inter;
      color: #292929;
      font-weight: 400;
      font-size: 1rem;
   }
   label {
      font-family: Inter;
      color: #292929;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4375em;
   }
`
const BoxLabel = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 10px;

   input {
      ::placeholder {
         color: rgba(0, 0, 0, 0.6) !important;
         opacity: 1;
         font-family: Ubuntu;
         font-weight: 400;
         font-size: 1rem;
         line-height: 1.4375em;
      }
   }

   label {
      color: rgba(0, 0, 0, 0.6) !important;
      opacity: 1;
      font-family: Ubuntu;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4375em;
   }

   p {
      color: #384255;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0;

      margin: 0;
      padding: 0;

      ::after {
         content: ' *';
         color: red;
      }
   }
`
