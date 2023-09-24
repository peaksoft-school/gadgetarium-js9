import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
   dataProductWatch,
   radioData,
} from '../../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { EditColorInput } from '../EditColorInput'
import { EditSelect } from '../EditSelect'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'
import { editActions } from '../../../../../../store/edit.product/edit.product.slice'
import { EditRadioInput } from '../EditRadioInput'

export const SmartWatchOptions = () => {
   const dispatch = useDispatch()
   const { product } = useSelector((state) => state.editProduct)

   const onHandleChangeNumber = (event) => {
      const { name, value } = event.target

      dispatch(editActions.onChangeSubProductNumber({ name, value }))
   }

   const onChangeProductWatchAndResRadio = (name, radioResText) => {
      dispatch(editActions.onChangeSubProduct({ name, value: radioResText }))
   }

   const addColorProductWatch = (color) => {
      dispatch(editActions.getColor(color))
   }

   const onAddPhotoWatch = (photoData) => {
      dispatch(editActions.addPhotoSubProductRequests(photoData))
   }

   const subProductRequests = product.subProductRequests[0]
   const housingMaterial = subProductRequests.housingMaterial
      ? dataProductWatch.housingMaterial.find(
           (item) => item.id === subProductRequests?.housingMaterial
        )
      : ''
   const materialBracelet = subProductRequests.materialBracelet
      ? dataProductWatch.bracelet.find(
           (item) => item.id === subProductRequests?.materialBracelet
        )
      : ''

   return (
      <div>
         <Container>
            <EditColorInput
               productColor={addColorProductWatch}
               stateColor={subProductRequests.codeColor}
            />

            <EditSelect
               error={subProductRequests.rom === ''}
               label="Выберите объем памяти"
               array={dataProductWatch.rom}
               value={subProductRequests.rom ? subProductRequests.rom : ''}
               onChangeEvent={onHandleChangeNumber}
               name="rom"
            />

            <EditSelect
               error={subProductRequests.materialBracelet === ''}
               label="Выберите материал браслета/ремешка"
               array={dataProductWatch.bracelet}
               value={
                  materialBracelet.name
                     ? materialBracelet.name
                     : materialBracelet
               }
               onChange={(e) => dispatch(editActions.getMaterialBracelet(e))}
               name="materialBracelet"
            />

            <EditSelect
               error={subProductRequests.housingMaterial === ''}
               label="Выберите материал корпуса"
               array={dataProductWatch.housingMaterial}
               value={
                  housingMaterial.name ? housingMaterial.name : housingMaterial
               }
               onChange={(e) => dispatch(editActions.getHousingMaterial(e))}
               name="housingMaterial"
            />

            <EditSelect
               error={subProductRequests.diagonalScreen === ''}
               label="Выберите диагональ дисплея"
               array={dataProductWatch.display}
               value={
                  subProductRequests.displayDiscount
                     ? subProductRequests.displayDiscount
                     : ''
               }
               onChangeEvent={onHandleChangeNumber}
               name="displayDiscount"
            />

            <EditRadioInput
               radioData={radioData.genderRadioData}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               value={subProductRequests.gender}
               productRadioText="gender"
               label="Пол"
            />

            <EditRadioInput
               radioData={radioData.waterproof}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               value={subProductRequests.waterproof}
               productRadioText="waterproof"
               label="Водонепроницаемые"
            />

            <EditRadioInput
               radioData={radioData.anInterface}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               value={subProductRequests.anInterface}
               productRadioText="anInterface"
               label="Беспроводные интерфейсы"
            />

            <EditRadioInput
               radioData={radioData.hullShape}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               value={subProductRequests.hullShape}
               productRadioText="hullShape"
               label="Форма корпуса"
            />

            <AddPhotoGadgets
               onPhotoCollector={onAddPhotoWatch}
               photoStateData={subProductRequests.images}
            />
         </Container>
      </div>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   align-items: flex-start;
   margin-bottom: 1.5rem;
`
