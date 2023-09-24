import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput({ isChecked, onChange, bgColor, onClick, ...props }) {
   return (
      <StyledCheckbox
         checked={isChecked}
         onChange={onChange}
         backgroundcolor={bgColor}
         onClick={onClick}
         {...props}
         color="primary"
      />
   )
}
export default CheckboxInput

const StyledCheckbox = styled(Checkbox)(({ backgroundcolor, ...props }) => ({
   color: 'gray',
   width: props.width || 'auto',
   '&:hover': {
      background: 'none',
      color: backgroundcolor,
   },
   '&.Mui-checked': {
      color: backgroundcolor,
   },
}))
