import React from 'react'
import { Modal as ModalUi, Box, styled } from '@mui/material'

export const Modal = ({ children, open, onClose, padding = '2.5rem 2rem' }) => {
   return (
      <ModalStyled open={open} onClose={onClose}>
         <BoxStyled padding={padding}>{children}</BoxStyled>
      </ModalStyled>
   )
}

const ModalStyled = styled(ModalUi)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const BoxStyled = styled(Box)(({ padding }) => ({
   '&': {
      padding,
      borderRadius: '0.25rem',
      backgroundColor: '#fff',
   },
}))
