import { Box, Modal, styled } from '@mui/material'
import React from 'react'
import { Button } from '../../UI/Button'

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
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box
            sx={{
               width: '34rem',
               height: '21.8125rem',
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
            }}
         >
            <AnswerToComment>Ответ на комментарий</AnswerToComment>
            <StyledTextarea value={modalText} onChange={getAdminText} />
            <ButtonContainer>
               <Button
                  variant="outlined"
                  textTransform="uppercase"
                  backgroundHover="#CB11AB"
                  backgroundActive="#CB11AB"
                  padding="10px 75px"
                  onClick={handleClose}
               >
                  Отменить
               </Button>
               <Button
                  variant="contained"
                  textTransform="uppercase"
                  padding="10px 75px"
                  onClick={saveTextHandler}
               >
                  {adminReviewState ? 'Сохронить' : 'Добавить'}
               </Button>
            </ButtonContainer>
         </Box>
      </Modal>
   )
}

export default FeedbackModal
const StyledTextarea = styled('textarea')`
   width: 30rem;
   height: 8rem;
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