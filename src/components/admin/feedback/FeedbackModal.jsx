import { Box, Modal, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../UI/Button'
import {
   postReviewsAdminAnswer,
   putReviewsAdminAnswer,
} from '../../../store/informationPhone/infoPageThunk'

const FeedbackModal = ({
   open,
   handleClose,
   modalText,
   getAdminText,
   adminReviewState,
   saveTextHandler,
   reviewId,
   isEditing,
   setIsEditing,
}) => {
   const dispatch = useDispatch()

   const [answer, setAnswer] = useState('')

   const { reviews } = useSelector((state) => state.product.infoPhone)

   useEffect(() => {
      reviews?.map((el) => {
         if (el.reviewId === reviewId) {
            setAnswer(el.answer)
         }
         return el
      })
      console.log(answer)
   }, [reviews])

   const saveAdminAnswer = () => {
      const data = {
         reviewId,
         replyToComment: modalText,
      }

      if (isEditing) {
         dispatch(putReviewsAdminAnswer(data))
      } else {
         dispatch(postReviewsAdminAnswer(data))
      }
   }

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
                  onClick={() => {
                     setIsEditing(true)
                     saveAdminAnswer()
                  }}
                  variant="contained"
                  textTransform="uppercase"
                  padding="0.625rem 4.6825rem"
                  type="onSubmit"
               >
                  {adminReviewState ? 'Сохранить' : 'Добавить'}
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
