import { styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { HeaderAddingAProduct } from './HeaderAddingAProduct'
import { FilterCategory } from './selectСategories/FilterCategory'
import { AddNewBrandModal } from './selectСategories/AddNewBrandModal'
import { QuantityOfProducts } from './QuantityOfProducts'

export const AddingAProduct = () => {
   const [openModalAddNewBrand, setOpenModalAddNewBrand] = useSearchParams()

   const onCloseModalAddNewBrand = () => {
      openModalAddNewBrand.delete('AddingAProduct')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onOpenModalAddNewBrand = () => {
      openModalAddNewBrand.set('AddingAProduct', 'AddNewBrand')

      setOpenModalAddNewBrand(openModalAddNewBrand)
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
            <FilterCategory onOpenModalAddNewBrand={onOpenModalAddNewBrand} />
         </div>

         <QuantityOfProducts />
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   paddingLeft: '6.25rem',
   marginTop: '1.88rem',
   fontFamily: theme.typography.mainFontFamily,
}))
