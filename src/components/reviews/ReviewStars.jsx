import React from 'react'
import { Rating, styled } from '@mui/material'

const ReviewStars = ({ stars }) => {
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

export default ReviewStars

const Container = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.375rem;
   margin-bottom: 0.75rem;
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
