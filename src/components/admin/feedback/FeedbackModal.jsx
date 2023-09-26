import { Box, Modal, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../UI/Button'
import {
   getInfoPage,
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
   const [answer, setAnswer] = useState(modalText)
   const { reviews, colours, productId } = useSelector(
      (state) => state.product.infoPhone
   )
   const getAnswer = (e) => {
      setAnswer(e.target.value)
      getAdminText(e)
   }
   useEffect(() => {
      reviews?.map((el) => {
         if (el.reviewId === reviewId) {
            setAnswer(el.answer)
         }
         return el
      })
   }, [reviewId])

   const saveAdminAnswer = () => {
      const data = {
         reviewId,
         replyToComment: answer,
      }

      if (isEditing) {
         dispatch(putReviewsAdminAnswer(data))
            .unwrap()
            .then(() => {
               dispatch(getInfoPage({ productId, colours }))
            })
      } else {
         dispatch(postReviewsAdminAnswer(data))
      }
   }

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <StyledBox component="form" onSubmit={saveTextHandler}>
            <AnswerToComment>Ответ на комментарий</AnswerToComment>
            <StyledTextarea value={answer} onChange={getAnswer} />
            <ButtonContainer>
               <Button
                  variant="outlined"
                  texttransform="uppercase"
                  backgroundhover="#CB11AB"
                  backgroundactive="#CB11AB"
                  padding="8px 4.6825rem"
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
                  texttransform="uppercase"
                  padding="8px 4.6825rem"
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
   width: '34rem',
   height: ' 21.8125rem',
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
   gap: 1.25rem;
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
