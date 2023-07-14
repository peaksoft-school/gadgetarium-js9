import React from 'react'
import { styled } from '@mui/material'
import { ReactComponent as StarIcon } from '../../assets/icons/star-icon.svg'

const ReviewStars = ({ stars }) => {
   return (
      <Container>
         <h5>Оценка</h5>
         <StarContainer>
            <StarIconContainer stars={stars} filledStars={1} />
            <StarIconContainer stars={stars} filledStars={2} />
            <StarIconContainer stars={stars} filledStars={3} />
            <StarIconContainer stars={stars} filledStars={4} />
            <StarIconContainer stars={stars} filledStars={5} />
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

const StarIconContainer = styled(StarIcon)`
   fill: ${(props) => (props.stars >= props.filledStars ? '#F99808' : 'white')};
`
