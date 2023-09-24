import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditColorInput } from '../EditColorInput'
import { EditSelect } from '../EditSelect'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'
import { dataProductNotebooks } from '../../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { editActions } from '../../../../../../store/edit.product/edit.product.slice'

export const LaptopOptions = () => {
   const dispatch = useDispatch()
   const { product } = useSelector((state) => state.editProduct)
   const onHandleChangeNumber = (event) => {
      const { name, value } = event.target

      dispatch(editActions.onChangeSubProductNumber({ name, value }))
   }
   const onHandleChange = (event) => {
      const { name, value } = event.target

      dispatch(editActions.onChangeSubProduct({ name, value }))
   }

   const addColorProductNotebooks = (color) => {
      dispatch(editActions.getColor(color))
   }

   const onAddPhotoNotebooks = (photoData) => {
      dispatch(editActions.addPhotoSubProductRequests(photoData))
   }

   const subProductRequests = product.subProductRequests[0]

   const processor = subProductRequests.processor
      ? dataProductNotebooks.processorNotebooks.find(
           (item) => item.id === subProductRequests?.processor
        )
      : ''
   const purpose = subProductRequests.purpose
      ? dataProductNotebooks.purposeNotebooks.find(
           (item) => item.id === subProductRequests?.purpose
        )
      : ''

   return (
      <div>
         <Container>
            <EditColorInput
               productColor={addColorProductNotebooks}
               stateColor={subProductRequests.codeColor}
            />

            <EditSelect
               label="Выберите процессор ноутбука"
               array={dataProductNotebooks.processorNotebooks}
               value={processor.name ? processor.name : processor}
               onChange={(value) => dispatch(editActions.getProcessor(value))}
               error={subProductRequests.processor === ''}
               name="processor"
            />

            <EditSelect
               error={subProductRequests.screenResolution === ''}
               label="Выберите разрешение экрана"
               array={dataProductNotebooks.screenResolutionNotebooks}
               value={
                  subProductRequests.screenResolution
                     ? subProductRequests.screenResolution
                     : ''
               }
               onChangeEvent={onHandleChange}
               name="screenResolution"
            />

            <EditSelect
               error={subProductRequests.purpose === ''}
               label="Выберите назначение"
               onChange={(value) => dispatch(editActions.getPurpose(value))}
               array={dataProductNotebooks.purposeNotebooks}
               value={purpose.name ? purpose.name : purpose}
               name="purpose"
            />

            <EditSelect
               error={subProductRequests.videoMemory === ''}
               label="Выберите объем видеопамяти"
               array={dataProductNotebooks.videoMemoryNotebooks}
               value={
                  subProductRequests.videoMemory
                     ? subProductRequests.videoMemory
                     : ''
               }
               onChangeEvent={onHandleChangeNumber}
               name="videoMemory"
            />

            <EditSelect
               error={subProductRequests.ram === ''}
               label="Выберите объем оперативной памяти"
               array={dataProductNotebooks.ramNotebooks}
               value={subProductRequests.ram ? subProductRequests.ram : ''}
               onChangeEvent={onHandleChangeNumber}
               name="ram"
            />

            <EditSelect
               error={subProductRequests.screenSize === ''}
               label="Выберите размер экрана"
               array={dataProductNotebooks.screenSizeNotebooks}
               value={
                  subProductRequests.screenSize
                     ? subProductRequests.screenSize
                     : ''
               }
               onChangeEvent={onHandleChangeNumber}
               name="screenSize"
            />

            <AddPhotoGadgets
               onPhotoCollector={onAddPhotoNotebooks}
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
