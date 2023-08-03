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
   onCollectorParameters,
}) => {
   const [productSmartphone, setProductSmartphone] = useState({
      codeColor: '',
      rom: '',
      ram: '',
      sim: '',
      images: null,
   })

   console.log('productSmartphone: ', productSmartphone)

   const onHandleChange = (event) => {
      const { name, value } = event.target

      setProductSmartphone((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const onAddPhotoSmartphone = (photoData) => {
      setProductSmartphone({ ...productSmartphone, images: photoData })
   }

   const onCollectorSmartphoneParameters = () => {
      onCollectorParameters(productSmartphone)
      onCreateNewProduct()
   }

   const addColorProductSmartphone = (color) => {
      setProductSmartphone({ ...productSmartphone, codeColor: color })
   }

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorSmartphoneParameters}
            newProduct={newProduct}
         />

         <Container>
            <InputColorPalette productColor={addColorProductSmartphone} />

            <CategoryFilterSelect
               title="Объем памяти"
               label="Выберите объем памяти"
               selectData={dataProductSmartphones.romSmartphones}
               value={productSmartphone.rom}
               onChange={onHandleChange}
               name="rom"
               star={false}
            />

            <CategoryFilterSelect
               title="Оперативная память"
               label="Выберите оперативную память"
               selectData={dataProductSmartphones.smartphonesRAM}
               value={productSmartphone.ram}
               onChange={onHandleChange}
               name="ram"
               star={false}
            />

            <CategoryFilterSelect
               title="Кол-во SIM-карт"
               label="Выберите SIM-карты"
               selectData={dataProductSmartphones.smartphonesSIMcards}
               value={productSmartphone.sim}
               onChange={onHandleChange}
               name="sim"
               star={false}
            />

            <AddPhotoGadgets onPhotoCollector={onAddPhotoSmartphone} />
         </Container>
      </div>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.83rem;

   margin-bottom: 1.75rem;
`
