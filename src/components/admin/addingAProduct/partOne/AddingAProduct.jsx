import { styled } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, memo } from 'react'
import { HeaderAddingAProduct } from '../HeaderAddingAProduct'
import { FilterCategory } from './selectСategories/FilterCategory'
import { AddNewBrandModal } from './selectСategories/AddNewBrandModal'
import { filterResComponent } from '../../../../utils/helpers/AddFilterResComponent'
import { Button } from '../../../UI/Button'
import { filterCategorySubProduct } from '../../../../store/addProduct/addProductPartOne.slice'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import {
   getAllCategory,
   getBrandAll,
   getSubCategory,
} from '../../../../store/addProduct/addProduct.thunk'

export const AddingAProduct = memo(() => {
   const dispatch = useDispatch()
   const [openModalAddNewBrand, setOpenModalAddNewBrand] = useSearchParams()
   const navigate = useNavigate()
   const { newProduct } = useSelector((state) => state.addProduct)
   const { snackbarHandler } = useSnackbar()
   const [errorCategory, setErrorCategory] = useState(false)

   useEffect(() => {
      dispatch(getAllCategory())
      dispatch(getBrandAll())
   }, [])

   useEffect(() => {
      dispatch(getSubCategory(newProduct.categoryId))
   }, [newProduct.categoryId])

   useEffect(() => {
      if (newProduct.categoryId) {
         dispatch(filterCategorySubProduct())
      }
   }, [newProduct.categoryId])

   const onCloseModalAddNewBrand = () => {
      openModalAddNewBrand.delete('AddingAProduct')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onOpenModalAddNewBrand = () => {
      openModalAddNewBrand.set('AddingAProduct', 'AddNewBrand')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onFilterFinishHandler = () => {
      const valuesArray = Object.values(newProduct)

      const isEmptyOrNull = valuesArray.every(
         (value) => value !== null && value !== ''
      )

      const { subProductRequests } = newProduct

      const resultValidSubProductRequests = subProductRequests.every(
         (request) => {
            const values = Object.values(request)

            return values.every((value) => {
               if (Array.isArray(value)) {
                  return value.length !== 0
               }

               return value !== ''
            })
         }
      )

      if (
         resultValidSubProductRequests &&
         isEmptyOrNull &&
         newProduct.guarantee <= 120
      ) {
         navigate('/admin/add-products-part-2')
      } else if (newProduct.guarantee > 120) {
         snackbarHandler({
            message:
               'Гарантия (месяцев) Должно быть не более 120 месяцев или меньше',
            type: 'error',
         })
      } else {
         snackbarHandler({
            message: 'Bce поле должны быть обязательно заполнены',
            type: 'error',
         })
      }

      setErrorCategory(true)
   }

   const onClose = () => {
      navigate('/')
   }

   return (
      <Container>
         {openModalAddNewBrand.has('AddingAProduct') && (
            <div>
               <AddNewBrandModal
                  openModalAddNewBrand={openModalAddNewBrand}
                  onClose={onCloseModalAddNewBrand}
               />
            </div>
         )}

         <HeaderAddingAProduct title="Добавление товара" pathNumber={1} />

         <div>
            <FilterCategory
               onOpenModalAddNewBrand={onOpenModalAddNewBrand}
               value={newProduct}
               errorCategory={errorCategory}
            />
         </div>

         <div>{filterResComponent(newProduct, errorCategory)}</div>

         {newProduct.categoryId && newProduct.categoryId !== '' && (
            <ContainerButton>
               <Button
                  backgroundhover="#CB11AB"
                  onClick={onClose}
                  variant="outlined"
               >
                  Назад
               </Button>

               <Button
                  onClick={onFilterFinishHandler}
                  variant="contained"
                  padding="0.62rem 1.5rem"
               >
                  Далее
               </Button>
            </ContainerButton>
         )}
      </Container>
   )
})

AddingAProduct.displayName = 'AddingAProduct'

const Container = styled('div')(({ theme }) => ({
   paddingLeft: '6.25rem',
   marginTop: '1.88rem',
   fontFamily: theme.typography.mainFontFamily,
}))

const ContainerButton = styled('div')`
   margin-bottom: 8.38rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 25.8vw;
`
