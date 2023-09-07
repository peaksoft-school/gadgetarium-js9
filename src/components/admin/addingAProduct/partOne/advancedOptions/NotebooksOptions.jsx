import { styled } from '@mui/material'
import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataProductNotebooks } from '../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { QuantityOfProducts } from '../QuantityOfProducts'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import { InputColorPalette } from '../../../UI/color/InputColorPalette'
import {
   onChangeSubProduct,
   collectorNotebooksParameters,
   createNewProduct,
   deleteHandler,
   addCodeColorSubProductRequests,
   addPhotoSubProductRequests,
} from '../../../../../store/addProduct/addProductPartOne.slice'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'

export const NotebooksOptions = memo(() => {
   const dispatch = useDispatch()
   const [productNum, setProductNum] = useState(0)
   const { productNotebooks, newProduct } = useSelector(
      (state) => state.addProduct
   )

   const onHandleChange = (event) => {
      const { name, value } = event.target

      dispatch(onChangeSubProduct({ name, value, index: productNum }))
   }

   const addColorProductNotebooks = (color) => {
      dispatch(addCodeColorSubProductRequests({ index: productNum, color }))
   }

   const deleteAndNavigateProductOneHandler = (id) => {
      dispatch(deleteHandler(id))

      setProductNum(0)
   }

   const onAddPhotoNotebooks = (photoData) => {
      dispatch(addPhotoSubProductRequests({ index: productNum, photoData }))
   }

   const onCollectorNotebooksOptionsParameters = () => {
      dispatch(collectorNotebooksParameters())

      dispatch(createNewProduct(productNotebooks))
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
            onCreateNewProduct={onCollectorNotebooksOptionsParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={productNum}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />

         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductNotebooks}
                  stateColor={newProductFilterData.codeColor}
               />

               <CategoryFilterSelect
                  title="Процессор ноутбука"
                  label="Выберите процессор ноутбука"
                  selectData={dataProductNotebooks.processorNotebooks}
                  value={newProductFilterData.processor}
                  onChange={onHandleChange}
                  name="processor"
               />

               <CategoryFilterSelect
                  title="Разрешение экрана"
                  label="Выберите разрешение экрана"
                  selectData={dataProductNotebooks.screenResolutionNotebooks}
                  value={newProductFilterData.screenResolution}
                  onChange={onHandleChange}
                  name="screenResolution"
               />

               <CategoryFilterSelect
                  title="Назначение"
                  label="Выберите назначение"
                  selectData={dataProductNotebooks.purposeNotebooks}
                  value={newProductFilterData.purpose}
                  onChange={onHandleChange}
                  name="purpose"
               />

               <CategoryFilterSelect
                  title="Объем видеопамяти (GB) "
                  label="Выберите объем видеопамяти"
                  selectData={dataProductNotebooks.videoMemoryNotebooks}
                  value={newProductFilterData.videoMemory}
                  onChange={onHandleChange}
                  name="videoMemory"
               />

               <CategoryFilterSelect
                  title="Объем оперативной памяти (GB)"
                  label="Выберите объем оперативной памяти"
                  selectData={dataProductNotebooks.ramNotebooks}
                  value={newProductFilterData.ram}
                  onChange={onHandleChange}
                  name="ram"
               />

               <CategoryFilterSelect
                  title="Размер экрана (дюйм)"
                  label="Выберите размер экрана"
                  selectData={dataProductNotebooks.screenSizeNotebooks}
                  value={newProductFilterData.screenSize}
                  onChange={onHandleChange}
                  name="screenSize"
               />

               <AddPhotoGadgets
                  onPhotoCollector={onAddPhotoNotebooks}
                  photoStateData={newProductFilterData.images}
               />
            </Container>
         ) : null}
      </div>
   )
})

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-bottom: 1.75rem;
`
