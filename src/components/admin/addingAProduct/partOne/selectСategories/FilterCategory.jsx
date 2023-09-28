import { useFormik } from 'formik'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CategoryFilterSelect } from './CategoryFilterSelect'
import { InputUi } from '../../../../UI/Input'
import { ReactComponent as SelectLabelIcons } from '../../../../../assets/icons/photo-add/add-photo-icon.svg'
import { Calendar } from '../../../../UI/calendarFolder/Calendar'
import { collectorProductData } from '../../../../../store/addProduct/addProductPartOne.slice'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { schema } from '../../../../../utils/helpers/filterCategory'

export const FilterCategory = ({ onOpenModalAddNewBrand, errorCategory }) => {
   const dispatch = useDispatch()
   const { snackbarHandler } = useSnackbar()
   const { allCategory, newProduct, subCategories, brandAll } = useSelector(
      (state) => state.addProduct
   )

   const { values, handleChange, errors, handleBlur, setFieldValue } =
      useFormik({
         initialValues: {
            categoryId: '',
            brandId: '',
            name: '',
            subCategoryId: '',
            guarantee: '',
            dateOfIssue: null,
         },
         validateOnBlur: true,
         validationSchema: schema,
      })

   useEffect(() => {
      dispatch(collectorProductData(values))
   }, [values])

   const onChangeValueDateHandler = (event) => {
      setFieldValue('dateOfIssue', new Date(event.$d))
   }

   useEffect(() => {
      setFieldValue('subcategory', '')
   }, [newProduct?.categoryId])

   useEffect(() => {
      if (errorCategory) {
         if (errors) {
            if (errors.guarantee) {
               snackbarHandler({
                  message:
                     'Гарантия (месяцев) Должно быть не более 120 месяцев или меньше',
                  type: 'error',
               })
            }

            snackbarHandler({
               message: 'Bce поле должны быть обязательно заполнены',
               type: 'error',
            })
         }
      }
   }, [errorCategory])

   const guaranteeOnBlur = (e) => {
      handleBlur(e)
   }

   const onBlurAndErrorSnackbar = (e) => {
      handleBlur(e)
   }

   return (
      <Container>
         <div className="box">
            <CategoryFilterSelect
               label="Выбрать"
               title="Выберите категорию"
               selectData={allCategory}
               value={
                  values.categoryId === undefined || null
                     ? ''
                     : values.categoryId
               }
               onChange={handleChange}
               onBlur={(e) => onBlurAndErrorSnackbar(e)}
               name="categoryId"
               error={Boolean(errors.categoryId)}
               star
               errorcategory={errorCategory ? 'true' : 'false'}
            />

            <CategoryFilterSelect
               onOpenModalAddNewBrand={onOpenModalAddNewBrand}
               label={
                  <BoxIconSelect>
                     <SelectLabelIconsStyle /> Выберите бренд товара
                  </BoxIconSelect>
               }
               value={values.brandId}
               onChange={handleChange}
               newBrand
               name="brandId"
               image
               title="Бренд"
               selectData={brandAll}
               star
               error={Boolean(errors.brandId)}
               onBlur={(e) => onBlurAndErrorSnackbar(e)}
               errorcategory={errorCategory ? 'true' : 'false'}
            />

            <BoxLabel>
               <p>Название товара</p>
               <InputUi
                  type="text"
                  padding="0.5rem 0"
                  placeholder="Введите название товара"
                  width="24.75rem"
                  height="2.6rem"
                  name="name"
                  value={values.name}
                  onBlur={(e) => onBlurAndErrorSnackbar(e)}
                  onChange={handleChange}
                  error={errorCategory === true ? Boolean(errors.name) : false}
                  errorcategory={errorCategory ? 'true' : 'false'}
               />
            </BoxLabel>
         </div>

         <div className="box">
            <CategoryFilterSelect
               title="Выберите подкатегорию"
               label="Выбрать"
               selectData={subCategories}
               value={values.subCategoryId}
               name="subCategoryId"
               onBlur={(e) => onBlurAndErrorSnackbar(e)}
               star
               onChange={handleChange}
               errorcategory={errorCategory ? 'true' : 'false'}
               error={Boolean(errors.subCategoryId)}
            />

            <BoxLabel>
               <p>Гарантия (месяцев)</p>

               <InputUi
                  type="number"
                  padding="0.5rem 0"
                  placeholder="Введите гарантию товара"
                  width="24.75rem"
                  height="2.6rem"
                  onBlur={(e) => guaranteeOnBlur(e)}
                  min={1}
                  max={3}
                  value={values.guarantee}
                  name="guarantee"
                  onChange={handleChange}
                  error={
                     errorCategory === true ? Boolean(errors.guarantee) : false
                  }
               />
            </BoxLabel>

            <BoxLabel>
               <p>Дата выпуска</p>

               <Calendar
                  placeholder="Введите дату выпуска"
                  value={values.dateOfIssue}
                  onChange={onChangeValueDateHandler}
                  name="dateOfIssue"
                  width="24.7rem"
                  padding="0.8rem 0.75rem 0.8rem 0rem"
                  onBlur={handleBlur('dateOfIssue')}
                  height="2.7rem"
                  marginTop="-7px"
                  error={
                     errorCategory === true
                        ? Boolean(errors.dateOfIssue)
                        : false
                  }
                  fontSize="1rem"
               />
            </BoxLabel>
         </div>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 3.75rem;

   display: flex;
   gap: 1.25rem;

   .box {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }
`

const SelectLabelIconsStyle = styled(SelectLabelIcons)`
   width: 1.25rem;
   height: 1.25rem;
`

const BoxIconSelect = styled('div')`
   height: 1.25rem;
   display: flex;
   gap: 0.62rem;
   align-items: center;
`

const BoxLabel = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.38rem;

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
      margin: 0;
      padding: 0;

      ::after {
         content: ' *';
         color: red;
      }
   }
`
