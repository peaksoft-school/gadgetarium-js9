import { Radio, styled } from '@mui/material'
import React from 'react'

const RadioInput = () => {
   return <StyledRadio />
}

export default RadioInput
const StyledRadio = styled(Radio)`
   &:hover {
      color: #cb11ab;
   }
   &.Mui-checked {
      color: #cb11ab;
   }
`
