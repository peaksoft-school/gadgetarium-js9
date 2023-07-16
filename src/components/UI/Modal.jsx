import React from 'react'
import { Modal as ModalUi, Box, styled } from '@mui/material'

export const Modal = ({ children, open, onClose }) => {
   return (
      <ModalStyled open={open} onClose={onClose}>
         <BoxStyled>{children}</BoxStyled>
      </ModalStyled>
   )
}

const ModalStyled = styled(ModalUi)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const BoxStyled = styled(Box)(() => ({
   '&': {
      // padding: '2.5rem 2rem',
      borderRadius: '0.25rem',
      backgroundColor: '#fff',
   },
}))
