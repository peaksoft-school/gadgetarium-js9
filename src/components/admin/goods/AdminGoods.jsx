import { useState } from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AdminTable } from '../UI/admin.table/Table'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg'
import { Button } from '../../UI/Button'
import { DiscountModal } from './DiscountModal'
import { useCustomSearchParams } from '../../../hooks/useCustomSearchParams'

export const AdminGoods = () => {
   const [inputValue, setInputValue] = useState('')
   const navigate = useNavigate()
   const handleChange = (event) => {
      setInputValue(event.target.value)
   }
   const { params, setParam, deleteParam } = useCustomSearchParams()

   const closeModalHandler = () => {
      deleteParam('openModalDiscount')
   }

   const openModalHandler = () => {
      setParam('openModalDiscount', 'true')
   }
   const myTable = [
      {
         id: '1',
         brand: 'Apple',
         purchaseTime: '07:21:2023',
         quantityOfGoods: '24',
         totalSum: '75000',
         memory: '32',
         quantityOfSIMCart: '1',
         modelName: 'Samsung S21 UltraNanoBich',
         quantity: 10,
         productPrice: 50000,
         vendorCode: '14134242',
         RAM: '6',
         discount: 10,
         color: 'Красный',
         ROM: '64',
         fullName: 'Баха',
         number: '000000-455247',
         ordering: 'Самовывоз',
         status: 'В обработке',
      },
      {
         id: '2',
         brand: 'Apple',
         purchaseTime: '08:24:2023',
         quantityOfGoods: '6',
         discount: 10,
         totalSum: '80000',
         quantity: 10,
         productPrice: 50000,
         memory: '64',
         vendorCode: '14134242',
         modelName: 'Samsung S21 UltraNanoBich',
         quantityOfSIMCart: '2',
         color: 'Белый',
         RAM: '8',
         ROM: '64',
         fullName: 'Айзат Жумагулова',
         number: '000000-455247',
         ordering: 'Доставка',
         status: 'В обработке',
      },
   ]
   return (
      <Container>
         <WidthContainer>
            <ProductsToolContainer>
               <ButtonInputContainer>
                  <SearchForm>
                     <Input
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Поиск по артикулу или ..."
                        type="text"
                     />
                     <StyledVector input={inputValue} />
                  </SearchForm>
                  <ButtonContainer>
                     <StyledButton
                        padding="1.1111vh 1.979vw"
                        variant="outlined"
                        backgroundhover="#CB11AB"
                        backgroundactive="#E313BF"
                        onClick={() => navigate('/admin/add-products-part-1')}
                     >
                        Добавить товар
                     </StyledButton>
                     <StyledButton
                        padding="1.1111vh 1.979vw"
                        variant="outlined"
                        backgroundhover="#CB11AB"
                        backgroundactive="#E313BF"
                        onClick={openModalHandler}
                     >
                        Создать скидку
                     </StyledButton>
                     <DiscountModal
                        open={params}
                        handleClose={closeModalHandler}
                     />
                  </ButtonContainer>
               </ButtonInputContainer>
               <AdminTable indexForTable={0} itemTableArray={myTable} />
            </ProductsToolContainer>
         </WidthContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 2.083vw;
`
const ButtonContainer = styled('div')`
   display: flex;
   gap: 1.458vw;
`
const WidthContainer = styled('div')`
   width: 89.583vw;
`
const ProductsToolContainer = styled('div')`
   width: 67.969vw;
`
const ButtonInputContainer = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-bottom: 2.083vw;
`
const Input = styled('input')`
   width: 29.115vw;
   height: 2.5rem;
   border-radius: 0.375rem;
   border: 1px solid var(--Gray-Input, #cdcdcd);
   padding: 0.59375rem 2.2rem 0.5625rem 1.125rem;
   color: black;
   outline: none;

   ::placeholder {
      color: #91969e;
   }
`
const SearchForm = styled('form')`
   width: 29.115vw;

   display: flex;
   position: relative;
   align-items: center;

   button {
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
   }
   :hover {
      input {
         transition: background-color 0.4s ease;
         background-color: #fff;
         ::placeholder {
            color: gray;
         }
      }

      svg {
         path {
            fill: gray;
         }
      }
   }
   input {
      :focus {
         transition: background-color 0.4s ease;
         background-color: #fff;
         ::placeholder {
            color: gray;
         }
         ~ svg path {
            fill: gray;
         }
      }
   }
`
const StyledButton = styled(Button)`
   color: #cb11ab;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 600;
   line-height: 120%;
`
const StyledVector = styled(SearchIcon)`
   position: absolute;
   right: 18px;
   width: 1.042vw;
   height: 1.042vw;
   fill: gray;
   path {
      fill: ${(props) =>
         props.input === '' ? '#91969e !important' : '#cb11ab !important'};
   }
   cursor: pointer;
`
