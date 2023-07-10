import React from 'react'
import { Modal as ModalMui, styled } from '@mui/material'

export const Modal = ({ children, open, onClose }) => {
   return (
      <ModalStyled open={open} onClose={onClose}>
         {children}
      </ModalStyled>
   )
}

const ModalStyled = styled(ModalMui)(() => ({
   '&': {
      padding: '40px 32px',
   },
}))
