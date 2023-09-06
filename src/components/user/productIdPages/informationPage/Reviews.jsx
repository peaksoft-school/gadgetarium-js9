import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button } from '../../../UI/Button'
import Feedback from '../../reviews/Feedback'
import { Rating } from '../../../../containers/rating/Rating'
import { InputUi } from '../../../UI/Input'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'

const formatDate = (dateString) => {
   const date = new Date(dateString)
   return format(date, 'yyyy-MM-dd - HH:mm')
}

export const Reviews = () => {
   const dispatch = useDispatch()
   const [inputText, setInputText] = useState()

   const reviews = useSelector((state) => state.phone.infoPhone.reviews)

   useEffect(() => {
      dispatch(getInfoPage())
   }, [])

   function handleSubmit() {
      dispatch(postReviewsPhone({ comment: inputText }))
   }
   function handleOnChange(event) {
      setInputText(event.target.value)
   }

   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const style = {
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
   }
   return (
      <div>
         <Container>
            <div style={{ width: '64%' }} key={1}>
               <p
                  style={{
                     fontFamily: 'Ubuntu',
                     fontSize: '1.875rem',
                  }}
               >
                  Отзывы
               </p>
               <FeedbackBlock>
                  {reviews?.map((review) => {
                     return (
                        <Feedback
                           key={review.reviewId}
                           my={review.my}
                           handleOpen={handleOpen}
                           userName={review.userFullName}
                           userText="Размер (разумный - достаточно большой для чтения/просмотра контента, но не чрезмерный).Камера (первое время режимом мультикадр был приятно удивлён  мегапикселей не пожалели на основную камеру,зум работает увереннее, чем у конкурентов)"
                           stars={review.grade}
                           canUserEdit
                           timePublication={formatDate(review.dateOfCreatAd)}
                           reviewId={review.reviewId}
                        />
                     )
                  })}
               </FeedbackBlock>
            </div>
            <RaitingStyle>
               <Rating />
            </RaitingStyle>
         </Container>
         <div>
            <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                  <Typography variant="h6" component="h2">
                     Редактировать свой ответ
                  </Typography>
                  <form>
                     <InputUi
                        style={{ marginTop: '3rem' }}
                        width="20.8rem"
                        height="3rem"
                        value={inputText}
                        onChange={handleOnChange}
                     />
                     <ButtonBlock>
                        <Button
                           variant="outlined"
                           textTransform="uppercase"
                           backgroundHover="#CB11AB"
                           backgroundActive="#CB11AB"
                           padding="0.625rem 2.6825rem"
                           onClick={handleClose}
                        >
                           Отменить
                        </Button>
                        <Button
                           variant="contained"
                           textTransform="uppercase"
                           backgroundHover="#CB11AB"
                           backgroundActive="#CB11AB"
                           padding="0.625rem 2.6825rem"
                           onClick={handleSubmit}
                        >
                           Добавить
                        </Button>
                     </ButtonBlock>
                  </form>
               </Box>
            </Modal>
         </div>
      </div>
   )
}

const Container = styled('div')`
   display: flex;
   width: 78.5vw;
   justify-content: space-between;
`

const FeedbackBlock = styled('div')`
   margin-top: 3.75rem;
`
const RaitingStyle = styled('div')`
   margin-top: 2.5rem;
`
const ButtonBlock = styled('div')`
   display: flex;
   margin-top: 2rem;
`
