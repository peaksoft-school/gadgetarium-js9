import React, { useState } from 'react'
import { styled } from '@mui/material'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import {
   dataProductWatch,
   radioData,
} from '../../../../utils/common/constants/constantsAdminAddNewProduct'
import { QuantityOfProducts } from '../QuantityOfProducts'
import RadioInput from '../../../UI/icon.input/RadioInput'
import { AddPhotoGadgets } from '../../UI/addPhotoGadgets/AddPhotoGadgets'
import { InputColorPalette } from '../../UI/color/InputColorPalette'

export const WatchAdvancedOptions = ({ onCreateNewProduct, newProduct }) => {
   const [productWatch, setProductWatch] = useState({
      rom: '',
      codeColor: '',
      materialBracelet: '',
      housingMaterial: '',
      display: '',
      gender: '',
      waterproof: '',
      anInterface: '',
      hullShape: '',
      price: 0,
      quantityOfGoods: 0,
      images: [],
   })

   console.log('productWatch: ', productWatch)

   const onHandleChange = (event) => {
      const { name, value } = event.target

      setProductWatch((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const onChangeProductWatchAndResRadio = (name, radioResText) => {
      setProductWatch((prevProductWatch) => ({
         ...prevProductWatch,
         [name]: radioResText,
      }))
   }

   const addColorProductWatch = (color) => {
      setProductWatch({ ...productWatch, codeColor: color })
   }

   const onAddPhotoWatch = (photoData) => {
      setProductWatch({ ...productWatch, images: photoData })
   }

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCreateNewProduct}
            newProduct={newProduct}
         />

         <Container>
            <CategoryFilterSelect
               title="Объем памяти"
               label="Выберите объем памяти"
               selectData={dataProductWatch.rom}
               value={productWatch.rom}
               onChange={onHandleChange}
               name="rom"
               star={false}
            />

            <InputColorPalette productColor={addColorProductWatch} />

            <CategoryFilterSelect
               title="Материал браслета/ремешка"
               label="Выберите материал браслета/ремешка"
               selectData={dataProductWatch.bracelet}
               value={productWatch.materialBracelet}
               onChange={onHandleChange}
               name="bracelet"
               star={false}
            />

            <CategoryFilterSelect
               title="Материал корпуса"
               label="Выберите материал корпуса"
               selectData={dataProductWatch.housingMaterial}
               value={productWatch.housingMaterial}
               onChange={onHandleChange}
               name="housingMaterial"
               star={false}
            />

            <CategoryFilterSelect
               title="Диагональ дисплея (дюйм)"
               label="Выберите диагональ дисплея"
               selectData={dataProductWatch.display}
               value={productWatch.display}
               onChange={onHandleChange}
               name="display"
               star={false}
            />

            <RadioInput
               radioData={radioData.genderRadioData}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               productRadioText="gender"
               label="Пол"
            />

            <RadioInput
               radioData={radioData.waterproof}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               productRadioText="waterproof"
               label="Водонепроницаемые"
            />

            <RadioInput
               radioData={radioData.anInterface}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               productRadioText="anInterface"
               label="Беспроводные интерфейсы"
            />

            <RadioInput
               radioData={radioData.hullShape}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               productRadioText="hullShape"
               label="Форма корпуса"
            />

            <AddPhotoGadgets onPhotoCollector={onAddPhotoWatch} />
         </Container>
      </div>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.83rem;

   margin-bottom: 1.5rem;
`
