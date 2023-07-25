import { styled } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { HeaderAddingAProduct } from './HeaderAddingAProduct'
import { FilterCategory } from './selectСategories/FilterCategory'
import { AddNewBrandModal } from './selectСategories/AddNewBrandModal'
import { SmartphoneAdvancedOptions } from './advancedOptions/SmartphoneAdvancedOptions'

const productData = [[], [{ id: '1', numProduct: 1 }], []]

export const AddingAProduct = () => {
   const [openModalAddNewBrand, setOpenModalAddNewBrand] = useSearchParams()
   const [newProduct, setNewProduct] = useState(productData)
   const [value, setValue] = useState({
      category: '',
      subcategory: '',
      brand: '',
      guarantee: '',
      nameProduct: '',
      dateOfIssue: '',
   })

   const onHandleChange = (event) => {
      const { name, value } = event.target

      setValue((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const onCreateNewProduct = () => {
      const resNumProduct = newProduct[1].length + 1

      const data = {
         id: resNumProduct.toString(),
         numProduct: resNumProduct,
      }

      newProduct[1].push(data)

      setNewProduct([...newProduct])
   }

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
               value={value}
               onHandleChange={onHandleChange}
            />
         </div>

         <div>
            {/* {value.category === 'Смартфоны' && ( */}
            <SmartphoneAdvancedOptions
               newProduct={newProduct}
               onCreateNewProduct={onCreateNewProduct}
            />
            {/* )} */}
         </div>
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   paddingLeft: '6.25rem',
   marginTop: '1.88rem',
   fontFamily: theme.typography.mainFontFamily,
}))

export const productsData = [
   [
      {
         cmat: '',
         num: 1,
      },
   ],
   [{ id: '1', numProduct: 1 }],
   [
      // {
      //    smartphoneAdvancedOptions: [],
      // },
      // {
      //    watchAdvancedOptions: [],
      // },
      // {
      //    macAdvancedOptions: [],
      // },
   ],
]
