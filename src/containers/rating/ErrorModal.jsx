import React from 'react'
import { styled } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'
import { Modal } from '../../components/UI/Modal'

export const ErrorModal = ({ errorModal, errorMessage }) => {
   return (
      <Modal open={errorModal} padding="1.25rem 4rem">
         <Container>
            <div>
               <ErrorIcon />
            </div>
            <p>
               {errorMessage ===
               'User has already added a review for this product'
                  ? 'Пользователь уже добавил отзыв об этом товаре'
                  : 'Вам необходимо купить этот товар, если вы хотите оставить отзыв'}
            </p>
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
