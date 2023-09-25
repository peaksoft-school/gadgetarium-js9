import React from 'react'
import { styled } from '@mui/material'
import { ReactComponent as Arrow } from '../../assets/icons/arrows/up-icon.svg'

export const ArrowIcon = ({ checked, onClick, ...props }) => {
   return <ArrowIconStyled checked={checked} onClick={onClick} {...props} />
}

const ArrowIconStyled = styled(Arrow)(({ checked }) => ({
   userSelect: 'none',
   transition: 'transform 0.4s ease',
   transform: checked ? 'rotate(0)' : 'rotate(180deg)',
}))
