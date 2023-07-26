import React, { useState } from 'react'
import { styled } from '@mui/material'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import {
   dataProductWatch,
   radioData,
} from '../../../../utils/common/constants/constantsAdminAddNewProduct'
import { QuantityOfProducts } from '../QuantityOfProducts'
import { InputColorPalette } from '../../UI/color/InputColorPalette'
import RadioInput from '../../../UI/icon.input/RadioInput'
import { AddPhotoGadgets } from '../../UI/addPhotoGadgets/AddPhotoGadgets'

export const WatchAdvancedOptions = ({ onCreateNewProduct, newProduct }) => {
   const [productWatch, setProductWatch] = useState({
      memory: '',
      color: '',
      bracelet: '',
      housingMaterial: '',
      display: '',
      gender: '',
      waterproof: '',
      wirelessInterfaces: '',
      hullShape: '',
      price: 0,
      quantityOfGoods: 0,
      video: '',
      PDF: '',
      description: '',
      photoWatch: [],
   })

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
               selectData={dataProductWatch.memoryWatch}
               value={productWatch.memory}
               onChange={onHandleChange}
               name="memory"
               star={false}
            />

            <InputColorPalette />

            <CategoryFilterSelect
               title="Материал браслета/ремешка"
               label="Выберите материал браслета/ремешка"
               selectData={dataProductWatch.bracelet}
               value={productWatch.bracelet}
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
               radioData={radioData.wirelessInterfaces}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               productRadioText="wirelessInterfaces"
               label="Беспроводные интерфейсы"
            />

            <RadioInput
               radioData={radioData.hullShape}
               onChangeProductWatchAndResRadio={onChangeProductWatchAndResRadio}
               productRadioText="hullShape"
               label="Форма корпуса"
            />

            <AddPhotoGadgets />
         </Container>
      </div>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.83rem;

   margin-bottom: 6rem;
`
