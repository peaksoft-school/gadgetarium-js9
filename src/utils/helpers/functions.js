import { styled } from '@mui/material'
import CheckboxInput from '../../components/UI/icon.input/CheckboxInput'

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
export function formatPhoneNumber(phoneNumber) {
   const cleaned = phoneNumber.replace(/\D/g, '')

   const formatted = `+${cleaned.slice(0, 3)} (${cleaned.slice(
      3,
      6
   )}) ${cleaned.slice(6, 8)}-${cleaned.slice(8, 10)}-${cleaned.slice(10)}`

   return formatted
}
