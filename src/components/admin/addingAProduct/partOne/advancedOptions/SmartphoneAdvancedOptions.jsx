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

export const SmartphoneAdvancedOptions = ({ errorCategory }) => {
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

   const num = productNum || 0

   const newProductFilterData = newProduct?.subProductRequests[num]

   const productIdValidator =
      newProduct?.subProductRequests.indexOf(
         newProduct?.subProductRequests[num]
      ) === num

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorSmartphoneParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={num}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />

         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductSmartphone}
                  stateColor={newProductFilterData.codeColor}
                  error={
                     errorCategory === true
                        ? newProductFilterData.codeColor === ''
                        : false
                  }
               />

               <CategoryFilterSelect
                  error={newProductFilterData.rom === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Объем памяти"
                  label="Выберите объем памяти"
                  selectData={dataProductSmartphones.romSmartphones}
                  value={newProductFilterData.rom}
                  onChange={onHandleChange}
                  name="rom"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.ram === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Оперативная память"
                  label="Выберите оперативную память"
                  selectData={dataProductSmartphones.smartphonesRAM}
                  value={newProductFilterData.ram}
                  onChange={onHandleChange}
                  name="ram"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.sim === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
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
   gap: 0.83rem;
   margin-bottom: 1.75rem;
`
