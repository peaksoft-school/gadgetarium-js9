import { styled } from '@mui/material'
import { useState } from 'react'
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

export const NotebooksOptions = ({ errorCategory }) => {
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

   const num = productNum || 0

   const newProductFilterData = newProduct?.subProductRequests[num]

   const productIdValidator =
      newProduct?.subProductRequests.indexOf(
         newProduct?.subProductRequests[num]
      ) === num

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorNotebooksOptionsParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={num}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />

         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductNotebooks}
                  stateColor={newProductFilterData.codeColor}
                  error={
                     errorCategory === true
                        ? newProductFilterData.codeColor === ''
                        : false
                  }
               />

               <CategoryFilterSelect
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Процессор ноутбука"
                  label="Выберите процессор ноутбука"
                  selectData={dataProductNotebooks.processorNotebooks}
                  value={newProductFilterData.processor}
                  onChange={onHandleChange}
                  error={newProductFilterData.processor === ''}
                  name="processor"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.screenResolution === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Разрешение экрана"
                  label="Выберите разрешение экрана"
                  selectData={dataProductNotebooks.screenResolutionNotebooks}
                  value={newProductFilterData.screenResolution}
                  onChange={onHandleChange}
                  name="screenResolution"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.purpose === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Назначение"
                  label="Выберите назначение"
                  selectData={dataProductNotebooks.purposeNotebooks}
                  value={newProductFilterData.purpose}
                  onChange={onHandleChange}
                  name="purpose"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.videoMemory === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Объем видеопамяти (GB) "
                  label="Выберите объем видеопамяти"
                  selectData={dataProductNotebooks.videoMemoryNotebooks}
                  value={newProductFilterData.videoMemory}
                  onChange={onHandleChange}
                  name="videoMemory"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.ram === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Объем оперативной памяти (GB)"
                  label="Выберите объем оперативной памяти"
                  selectData={dataProductNotebooks.ramNotebooks}
                  value={newProductFilterData.ram}
                  onChange={onHandleChange}
                  name="ram"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.screenSize === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
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
                  errorcategory={errorCategory ? 'true' : 'false'}
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
