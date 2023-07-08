import React from 'react'
import { Modal as ModalMui } from '@mui/material'

export const Modal = ({ children, open, onClose }) => {
   return (
      <ModalMui sx={{ padding: '40px 32px' }} open={open} onClose={onClose}>
         {children}
      </ModalMui>
   )
}

// const ModalStyled = styled(ModalMui)(() => {
//    return {
//       '&': {
//          padding: '40px 32px',
//       },
//    }
// })
