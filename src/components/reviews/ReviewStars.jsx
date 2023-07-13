import React from 'react'
import { styled } from '@mui/material'
import { ReactComponent as StarIcon } from '../../assets/icons/star-icon.svg'

const ReviewStars = ({ stars }) => {
   console.log('stars: ', stars)
   return (
      <Container>
         <h5>Оценка</h5>
         <StarContainer>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
         </StarContainer>
      </Container>
   )
}

export default ReviewStars
const Container = styled('div')`
   display: flex;
   align-items: center;
   gap: 0.375rem;
`
const StarContainer = styled('div')`
   display: flex;
   align-items: center;
   margin-top: 0.0625rem;
   gap: 0.125rem;
`
