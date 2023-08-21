import { styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataProductTablets } from '../../../../utils/common/constants/constantsAdminAddNewProduct'
import { QuantityOfProducts } from '../QuantityOfProducts'
import { InputColorPalette } from '../../UI/color/InputColorPalette'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import { AddPhotoGadgets } from '../../UI/addPhotoGadgets/AddPhotoGadgets'
import {
   addCodeColorSubProductRequests,
   addPhotoSubProductRequests,
   collectorTabletsParameters,
   createNewProduct,
   deleteHandler,
   onChangeSubProduct,
} from '../../../../store/addProduct/addProductPartOne.slice'

export const TabletsOptions = () => {
   const dispatch = useDispatch()
   const [productNum, setProductNum] = useState(0)
   const { productTablets, newProduct } = useSelector(
      (state) => state.addProduct
   )

   const onHandleChange = (event) => {
      const { name, value } = event.target

      dispatch(onChangeSubProduct({ name, value, index: productNum }))
   }

   const addColorProductTablets = (color) => {
      dispatch(addCodeColorSubProductRequests({ index: productNum, color }))
   }

   const deleteAndNavigateProductOneHandler = (id) => {
      dispatch(deleteHandler(id))

      setProductNum(0)
   }

   const onCollectorTabletsParameters = () => {
      dispatch(collectorTabletsParameters())

      dispatch(createNewProduct(productTablets))
   }

   const onAddPhotoTablets = (photoData) => {
      dispatch(addPhotoSubProductRequests({ index: productNum, photoData }))
   }

   const onProductNumRenderMap = (index) => {
      setProductNum(index)
   }

   const newProductFilterData = newProduct.subProductRequests[productNum]

   const productIdValidator =
      newProduct.subProductRequests.indexOf(
         newProduct.subProductRequests[productNum]
      ) === productNum

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorTabletsParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={productNum}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />

         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductTablets}
                  stateColor={newProductFilterData.codeColor}
               />

               <CategoryFilterSelect
                  title="Разрешение экрана"
                  label="Выберите разрешение экрана"
                  selectData={dataProductTablets.screenResolutionTablets}
                  value={newProductFilterData.screenResolution}
                  onChange={onHandleChange}
                  name="screenResolution"
               />

               <CategoryFilterSelect
                  title="Размер экрана (дюйм)"
                  label="Выберите размер экрана"
                  selectData={dataProductTablets.screenSizeTablets}
                  value={newProductFilterData.screenSize}
                  onChange={onHandleChange}
                  name="screenSize"
               />

               <CategoryFilterSelect
                  title="Объем памяти (GB)"
                  label="Выберите объем памяти"
                  selectData={dataProductTablets.romTablets}
                  value={newProductFilterData.rom}
                  onChange={onHandleChange}
                  name="rom"
               />

               <CategoryFilterSelect
                  title="Объем оперативной памяти (GB)"
                  label="Выберите объем оперативной памяти"
                  selectData={dataProductTablets.ramTablets}
                  value={newProductFilterData.ram}
                  onChange={onHandleChange}
                  name="ram"
               />

               <CategoryFilterSelect
                  title="Диагональ экрана (дюйм)"
                  label="Выберите диагональ экрана"
                  selectData={dataProductTablets.screenDiagonalTablets}
                  value={newProductFilterData.diagonalScreen}
                  onChange={onHandleChange}
                  name="diagonalScreen"
               />

               <CategoryFilterSelect
                  title="Емкость аккумулятора планшета, мА/ч"
                  label="Выберите емкость аккумулятора"
                  selectData={dataProductTablets.batteryCapacity}
                  value={newProductFilterData.batteryCapacity}
                  onChange={onHandleChange}
                  name="batteryCapacity"
               />

               <AddPhotoGadgets
                  onPhotoCollector={onAddPhotoTablets}
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
   gap: 1rem;
   margin-bottom: 1.75rem;
`
