import { useState } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
   dataProductWatch,
   radioData,
} from '../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import { QuantityOfProducts } from '../QuantityOfProducts'
import RadioInput from '../../../UI/radioAdmin/RadioInput'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'
import { InputColorPalette } from '../../../UI/color/InputColorPalette'
import {
   onChangeSubProduct,
   collectorWatchParameters,
   createNewProduct,
   deleteHandler,
   addPhotoSubProductRequests,
   addCodeColorSubProductRequests,
} from '../../../../../store/addProduct/addProductPartOne.slice'

export const WatchAdvancedOptions = ({ errorCategory }) => {
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

   const num = productNum || 0

   const newProductFilterData = newProduct?.subProductRequests[num]

   const productIdValidator =
      newProduct?.subProductRequests.indexOf(
         newProduct?.subProductRequests[num]
      ) === num

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorWatchAdvancedOptionsParameters}
            onProductNumRenderMap={onProductNumRenderMap}
            productNum={num}
            deleteHandler={deleteAndNavigateProductOneHandler}
         />
         {productIdValidator ? (
            <Container>
               <InputColorPalette
                  productColor={addColorProductWatch}
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
                  selectData={dataProductWatch.rom}
                  value={newProductFilterData.rom}
                  onChange={onHandleChange}
                  name="rom"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.materialBracelet === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Материал браслета/ремешка"
                  label="Выберите материал браслета/ремешка"
                  selectData={dataProductWatch.bracelet}
                  value={newProductFilterData.materialBracelet}
                  onChange={onHandleChange}
                  name="materialBracelet"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.housingMaterial === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Материал корпуса"
                  label="Выберите материал корпуса"
                  selectData={dataProductWatch.housingMaterial}
                  value={newProductFilterData.housingMaterial}
                  onChange={onHandleChange}
                  name="housingMaterial"
               />

               <CategoryFilterSelect
                  error={newProductFilterData.display === ''}
                  errorcategory={errorCategory ? 'true' : 'false'}
                  title="Диагональ дисплея (дюйм)"
                  label="Выберите диагональ дисплея"
                  selectData={dataProductWatch.display}
                  value={newProductFilterData.display}
                  onChange={onHandleChange}
                  name="display"
               />

               <RadioInput
                  radioData={radioData.genderRadioData}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.gender}
                  productRadioText="gender"
                  label="Пол"
                  error={
                     errorCategory === true
                        ? newProductFilterData.gender === ''
                        : false
                  }
               />

               <RadioInput
                  radioData={radioData.waterproof}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.waterproof}
                  productRadioText="waterproof"
                  label="Водонепроницаемые"
                  error={
                     errorCategory === true
                        ? newProductFilterData.waterproof === ''
                        : false
                  }
               />

               <RadioInput
                  radioData={radioData.anInterface}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.anInterface}
                  productRadioText="anInterface"
                  label="Беспроводные интерфейсы"
                  error={
                     errorCategory === true
                        ? newProductFilterData.anInterface === ''
                        : false
                  }
               />

               <RadioInput
                  radioData={radioData.hullShape}
                  onChangeProductWatchAndResRadio={
                     onChangeProductWatchAndResRadio
                  }
                  value={newProductFilterData.hullShape}
                  productRadioText="hullShape"
                  label="Форма корпуса"
                  error={
                     errorCategory === true
                        ? newProductFilterData.hullShape === ''
                        : false
                  }
               />

               <AddPhotoGadgets
                  onPhotoCollector={onAddPhotoWatch}
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
   margin-bottom: 1.5rem;
`
