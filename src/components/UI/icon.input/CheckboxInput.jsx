import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput({ isChecked, onChange, bgColor, onClick }) {
   return (
      <StyledCheckbox
         checked={isChecked}
         onChange={onChange}
         backgroundcolor={bgColor}
         onClick={onClick}
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
