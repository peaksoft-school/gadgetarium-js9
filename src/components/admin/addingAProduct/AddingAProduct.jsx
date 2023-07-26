import { styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { HeaderAddingAProduct } from './HeaderAddingAProduct'
import { FilterCategory } from './selectСategories/FilterCategory'
import { AddNewBrandModal } from './selectСategories/AddNewBrandModal'
import { filterResComponent } from '../../../utils/helpers/AddFilterResComponent'

const productsData = {
   category: '',
   subcategory: '',
   brand: '',
   guarantee: '',
   nameProduct: '',
   dateOfIssue: null,
   video: '',
   PDF: '',
   description: '',
   productData: [
      {
         id: '1',
         numProduct: 1,
      },
   ],
}

export const AddingAProduct = () => {
   const [openModalAddNewBrand, setOpenModalAddNewBrand] = useSearchParams()
   const [newProduct, setNewProduct] = useState(productsData)
   console.log('newProduct: ', newProduct)
   // const [value, setValue] = useState({
   //    category: '',
   //    subcategory: '',
   //    brand: '',
   //    guarantee: '',
   //    nameProduct: '',
   //    dateOfIssue: null,
   //    video: '',
   //    PDF: '',
   //    description: '',
   // })

   // console.log('value: ', value)

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
      const resNumProduct = newProduct.productData.length + 1

      const data = {
         id: resNumProduct.toString(),
         numProduct: resNumProduct,
      }

      newProduct.productData.push(data)

      setNewProduct([...newProduct])
   }

   console.log('newProduct.productData: ', newProduct.productData)

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
            <FilterCategory
               onOpenModalAddNewBrand={onOpenModalAddNewBrand}
               value={newProduct}
               onHandleChange={onHandleChange}
               onChangeValueDateHandler={onChangeValueDateHandler}
            />
         </div>

         <div>
            {filterResComponent(newProduct, newProduct, onCreateNewProduct)}
         </div>
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   paddingLeft: '6.25rem',
   marginTop: '1.88rem',
   fontFamily: theme.typography.mainFontFamily,
}))
