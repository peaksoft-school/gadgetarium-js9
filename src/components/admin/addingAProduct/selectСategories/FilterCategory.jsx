import { styled } from '@mui/material'
import { useState } from 'react'
import { CategoryFilterSelect } from './CategoryFilterSelect'
import { InputUi } from '../../../UI/Input'
import {
   brand,
   category,
   subcategorySmartWatch,
   subcategorySmartphones,
} from '../../../../utils/common/constants/constants'
import { ReactComponent as SelectLabelIcons } from '../../../../assets/icons/photo-add/add-photo-icon.svg'

export const FilterCategory = ({ onOpenModalAddNewBrand }) => {
   const [value, setValue] = useState({
      category: '',
      subcategory: '',
      brand: '',
      guarantee: '',
      nameProduct: '',
      dateOfIssue: '',
   })

   const handleChange = (event) => {
      const { name, value } = event.target
      setValue((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }

   const subcategorySelect =
      value.category === 'Смартфоны'
         ? subcategorySmartphones
         : subcategorySmartWatch

   return (
      <Container>
         <div className="box">
            <CategoryFilterSelect
               label="Выбрать"
               title="Выберите категорию"
               selectData={category}
               value={value.category}
               onChange={handleChange}
               name="category"
            />

            <CategoryFilterSelect
               onOpenModalAddNewBrand={onOpenModalAddNewBrand}
               label={
                  <BoxIconSelect>
                     <SelectLabelIconsStyle /> Выберите бренд товара
                  </BoxIconSelect>
               }
               value={value.brand}
               onChange={handleChange}
               newBrand
               name="brand"
               title="Бренд"
               selectData={brand}
            />

            {value.category === 'Смартфоны' ? (
               <BoxLabel>
                  <p>
                     Название товара <span>*</span>
                  </p>
                  <InputUi
                     type="text"
                     padding="0.5rem 0"
                     placeholder="Введите название товара"
                     width="24.75rem"
                     height="2.6rem"
                     name="nameProduct"
                     value={value.nameProduct}
                     onChange={handleChange}
                  />
               </BoxLabel>
            ) : null}
         </div>

         <div className="box">
            <CategoryFilterSelect
               title="Выберите подкатегорию"
               label="Выбрать"
               selectData={subcategorySelect}
               value={value.subcategory}
               name="subcategory"
               onChange={handleChange}
            />
            <BoxLabel>
               <p>
                  Гарантия (месяцев) <span>*</span>
               </p>

               <InputUi
                  type="number"
                  padding="0.5rem 0"
                  placeholder="Введите гарантию товара"
                  width="24.75rem"
                  height="2.6rem"
                  value={value.guarantee}
                  name="guarantee"
                  onChange={handleChange}
               />
            </BoxLabel>

            {value.category === 'Смартфоны' ? (
               <BoxLabel>
                  <p>
                     Дата выпуска <span>*</span>
                  </p>

                  <InputUi
                     type="date"
                     padding="0.5rem 0"
                     placeholder="Введите дату выпуска"
                     width="24.75rem"
                     height="2.6rem"
                     value={value.dateOfIssue}
                     name="dateOfIssue"
                     onChange={handleChange}
                  />
               </BoxLabel>
            ) : null}
         </div>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 3.75rem;

   display: flex;
   gap: 1.25rem;

   .box {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }
`

const SelectLabelIconsStyle = styled(SelectLabelIcons)`
   width: 1.25rem;
   height: 1.25rem;
`

const BoxIconSelect = styled('div')`
   height: 1.25rem;
   display: flex;
   gap: 0.62rem;
   align-items: center;
`

const BoxLabel = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.38rem;

   p {
      margin: 0;
      padding: 0;
   }

   span {
      color: #ff0000;
   }
`
