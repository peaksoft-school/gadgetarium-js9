import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { EditColorInput } from '../EditColorInput'
import { EditSelect } from '../EditSelect'
import { editActions } from '../../../../../../store/edit.product/edit.product.slice'
import { dataProductTablets } from '../../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'

export const TabletOptions = () => {
   const dispatch = useDispatch()
   const { product } = useSelector((state) => state.editProduct)
   const onHandleChangeNumber = (event) => {
      const { name, value } = event.target

      dispatch(editActions.onChangeSubProductNumber({ name, value }))
   }
   const onHandleChange = (event) => {
      if (event) {
         const { name, value } = event.target

         dispatch(editActions.onChangeSubProduct({ name, value }))
      }
   }

   const addColorProductTablets = (color) => {
      dispatch(editActions.getColor(color))
   }

   const onAddPhotoTablets = (photoData) => {
      dispatch(editActions.addPhotoSubProductRequests(photoData))
   }
   const subProductRequests = product.subProductRequests[0]
   return (
      <div>
         <Container>
            <EditColorInput
               productColor={addColorProductTablets}
               stateColor={subProductRequests.codeColor}
            />

            <EditSelect
               error={subProductRequests.screenResolution === ''}
               label="Выберите разрешение экрана"
               array={dataProductTablets.screenResolutionTablets}
               value={
                  subProductRequests.screenResolution
                     ? subProductRequests.screenResolution
                     : ''
               }
               onChangeEvent={onHandleChange}
               name="screenResolution"
            />

            <EditSelect
               error={subProductRequests.screenSize === ''}
               label="Выберите размер экрана"
               array={dataProductTablets.screenSizeTablets}
               value={
                  subProductRequests.screenSize
                     ? subProductRequests.screenSize
                     : ''
               }
               onChangeEvent={onHandleChangeNumber}
               name="screenSize"
            />

            <EditSelect
               error={subProductRequests.rom === ''}
               label="Выберите объем памяти"
               array={dataProductTablets.romTablets}
               value={subProductRequests.rom ? subProductRequests.rom : ''}
               onChangeEvent={onHandleChangeNumber}
               name="rom"
            />

            <EditSelect
               error={subProductRequests.ram === ''}
               label="Выберите объем оперативной памяти"
               array={dataProductTablets.ramTablets}
               value={subProductRequests.ram ? subProductRequests.ram : ''}
               onChangeEvent={onHandleChangeNumber}
               name="ram"
            />

            <EditSelect
               error={subProductRequests.diagonalScreen === ''}
               label="Выберите диагональ экрана"
               array={dataProductTablets.screenDiagonalTablets}
               value={
                  subProductRequests.diagonalScreen
                     ? subProductRequests.diagonalScreen
                     : ''
               }
               onChangeEvent={onHandleChange}
               name="diagonalScreen"
            />

            <EditSelect
               error={subProductRequests.batteryCapacity === ''}
               label="Выберите емкость аккумулятора"
               array={dataProductTablets.batteryCapacity}
               value={
                  subProductRequests.batteryCapacity
                     ? subProductRequests.batteryCapacity
                     : ''
               }
               onChangeEvent={onHandleChange}
               name="batteryCapacity"
            />

            <AddPhotoGadgets
               onPhotoCollector={onAddPhotoTablets}
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
   margin-bottom: 1.75rem;
`
