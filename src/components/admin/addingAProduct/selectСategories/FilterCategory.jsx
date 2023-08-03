import { styled } from '@mui/material'
import { CategoryFilterSelect } from './CategoryFilterSelect'
import { InputUi } from '../../../UI/Input'
import { categoryProduct } from '../../../../utils/common/constants/constantsAdminAddNewProduct'
import { ReactComponent as SelectLabelIcons } from '../../../../assets/icons/photo-add/add-photo-icon.svg'
import { Calendar } from '../../../UI/calendarFolder/Calendar'

export const FilterCategory = ({
   onOpenModalAddNewBrand,
   value,
   onHandleChange,
   onChangeValueDateHandler,
}) => {
   const subcategorySelect =
      value.category === 'Смартфоны'
         ? categoryProduct.subcategorySmartphones
         : categoryProduct.subcategorySmartWatch

   return (
      <Container>
         <div className="box">
            <CategoryFilterSelect
               label="Выбрать"
               title="Выберите категорию"
               selectData={categoryProduct.category}
               value={value.category}
               onChange={onHandleChange}
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
               onChange={onHandleChange}
               newBrand
               name="brand"
               title="Бренд"
               selectData={categoryProduct.brand}
            />

            {value.category === 'Смартфоны' ? (
               <BoxLabel>
                  <p>Название товара</p>
                  <InputUi
                     type="text"
                     padding="0.5rem 0"
                     placeholder="Введите название товара"
                     width="24.75rem"
                     height="2.6rem"
                     name="name"
                     value={value.name}
                     onChange={onHandleChange}
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
               onChange={onHandleChange}
            />
            <BoxLabel>
               <p>Гарантия (месяцев)</p>

               <InputUi
                  type="number"
                  padding="0.5rem 0"
                  placeholder="Введите гарантию товара"
                  width="24.75rem"
                  height="2.6rem"
                  value={value.guarantee}
                  name="guarantee"
                  onChange={onHandleChange}
               />
            </BoxLabel>

            {value.category === 'Смартфоны' ? (
               <BoxLabel>
                  <p>Дата выпуска</p>

                  <Calendar
                     placeholder="Введите дату выпуска"
                     value={value.dateOfIssue}
                     onChange={onChangeValueDateHandler}
                     name="dateOfIssue"
                     width="24.7rem"
                     padding="0.8rem 0.75rem 0.8rem 0rem"
                     height="2.7rem"
                     labelTop="-7px"
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

      ::after {
         content: ' *';
         color: red;
      }
   }
`
