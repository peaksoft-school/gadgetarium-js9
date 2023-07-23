import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput({ isChecked, onChange, bgColor }) {
   return (
      <StyledCheckbox
         checked={isChecked}
         onChange={onChange}
         backgroundcolor={bgColor}
         color="primary"
      />
   )
}

export default CheckboxInput
const StyledCheckbox = styled(Checkbox)(({ backgroundcolor }) => ({
   color: 'gray',
   '&:hover': {
      background: 'none',
      color: backgroundcolor,
   },
   '&.Mui-checked': {
      color: backgroundcolor,
   },
}))
