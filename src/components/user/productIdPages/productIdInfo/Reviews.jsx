import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button } from '../../../UI/Button'
import Feedback from '../../reviews/Feedback'
import { Rating } from '../../../../containers/rating/Rating'
import { InputUi } from '../../../UI/Input'

const formatDate = (dateString) => {
   const date = new Date(dateString)
   return format(date, 'yyyy-MM-dd - HH:mm')
}

export const Reviews = () => {
   const { reviews, subProductId } = useSelector(
      (state) => state.product.infoPhone
   )
   const reviewMy = reviews.map((el) => el.my)

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
      <>
         <Container>
            <div>
               <p
                  style={{
                     fontFamily: 'Ubuntu',
                     fontSize: '1.875rem',
                     fontWeight: '500',
                  }}
               >
                  Отзывы
               </p>
               <FeedbackBlock>
                  {reviews?.map((review) => {
                     return (
                        <Feedback
                           answer={review.answer}
                           key={review.reviewId}
                           handleOpen={handleOpen}
                           userName={review.userFullName}
                           userText={review.comment}
                           userIcon={review.userAvatar}
                           stars={review.grade}
                           timePublication={formatDate(review.dateOfCreatAd)}
                           reviewId={review.reviewId}
                           canUserEdit={review.my}
                           adminState
                           subProductId={subProductId}
                        />
                     )
                  })}
               </FeedbackBlock>
            </div>
            <RaitingStyle>
               <Rating my={reviewMy} subProductId={subProductId} />
            </RaitingStyle>
         </Container>
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
                     >
                        Добавить
                     </Button>
                  </ButtonBlock>
               </form>
            </Box>
         </Modal>
      </>
   )
}

const Container = styled('div')`
   display: flex;
   margin-top: 2.5rem;
   justify-content: space-between;
`

const FeedbackBlock = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   margin-top: 3.75rem;
`
const RaitingStyle = styled('div')`
   margin-top: 2.5rem;
`
const ButtonBlock = styled('div')`
   display: flex;
   margin-top: 2rem;
`
