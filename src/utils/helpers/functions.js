import { styled } from '@mui/material'
import CheckboxInput from '../../components/UI/icon.input/CheckboxInput'

const StyledInput = styled('input')`
   background: none;
   border: none;
   font-family: 'Inter';
   font-size: 1rem;
   font-weight: 500;
   font-style: normal;
   letter-spacing: 0.0625rem;
   max-width: 140px;
   :focus {
      outline: none;
   }
`
export const nestedStyledInput = (
   productPrice,
   productPriceInput,
   getProductPrice,
   width
) => {
   if (productPrice) {
      if (width === '10.3125rem') {
         return (
            <StyledInput
               value={productPriceInput}
               onChange={getProductPrice}
               type="number"
            />
         )
      }
      return productPrice.toLocaleString()
   }
   return null
}
export const calculateBackgroundColor = (isHovered, indexForTable) => {
   if (indexForTable === 3) {
      return 'white'
   }
   return isHovered === 'true' ? 'rgba(144, 156, 181, 0.20)' : 'none'
}
export const nestedContentFunction = (
   isHovered,
   indexForTable,
   index,
   checkboxHandler,
   id,
   isChecked
) => {
   if (isHovered === true) {
      if (indexForTable === 2) {
         return null
      }
      return (
         <StyledCheckboxInput
            bgColor="black"
            isChecked={isChecked}
            onClick={() => checkboxHandler(id)}
         />
      )
   }
   return index + 1
}
const StyledCheckboxInput = styled(CheckboxInput)`
   .MuiSvgIcon-root {
      width: 1.458vw;
      height: 1.458vw;
   }
`
