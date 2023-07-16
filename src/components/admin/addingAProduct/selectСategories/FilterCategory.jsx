import { styled } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { CategoryFilterSelect } from './CategoryFilterSelect'
import { InputUi } from '../../../UI/Input'
import {
   brand,
   category,
   subcategory,
} from '../../../../utils/common/constants/constants'
import { ReactComponent as SelectLabelIcons } from '../../../../assets/icons/photo-add/add-photo-icon.svg'

dayjs.locale('ru')

export const FilterCategory = ({ onOpenModalAddNewBrand }) => {
   return (
      <Container>
         <div className="box">
            <CategoryFilterSelect
               label="Выбрать"
               title="Выберите категорию"
               arr={category}
            />

            <CategoryFilterSelect
               onOpenModalAddNewBrand={onOpenModalAddNewBrand}
               label={
                  <BoxIconSelect>
                     <SelectLabelIconsStyle /> Выберите бренд товара
                  </BoxIconSelect>
               }
               newBrand
               title="Бренд"
               arr={brand}
            />

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
               />
            </BoxLabel>
         </div>

         <div className="box">
            <CategoryFilterSelect
               title="Выберите подкатегорию"
               label="Выбрать"
               arr={subcategory}
            />
            <BoxLabel>
               <p>
                  Гарантия (месяцев) <span>*</span>
               </p>

               <InputUi
                  type="number"
                  padding="0.5rem 0"
                  placeholder="Введите название товара"
                  width="24.75rem"
                  height="2.6rem"
               />
            </BoxLabel>

            <BoxLabel>
               <p>
                  Дата выпуска <span>*</span>
               </p>

               <DateInputContainer>
                  <LocalizationProvider dateAdapter={AdapterDayjs} locale="ru">
                     <DemoContainer components={['DesktopDatePicker']}>
                        <DatePicker />
                     </DemoContainer>
                  </LocalizationProvider>
               </DateInputContainer>
            </BoxLabel>
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

const DateInputContainer = styled('div')`
   & .MuiStack-root {
      margin-top: -8px;

      label {
         margin-top: -6px;
      }

      :active {
         label {
            display: none;
         }
      }

      input {
         padding: 0.6rem;
         font-size: 1rem;
         width: 20.4rem;
      }
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
