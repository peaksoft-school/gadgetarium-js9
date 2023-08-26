import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { dataProductSmartphones } from '../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { QuantityOfProducts } from '../QuantityOfProducts'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'
import { InputColorPalette } from '../../../UI/color/InputColorPalette'
import {
   addCodeColorSubProductRequests,
   addPhotoSubProductRequests,
   collectorSmartphoneParameters,
   createNewProduct,
   deleteHandler,
   onChangeSubProduct,
} from '../../../../../store/addProduct/addProductPartOne.slice'

export const SmartphoneAdvancedOptions = () => {
   const dispatch = useDispatch()
   const [productNum, setProductNum] = useState(0)
   const { productSmartphone, newProduct } = useSelector(
      (state) => state.addProduct
   )

   const onHandleChange = (event) => {
      const { name, value } = event.target

      dispatch(onChangeSubProduct({ name, value, index: productNum }))
   }

   const deleteAndNavigateProductOneHandler = (id) => {
      dispatch(deleteHandler(id))
      setProductNum(0)
   }

   const onProductNumRenderMap = (index) => {
      setProductNum(index)
   }

   const onAddPhotoSmartphone = (photoData) => {
      dispatch(addPhotoSubProductRequests({ index: productNum, photoData }))
   }

   const onCollectorSmartphoneParameters = () => {
      dispatch(createNewProduct(productSmartphone))
      dispatch(collectorSmartphoneParameters())
   }

   const addColorProductSmartphone = (color) => {
      dispatch(addCodeColorSubProductRequests({ index: productNum, color }))
   }

   const newProductFilterData = newProduct.subProductRequests[productNum]

   const productIdValidator =
      newProduct.subProductRequests.indexOf(
         newProduct.subProductRequests[productNum]
      ) === productNum

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorSmartphoneParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={productNum}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />

         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductSmartphone}
                  stateColor={newProductFilterData.codeColor}
               />

               <CategoryFilterSelect
                  title="Объем памяти"
                  label="Выберите объем памяти"
                  selectData={dataProductSmartphones.romSmartphones}
                  value={newProductFilterData.rom}
                  onChange={onHandleChange}
                  name="rom"
               />

               <CategoryFilterSelect
                  title="Оперативная память"
                  label="Выберите оперативную память"
                  selectData={dataProductSmartphones.smartphonesRAM}
                  value={newProductFilterData.ram}
                  onChange={onHandleChange}
                  name="ram"
               />

               <CategoryFilterSelect
                  title="Кол-во SIM-карт"
                  label="Выберите SIM-карты"
                  selectData={dataProductSmartphones.smartphonesSIMcards}
                  value={newProductFilterData.sim}
                  onChange={onHandleChange}
                  name="sim"
               />

               <AddPhotoGadgets
                  onPhotoCollector={onAddPhotoSmartphone}
                  photoStateData={newProductFilterData.images}
               />
            </Container>
         ) : null}
      </div>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.83rem;
   margin-bottom: 1.75rem;
`