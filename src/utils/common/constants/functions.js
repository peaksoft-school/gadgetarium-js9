import CheckboxInput from '../../../components/UI/icon.input/CheckboxInput'

export const calculateBackgroundColor = (isHovered, index) => {
   if (index === 3) {
      return 'white'
   }
   return isHovered ? 'rgba(144, 156, 181, 0.20)' : 'none'
}
export const nestedContentFunction = (isHovered, index) => {
   if (isHovered === true) {
      if (index === 2) {
         return null
      }
      return <CheckboxInput bgColor="black" />
   }
   return '1'
}
