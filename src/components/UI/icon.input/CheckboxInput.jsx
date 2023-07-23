import React, { useState } from 'react'
import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

function CheckboxInput({isChecked, onChange}) {
function CheckboxInput({ isChecked, onChange }) {
   return (
      <StyledCheckbox
         checked={isChecked}
         onChange={onChange}
         color="primary"
      />
      <StyledCheckbox checked={isChecked} onChange={onChange} color="primary" />
   )
}

