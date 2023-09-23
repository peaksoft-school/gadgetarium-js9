import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'

import { EditSelect } from '../EditSelect'
import { AddPhotoGadgets } from '../addPhotoGadgets/AddPhotoGadgets'
import { dataProductSmartphones } from '../../../../../../utils/common/constants/constantsAdminAddNewProduct'
import { EditColorInput } from '../EditColorInput'
import { editActions } from '../../../../../../store/edit.product/edit.product.slice'

export const SmartphoneOptions = () => {
   const dispatch = useDispatch()
   const { product } = useSelector((state) => state.editProduct)

   const onHandleChangeNumber = (event) => {
      if (event) {
         const { name, value } = event.target

         dispatch(editActions.onChangeSubProductNumber({ name, value }))
      }
   }
   const onAddPhotoSmartphone = (photoData) => {
      dispatch(editActions.addPhotoSubProductRequests(photoData))
   }

   const addColorProductSmartphone = (color) => {
      dispatch(editActions.getColor(color))
   }

   return (
      <div>
         <Container>
            <EditColorInput
               productColor={addColorProductSmartphone}
               stateColor={product.subProductRequests[0].codeColor}
            />
            <EditSelect
               error={product.subProductRequests[0].rom === ''}
               label="Выберите объем памяти"
               star={false}
               array={dataProductSmartphones.romSmartphones}
               value={
                  product.subProductRequests[0].rom
                     ? product.subProductRequests[0].rom
                     : ''
               }
               onChangeEvent={onHandleChangeNumber}
               name="rom"
            />
            <EditSelect
               error={product.subProductRequests[0].ram === ''}
               label="Выберите оперативную память"
               star={false}
               array={dataProductSmartphones.smartphonesRAM}
               value={
                  product.subProductRequests[0].ram
                     ? product.subProductRequests[0].ram
                     : ''
               }
               onChangeEvent={onHandleChangeNumber}
               name="ram"
            />
            <EditSelect
               error={product.subProductRequests[0].sim === 0}
               //   errorcategory={errorCategory ? 'true' : 'false'}
               label="Выберите SIM-карты"
               star={false}
               array={dataProductSmartphones.smartphonesSIMcards}
               value={
                  product.subProductRequests[0].sim
                     ? product.subProductRequests[0].sim
                     : ''
               }
               onChangeEvent={onHandleChangeNumber}
               name="sim"
            />
            <AddPhotoGadgets
               onPhotoCollector={onAddPhotoSmartphone}
               photoStateData={product.subProductRequests[0].images}
               //   errorcategory={errorCategory ? 'true' : 'false'}
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
