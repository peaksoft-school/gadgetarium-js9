import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput({ isChecked, onChange, bgColor }) {
   return (
      <StyledCheckbox
         checked={isChecked}
         onChange={onChange}
         bgColor={bgColor}
         color="primary"
      />
   )
}

export default CheckboxInput
const StyledCheckbox = styled(Checkbox)(({ bgColor }) => ({
   color: 'gray',
   '&:hover': {
      background: 'none',
      color: bgColor,
   },
   '&.Mui-checked': {
      color: bgColor,
   },
}))
