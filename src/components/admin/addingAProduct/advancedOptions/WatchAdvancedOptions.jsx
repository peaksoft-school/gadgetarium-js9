import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
   dataProductWatch,
   radioData,
} from '../../../../utils/common/constants/constantsAdminAddNewProduct'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import { QuantityOfProducts } from '../QuantityOfProducts'
import RadioInput from '../../UI/radioAdmin/RadioInput'
import { AddPhotoGadgets } from '../../UI/addPhotoGadgets/AddPhotoGadgets'
import { InputColorPalette } from '../../UI/color/InputColorPalette'
import {
   onChangeSubProduct,
   collectorWatchParameters,
   createNewProduct,
   deleteHandler,
   addPhotoSubProductRequests,
   addCodeColorSubProductRequests,
} from '../../../../store/addProduct/addProductPartOne.slice'

export const WatchAdvancedOptions = () => {
   const dispatch = useDispatch()
   const { productWatch, newProduct } = useSelector((state) => state.addProduct)
   const [productNum, setProductNum] = useState(0)

   const onHandleChange = (event) => {
      const { name, value } = event.target

      dispatch(onChangeSubProduct({ name, value, index: productNum }))
   }

   const onChangeProductWatchAndResRadio = (name, radioResText) => {
      dispatch(
         onChangeSubProduct({ name, value: radioResText, index: productNum })
      )
   }

   const onCollectorWatchAdvancedOptionsParameters = () => {
      dispatch(collectorWatchParameters())

      dispatch(createNewProduct(productWatch))
   }

   const addColorProductWatch = (color) => {
      dispatch(addCodeColorSubProductRequests({ index: productNum, color }))
   }

   const onAddPhotoWatch = (photoData) => {
      dispatch(addPhotoSubProductRequests({ index: productNum, photoData }))
   }

   const onProductNumRenderMap = (index) => {
      setProductNum(index)
   }

   const deleteAndNavigateProductOneHandler = (id) => {
      dispatch(deleteHandler(id))

      setProductNum(0)
   }

   const newProductFilterData = newProduct.subProductRequests[productNum]

   const productIdValidator =
      newProduct.subProductRequests.indexOf(
         newProduct.subProductRequests[productNum]
      ) === productNum

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorWatchAdvancedOptionsParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={productNum}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />
         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductWatch}
                  stateColor={newProductFilterData.codeColor}
               />

               <CategoryFilterSelect
                  title="Объем памяти"
                  label="Выберите объем памяти"
                  selectData={dataProductWatch.rom}
                  value={newProductFilterData.rom}
                  onChange={onHandleChange}
                  name="rom"
                  star={false}
               />

               <CategoryFilterSelect
                  title="Материал браслета/ремешка"
                  label="Выберите материал браслета/ремешка"
                  selectData={dataProductWatch.bracelet}
                  value={newProductFilterData.materialBracelet}
                  onChange={onHandleChange}
                  name="materialBracelet"
                  star={false}
               />

               <CategoryFilterSelect
                  title="Материал корпуса"
                  label="Выберите материал корпуса"
                  selectData={dataProductWatch.housingMaterial}
                  value={newProductFilterData.housingMaterial}
                  onChange={onHandleChange}
                  name="housingMaterial"
                  star={false}
               />

               <CategoryFilterSelect
                  title="Диагональ дисплея (дюйм)"
                  label="Выберите диагональ дисплея"
                  selectData={dataProductWatch.display}
                  value={newProductFilterData.display}
                  onChange={onHandleChange}
                  name="display"
                  star={false}
               />

               <RadioInput
                  radioData={radioData.genderRadioData}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.gender}
                  productRadioText="gender"
                  label="Пол"
               />

               <RadioInput
                  radioData={radioData.waterproof}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.waterproof}
                  productRadioText="waterproof"
                  label="Водонепроницаемые"
               />

               <RadioInput
                  radioData={radioData.anInterface}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.anInterface}
                  productRadioText="anInterface"
                  label="Беспроводные интерфейсы"
               />

               <RadioInput
                  radioData={radioData.hullShape}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.hullShape}
                  productRadioText="hullShape"
                  label="Форма корпуса"
               />

               <AddPhotoGadgets
                  onPhotoCollector={onAddPhotoWatch}
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
   margin-bottom: 1.5rem;
`
