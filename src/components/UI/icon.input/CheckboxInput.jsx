import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput() {
   const [isChecked, setIsChecked] = useState(false)
   CheckboxInput
   const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
   }

   return (
      <StyledCheckbox
         checked={isChecked}
         onChange={handleCheckboxChange}
         color="primary"
      />
   )
}

export default CheckboxInput
const StyledCheckbox = styled(Checkbox)`
   color: gray;
   &:hover {
      color: #cb11ab;
   }
   &.Mui-checked {
      color: #cb11ab;
   }
`
