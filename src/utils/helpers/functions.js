import CheckboxInput from '../../components/UI/icon.input/CheckboxInput'

export const calculateBackgroundColor = (isHovered, indexForTable) => {
   if (indexForTable === 3) {
      return 'white'
   }
   return isHovered === 'true' ? 'rgba(144, 156, 181, 0.20)' : 'none'
}
export const nestedContentFunction = (isHovered, indexForTable, index) => {
   if (isHovered === true) {
      if (indexForTable === 2) {
         return null
      }
      return <CheckboxInput bgColor="black" />
   }
   return index + 1
}
