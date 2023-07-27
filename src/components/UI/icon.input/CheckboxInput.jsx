import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput({ isChecked, onChange }) {
   return (
      <StyledCheckbox checked={isChecked} onChange={onChange} color="primary" />
   )
}

export default CheckboxInput

const StyledCheckbox = styled(Checkbox)`
   color: gray;

   &:hover {
      color: #cb11ab;
   }
`
