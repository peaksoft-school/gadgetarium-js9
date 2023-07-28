import { Box, Modal, styled } from '@mui/material'
import React from 'react'
import { Button } from '../UI/Button'

const FeedbackModal = ({
   open,
   handleClose,
   modalText,
   getAdminText,
   adminReviewState,
   saveTextHandler,
}) => {
   return (
      <Modal
         open={open.has('openModal')}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <StyledBox component="form" onSubmit={saveTextHandler}>
            <AnswerToComment>Ответ на комментарий</AnswerToComment>
            <StyledTextarea value={modalText} onChange={getAdminText} />
            <ButtonContainer>
               <Button
                  variant="outlined"
                  textTransform="uppercase"
                  backgroundHover="#CB11AB"
                  backgroundActive="#CB11AB"
                  padding="0.625rem 4.6825rem"
                  onClick={handleClose}
               >
                  Отменить
               </Button>
               <Button
                  variant="contained"
                  textTransform="uppercase"
                  padding="0.625rem 4.6825rem"
                  type="onSubmit"
               >
                  {adminReviewState ? 'Сохронить' : 'Добавить'}
               </Button>
            </ButtonContainer>
         </StyledBox>
      </Modal>
   )
}

export default FeedbackModal
const StyledBox = styled(Box)(() => ({
   width: '28%',
   height: '32.5%',
   padding: '2rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   position: 'absolute',
   top: '50%',
   backgroundColor: 'white',
   borderRadius: '0.25rem',
   background: '#FFF',
   boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
   left: '50%',
   transform: 'translate(-50%, -50%)',
}))
const StyledTextarea = styled('textarea')`
   width: 100%;
   height: 45%;
   padding: 10px 12px;
   border-radius: 0.25rem;
   resize: none;
   border: 1px solid #cdcdcd;
`
const ButtonContainer = styled('div')`
   width: 100%;
   margin-top: 2rem;
   display: flex;
   justify-content: space-between;
`
const AnswerToComment = styled('p')`
   margin-top: 0.5rem;
   margin-bottom: 2.25rem;
   font-family: Inter;
   font-size: 1.5rem;
   font-style: normal;
   font-weight: 500;
   line-height: 2rem;
`
