import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput({ isChecked, onChange, bgColor }) {
   return (
      <StyledCheckbox
         checked={isChecked}
         onChange={onChange}
         bgcolor={bgColor}
         color="primary"
      />
   )
}

export default CheckboxInput
const StyledCheckbox = styled(Checkbox)(({ bgcolor }) => ({
   color: 'gray',
   '&:hover': {
      background: 'none',
      color: bgcolor,
   },
   '&.Mui-checked': {
      color: bgcolor,
   },
}))
