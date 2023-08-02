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
      color: '',
      memory: '',
      RAM: '',
      SIMcards: '',
      price: 0,
      quantityOfGoods: 0,
      photoSmartphone: null,
   })

   const onHandleChange = (event) => {
      const { name, value } = event.target

      setProductSmartphone((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const onAddPhotoSmartphone = (photoData) => {
      console.log('photoData: ', photoData)

      productSmartphone.photoSmartphone = photoData
      setProductSmartphone(productSmartphone)
   }

   const onCollectorSmartphoneParameters = () => {
      onCollectorParameters(productSmartphone)

      onCreateNewProduct()
   }

   return (
      <div>
         <QuantityOfProducts
            onCreateNewProduct={onCollectorSmartphoneParameters}
            newProduct={newProduct}
         />

         <Container>
            <InputColorPalette productSmartphone={productSmartphone} />

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
