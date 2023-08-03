import { styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { HeaderAddingAProduct } from './HeaderAddingAProduct'
import { FilterCategory } from './selectСategories/FilterCategory'
import { AddNewBrandModal } from './selectСategories/AddNewBrandModal'
import { filterResComponent } from '../../../utils/helpers/AddFilterResComponent'
import { Button } from '../../UI/Button'

const productsData = {
   categoryId: '',
   category: '',
   subcategory: '',
   brand: '',
   guarantee: '',
   name: '',
   dateOfIssue: null,
   subProductRequests: [
      {
         id: '1',
      },
   ],
}

export const AddingAProduct = () => {
   const [openModalAddNewBrand, setOpenModalAddNewBrand] = useSearchParams()
   const [newProduct, setNewProduct] = useState(productsData)

   const onHandleChange = (event) => {
      const { name, value } = event.target

      setNewProduct((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const onChangeValueDateHandler = (event) => {
      const date = new Date(event.$d)

      const formattedDate = format(date, 'yyyy-MM-dd')

      setNewProduct((prev) => ({
         ...prev,
         dateOfIssue: formattedDate,
      }))
   }

   const onCreateNewProduct = () => {
      const resNumProduct = newProduct.subProductRequests.length + 1

      const data = {
         id: resNumProduct.toString(),
         numProduct: resNumProduct,
      }
      const updatedProductData = [...newProduct.subProductRequests, data]

      const updatedNewProduct = {
         ...newProduct,
         subProductRequests: updatedProductData,
      }

      setNewProduct(updatedNewProduct)
   }

   const onCloseModalAddNewBrand = () => {
      openModalAddNewBrand.delete('AddingAProduct')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onOpenModalAddNewBrand = () => {
      openModalAddNewBrand.set('AddingAProduct', 'AddNewBrand')

      setOpenModalAddNewBrand(openModalAddNewBrand)
   }

   const onCollectorParameters = (parametersData) => {
      const res = newProduct.subProductRequests.map((item) => {
         const data = { ...item, parameters: parametersData }

         return data
      })

      setNewProduct(res)
   }

   const onFurtherHandler = () => {
      console.log('finished result: ', newProduct)
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
               onHandleChange={onHandleChange}
               onChangeValueDateHandler={onChangeValueDateHandler}
            />
         </div>

         <div>
            {filterResComponent(
               newProduct,
               onCreateNewProduct,
               onCollectorParameters
            )}
         </div>

         {newProduct.category !== '' && (
            <ContainerButton>
               <Button
                  onClick={onFurtherHandler}
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
