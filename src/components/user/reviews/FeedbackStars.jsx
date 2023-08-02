import React from 'react'
import { Rating, styled } from '@mui/material'

const FeedbackStars = ({ stars }) => {
   return (
      <Container>
         <h5>Оценка</h5>
         <StarContainer>
            <StyledRating
               name="read-only"
               size="small"
               readOnly
               value={stars}
            />
         </StarContainer>
      </Container>
   )
}

export default FeedbackStars

const Container = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.375rem;
   margin-bottom: 0.75rem;
   margin-top: 0.75rem;
   h5 {
      margin: 0;
   }
`
const StarContainer = styled('div')`
   display: flex;
   align-items: center;
   margin-top: 0.0625rem;
   gap: 0.125rem;
`
const StyledRating = styled(Rating)`
   && .MuiSvgIcon-root {
      font-size: 15px;
   }
`
