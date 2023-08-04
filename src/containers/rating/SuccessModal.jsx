import React from 'react'
import { styled } from '@mui/material'
import { Modal } from '../../components/UI/Modal'
import { ReactComponent as SuccessIcon } from '../../assets/icons/success.svg'

export const SuccessModal = ({ successModal }) => {
   return (
      <Modal open={successModal} padding="1.25rem 4rem">
         <Container>
            <div>
               <SuccessIcon />
            </div>
            <p>Ваш отзыв был успешно отправлен!</p>
         </Container>
      </Modal>
   )
}

const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1.5rem',

   color: theme.palette.primary.mainContrastText,
   fontSize: '1.125rem',

   fontFamily: theme.typography.mainFontFamily,
}))
