import { useState } from 'react'
import { styled } from '@mui/material'
import { QuantityOfProducts } from '../QuantityOfProducts'
import { CategoryFilterSelect } from '../selectСategories/CategoryFilterSelect'
import { dataProductSmartphones } from '../../../../utils/common/constants/constantsAdminAddNewProduct'
import { AddPhotoGadgets } from '../../UI/addPhotoGadgets/AddPhotoGadgets'
import { InputColorPalette } from '../../UI/color/InputColorPalette'

export const SmartphoneAdvancedOptions = ({
   onCreateNewProduct,
   newProduct,
}) => {
   const [productSmartphone, setProductSmartphone] = useState({
      color: '',
      memory: '',
      RAM: '',
      SIMcards: '',
      price: 0,
      quantityOfGoods: 0,
   })

   const onHandleChange = (event) => {
      const { name, value } = event.target

      setProductSmartphone((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCreateNewProduct}
            newProduct={newProduct}
         />

         <Container>
            <InputColorPalette />

            <CategoryFilterSelect
               title="Объем памяти"
               label="Выберите объем памяти"
               selectData={dataProductSmartphones.memorySmartphones}
               value={productSmartphone.memory}
               onChange={onHandleChange}
               name="memory"
               star={false}
            />

            <CategoryFilterSelect
               title="Оперативная память"
               label="Выберите оперативную память"
               selectData={dataProductSmartphones.smartphonesRAM}
               value={productSmartphone.RAM}
               onChange={onHandleChange}
               name="RAM"
               star={false}
            />

            <CategoryFilterSelect
               title="Кол-во SIM-карт"
               label="Выберите SIM-карты"
               selectData={dataProductSmartphones.smartphonesSIMcards}
               value={productSmartphone.SIMcards}
               onChange={onHandleChange}
               name="SIMcards"
               star={false}
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
