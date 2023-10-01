import { styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataProductTablets } from '../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { QuantityOfProducts } from '../QuantityOfProducts'
import { InputColorPalette } from '../../../UI/color/InputColorPalette'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'
import {
   addCodeColorSubProductRequests,
   addPhotoSubProductRequests,
   collectorTabletsParameters,
   createNewProduct,
   deleteHandler,
   onChangeSubProduct,
} from '../../../../../store/addProduct/addProductPartOne.slice'

export const TabletsOptions = ({ errorCategory }) => {
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

   const num = productNum || 0

   const newProductFilterData = newProduct?.subProductRequests[num]

   const productIdValidator =
      newProduct?.subProductRequests.indexOf(
         newProduct?.subProductRequests[num]
      ) === num

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorTabletsParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={num}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />

         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductTablets}
                  stateColor={newProductFilterData.codeColor}
                  error={
                     errorCategory === true
                        ? newProductFilterData.codeColor === ''
                        : false
                  }
               />

               <CategoryFilterSelect
                  error={newProductFilterData.screenResolution === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Разрешение экрана"
                  label="Выберите разрешение экрана"
                  selectData={dataProductTablets.screenResolutionTablets}
                  value={newProductFilterData.screenResolution}
                  onChange={onHandleChange}
                  name="screenResolution"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.screenSize === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Размер экрана (дюйм)"
                  label="Выберите размер экрана"
                  selectData={dataProductTablets.screenSizeTablets}
                  value={newProductFilterData.screenSize}
                  onChange={onHandleChange}
                  name="screenSize"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.rom === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Объем памяти (GB)"
                  label="Выберите объем памяти"
                  selectData={dataProductTablets.romTablets}
                  value={newProductFilterData.rom}
                  onChange={onHandleChange}
                  name="rom"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.ram === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Объем оперативной памяти (GB)"
                  label="Выберите объем оперативной памяти"
                  selectData={dataProductTablets.ramTablets}
                  value={newProductFilterData.ram}
                  onChange={onHandleChange}
                  name="ram"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.diagonalScreen === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Диагональ экрана (дюйм)"
                  label="Выберите диагональ экрана"
                  selectData={dataProductTablets.screenDiagonalTablets}
                  value={newProductFilterData.diagonalScreen}
                  onChange={onHandleChange}
                  name="diagonalScreen"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.batteryCapacity === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
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
