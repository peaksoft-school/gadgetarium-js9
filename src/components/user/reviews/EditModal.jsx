import { useState, useEffect } from 'react'
import { styled, Rating as RatingMui } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SuccessModal } from '../../../containers/rating/SuccessModal'
import { Modal } from '../../UI/Modal'
import { Button } from '../../UI/Button'
import { putReviesRequest } from '../../../store/informationPhone/infoPageThunk'
import { useSnackbar } from '../../../hooks/useSnackbar'

export const EditModal = ({ open, onClose, reviewId }) => {
   const { snackbarHandler } = useSnackbar()
   const { userComment, infoPhone } = useSelector((state) => state.product)
   const [myStar, setMyStar] = useState(userComment.grade)
   const [comment, setComment] = useState(userComment.comment)
   const [successModal, setSuccessModal] = useState(false)
   const { productId } = useParams()
   const dispatch = useDispatch()

   const onOpenSuccessModal = () => {
      setSuccessModal(true)
   }

   const onCreateReview = () => {
      const data = {
         reviewId,
         grade: myStar,
         comment,
      }

      dispatch(
         putReviesRequest({
            data,
            snackbarHandler,
            subProductId: infoPhone.subProductId,
            getPayload: { productId, colour: infoPhone.color },
         })
      )
      onClose()
      onOpenSuccessModal()
      setMyStar(0)
      setComment('')
   }

   const handleRatingChange = (event, newValue) => {
      setMyStar(newValue)
   }

   useEffect(() => {
      let time
      if (successModal) {
         time = setTimeout(() => {
            setSuccessModal(false)
         }, 3000)
      }

      return () => clearTimeout(time)
   }, [successModal])

   return (
      <>
         {successModal && <SuccessModal successModal={successModal} />}
         <Modal open={open} onClose={onClose} padding="1.5rem 1.8rem">
            <Container>
               <ContainerGrade>
                  <p>Редактировать свой отзыв</p>

                  <BoxGrade>
                     <p>Оценка</p>

                     <div>
                        <RatingMui
                           value={myStar}
                           size="medium"
                           onChange={handleRatingChange}
                        />
                     </div>
                  </BoxGrade>
               </ContainerGrade>

               <div>
                  <ContainerDescription className="box-description">
                     <label htmlFor="comment">Ваш комментарий</label>
                     <textarea
                        id="comment"
                        placeholder="Напишите комментарий"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                     />
                  </ContainerDescription>
               </div>
               <ButtonStyle
                  variant="contained"
                  padding="0.75rem"
                  onClick={onCreateReview}
               >
                  Изменить отзыв
               </ButtonStyle>
            </Container>
         </Modal>
      </>
   )
}

const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   width: '39.3125rem',
   height: '20rem',

   fontFamily: theme.typography.mainFontFamily,
}))

const ContainerGrade = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.8rem',

   p: {
      margin: 0,
      fontSize: '1.8rem',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.primary.mainContrastText,
   },
}))

const ContainerDescription = styled('div')`
   display: flex;

   flex-direction: column;
   gap: 0.38rem;
   font-size: 1rem;
   margin-top: 1rem;

   textarea {
      width: 100%;
      padding: 0.88rem 0.63rem;
      min-height: 7rem;
      border-radius: 0.375rem;
      resize: none;
      border: 1px solid #cdcdcd;
   }
`

const BoxGrade = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.38',

   p: {
      fontSize: '1rem',
   },
}))

const ButtonStyle = styled(Button)`
   margin-top: 2rem;
`
