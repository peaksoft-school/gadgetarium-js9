import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { Rating } from '../../../containers/rating/Rating'
import {
   getProductById,
   getReviewsProduct,
} from '../../../store/review/review.thunk'
import Feedback from '../reviews/Feedback'

export const Reviews = () => {
   const dispatch = useDispatch()
   const { reviews, allReviews } = useSelector((state) => state.review)
   useEffect(() => {
      dispatch(getProductById(1))
      dispatch(getReviewsProduct(1))
   }, [])
   return (
      <Container>
         <WidthContainer>
            <ReviewsAndTitleContainer>
               <Title>Отзывы</Title>
               <ReviewsContainer>
                  {reviews?.map((review, index) => {
                     return (
                        <FeedbackContainer index={index} key={review.reviewId}>
                           <Feedback
                              userIcon={review.userAvatar}
                              userName={review.userFullName}
                              stars={review.grade}
                              reviewId={review.reviewId}
                              canUserEdit={review.my}
                              userText={review.comment}
                              timePublication={review.dateOfCreatAd}
                           />
                        </FeedbackContainer>
                     )
                  })}
               </ReviewsContainer>
            </ReviewsAndTitleContainer>
            <Rating allReviews={allReviews} />
         </WidthContainer>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
`
const WidthContainer = styled('div')`
   width: 79.688vw;
   display: flex;
   justify-content: space-between;
`
const Title = styled('p')`
   color: #292929;
   font-family: Ubuntu;
   font-size: 30px;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
`
const ReviewsContainer = styled('div')``
const ReviewsAndTitleContainer = styled('div')``
const FeedbackContainer = styled('div')`
   margin-top: ${(props) => (props.index === 0 ? '5.5556vh' : '3.7037vh')};
`
