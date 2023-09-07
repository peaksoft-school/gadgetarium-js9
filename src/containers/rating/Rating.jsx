import { styled, Rating as RatingMui } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '../../components/UI/Button'
import { LeaveYourFeedback } from './LeaveYourFeedback'

export const Rating = ({ allReviews }) => {
   const [rating, setRating] = useState(false)
   const role = 'USER'

   const onOpenNodal = () => {
      setRating(true)
   }

   const onClose = () => {
      setRating(false)
   }

   return (
      <div>
         <Container>
            <BoxInfoRating>
               <ContainerGeneralRating>
                  <BoxGeneralRating>
                     <h1>{allReviews.rating}</h1>
                     <RatingMuiStyle
                        value={allReviews.rating || 0}
                        readOnly
                        precision={0.1}
                        size="small"
                     />
                  </BoxGeneralRating>
                  <span>{allReviews.totalReviews} отзывов</span>
               </ContainerGeneralRating>
               <ContainerInfoStar>
                  <div className="star-box">
                     <RatingMuiStyle value={5} readOnly size="small" />
                     <span>{allReviews.five} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={4} readOnly size="small" />
                     <span>{allReviews.four} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={3} readOnly size="small" />
                     <span>{allReviews.three} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={2} readOnly size="small" />
                     <span>{allReviews.two} отзывов</span>
                  </div>
                  <div className="star-box">
                     <RatingMuiStyle value={1} readOnly size="small" />
                     <span>{allReviews.one} отзывов</span>
                  </div>
               </ContainerInfoStar>
            </BoxInfoRating>

            {role === 'USER' ? (
               <Button
                  variant="contained"
                  padding="0.75rem"
                  onClick={onOpenNodal}
               >
                  Оставить отзыв
               </Button>
            ) : null}

            <LeaveYourFeedback rating={rating} onClose={onClose} />
         </Container>
      </div>
   )
}

const Container = styled('div')(({ theme }) => ({
   padding: '1.88rem 2.5rem',
   display: 'flex',
   flexDirection: 'column',
   gap: '1.25rem',
   backgroundColor: '#f4f4f4',
   width: '26rem',
   borderRadius: '0.375rem',

   fontFamily: theme.typography.mainFontFamily,
}))

const ContainerGeneralRating = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.38rem',

   span: {
      color: theme.palette.secondary.contrastText,
      fontSize: '0.875rem',
   },
}))

const BoxGeneralRating = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.5rem;
`

const BoxInfoRating = styled('div')`
   display: flex;
   justify-content: space-between;

   font-size: 0.875rem;
   color: #292929;
`

const ContainerInfoStar = styled('div')(() => ({
   '.star-box': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
   },
}))

const RatingMuiStyle = styled(RatingMui)`
   .MuiRating-icon {
      color: #faaf00;
   }
`
