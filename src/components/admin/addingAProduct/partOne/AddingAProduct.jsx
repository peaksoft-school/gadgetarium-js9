import { styled } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { HeaderAddingAProduct } from '../HeaderAddingAProduct'
import { FilterCategory } from './selectСategories/FilterCategory'
import { AddNewBrandModal } from './selectСategories/AddNewBrandModal'
import { filterResComponent } from '../../../../utils/helpers/AddFilterResComponent'
import { Button } from '../../../UI/Button'
import { filterCategorySubProduct } from '../../../../store/addProduct/addProductPartOne.slice'

export const AddingAProduct = () => {
   const dispatch = useDispatch()
   const [openModalAddNewBrand, setOpenModalAddNewBrand] = useSearchParams()
   const navigate = useNavigate()
   const { newProduct } = useSelector((state) => state.addProduct)

   useEffect(() => {
      if (newProduct.category) {
         dispatch(filterCategorySubProduct())
      }
   }, [newProduct.category])

   const onCloseModalAddNewBrand = () => {
      openModalAddNewBrand.delete('AddingAProduct')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onOpenModalAddNewBrand = () => {
      openModalAddNewBrand.set('AddingAProduct', 'AddNewBrand')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onFilterFinishHandler = () => {
      if (
         newProduct.subProductRequests[0].codeColor &&
         newProduct.dateOfIssue
      ) {
         navigate('/admin/add-products-part-2')
      }
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
            />
         </div>

         <div>{filterResComponent(newProduct)}</div>

         {newProduct.category && newProduct.category !== '' && (
            <ContainerButton>
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
}

const Container = styled('div')(({ theme }) => ({
   paddingLeft: '6.25rem',
   marginTop: '1.88rem',
   fontFamily: theme.typography.mainFontFamily,
}))

const ContainerButton = styled('div')`
   margin-left: 18.6rem;
   margin-bottom: 8.38rem;
`
