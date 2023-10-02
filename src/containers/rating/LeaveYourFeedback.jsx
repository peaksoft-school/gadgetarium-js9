import { useState, useEffect } from 'react'
import { styled, Rating as RatingMui } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../components/UI/Modal'
import { Button } from '../../components/UI/Button'
import { SuccessModal } from './SuccessModal'
import {
   getInfoPage,
   postReviewsPhone,
} from '../../store/informationPhone/infoPageThunk'
import { ErrorModal } from './ErrorModal'
import { useSnackbar } from '../../hooks/useSnackbar'

export const LeaveYourFeedback = ({ rating, onClose, subProductId }) => {
   const { color, productId } = useSelector((state) => state.product.infoPhone)

   const [myStar, setMyStar] = useState(0)
   const [comment, setComment] = useState('')
   const [errorMessage, setErrorMessage] = useState('')

   const [successModal, setSuccessModal] = useState(false)
   const [errorModal, setErrorModal] = useState(false)

   const { snackbarHandler } = useSnackbar()

   const dispatch = useDispatch()

   const onOpenSuccessModal = () => {
      setSuccessModal(true)
   }

   const onOpenErrorModal = (message) => {
      setErrorMessage(message)
      setErrorModal(true)
   }

   const onCreateReview = async () => {
      if (myStar > 0) {
         const data = {
            subProductId,
            grade: myStar,
            comment,
         }
         dispatch(
            postReviewsPhone({ data, onOpenSuccessModal, onOpenErrorModal })
         )
            .unwrap()
            .then(() => {
               dispatch(getInfoPage({ productId, colour: color }))
            })
         onClose()
         setMyStar(0)
         setComment('')
      } else {
         snackbarHandler({
            message: 'Оставьте свою оценку',
            type: 'error',
         })
      }
   }

   const handleRatingChange = (event, newValue) => {
      setMyStar(newValue)
   }

   useEffect(() => {
      let time
      if (successModal) {
         time = setTimeout(() => {
            setSuccessModal(false)
         }, 1500)
      } else if (errorModal) {
         time = setTimeout(() => {
            setErrorModal(false)
         }, 1500)
      }

      return () => clearTimeout(time)
   }, [successModal, errorModal])

   return (
      <>
         {successModal && <SuccessModal successModal={successModal} />}
         {errorModal && (
            <ErrorModal errorModal={errorModal} errorMessage={errorMessage} />
         )}
         <Modal open={rating} onClose={onClose} padding="1.5rem 1.8rem">
            <Container>
               <ContainerGrade>
                  <p>Оставьте свой отзыв</p>

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
                  Отправить отзыв
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
