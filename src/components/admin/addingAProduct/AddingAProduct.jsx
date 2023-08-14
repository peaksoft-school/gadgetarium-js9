import { styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { format } from 'date-fns'
import { HeaderAddingAProduct } from './HeaderAddingAProduct'
import { FilterCategory } from './selectСategories/FilterCategory'
import { AddNewBrandModal } from './selectСategories/AddNewBrandModal'
import { filterResComponent } from '../../../utils/helpers/AddFilterResComponent'
import { Button } from '../../UI/Button'
import {
   changeValueDateHandler,
   filterCategorySubProduct,
   onChangeProductData,
} from '../../../store/addProduct/addProductPartOne.slice'

export const AddingAProduct = () => {
   const [openModalAddNewBrand, setOpenModalAddNewBrand] = useSearchParams()
   const dispatch = useDispatch()
   const { newProduct } = useSelector((state) => state.addProduct)

   useEffect(() => {
      if (newProduct.category) {
         dispatch(filterCategorySubProduct())
      }
   }, [newProduct.category])

   const onHandleChange = (event) => {
      const { name, value } = event.target

      dispatch(onChangeProductData({ name, value }))
   }

   const onChangeValueDateHandler = (event) => {
      const date = new Date(event.$d)

      const formattedDate = format(date, 'yyyy-MM-dd')

      dispatch(changeValueDateHandler(formattedDate))
   }

   const onCloseModalAddNewBrand = () => {
      openModalAddNewBrand.delete('AddingAProduct')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onOpenModalAddNewBrand = () => {
      openModalAddNewBrand.set('AddingAProduct', 'AddNewBrand')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onFilterFinishHandler = () => {}

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
               onHandleChange={onHandleChange}
               onChangeValueDateHandler={onChangeValueDateHandler}
            />
         </div>

         <div>{filterResComponent(newProduct)}</div>

         {newProduct.category !== '' && (
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
