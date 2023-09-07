import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { styled, Rating as RatingMui } from '@mui/material'
import { RatingPhoto } from './RatingPhoto'
import { Modal } from '../../components/UI/Modal'
import { Button } from '../../components/UI/Button'
import { SuccessModal } from './SuccessModal'
import { postReviewProduct } from '../../store/review/review.thunk'

export const LeaveYourFeedback = ({ rating, onClose, subProductId = 1 }) => {
   const dispatch = useDispatch()
   const [myStar, setMyStar] = useState(0)
   const [comment, setComment] = useState('')
   const [img, setImg] = useState('')
   const [successModal, setSuccessModal] = useState(false)

   const imgUrl = img && URL.createObjectURL(img)

   const onOpenSuccessModal = () => {
      setSuccessModal(true)
   }

   const onCreateReview = () => {
      const data = {
         subProductId,
         comment,
         grage: myStar,
         imageLink: imgUrl,
      }

      dispatch(postReviewProduct(data))
      onClose()
      onOpenSuccessModal()
      setMyStar(0)
      setComment('')
      setImg('')
   }

   const handleFileChange = (event) => {
      const file = event.target.files[0]

      setImg(file)
   }

   const handleDrop = (e) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]

      setImg(file)
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

               <div>
                  <RatingPhoto
                     handleDrop={handleDrop}
                     handleFileChange={handleFileChange}
                     img={imgUrl}
                  />
               </div>

               <Button
                  variant="contained"
                  padding="0.75rem"
                  onClick={onCreateReview}
               >
                  Отправить отзыв
               </Button>
            </Container>
         </Modal>
      </>
   )
}
const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',

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
      padding: 0.88rem 0.63rem;
      max-width: 35.5625rem;
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
