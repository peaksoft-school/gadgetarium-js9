import { Rating as RatingMui, styled } from '@mui/material'
import React, { useState } from 'react'

export const Rating = () => {
   const [totalRating, setTotalRating] = useState(0)
   const [totalVotes, setTotalVotes] = useState(0)

   const handleRatingChange = (newRating) => {
      if (newRating !== null) {
         // Проверяем, что пользователь выставил оценку
         const newTotalRating = totalRating + newRating
         const newTotalVotes = totalVotes + 1

         setTotalRating(newTotalRating)
         setTotalVotes(newTotalVotes)
      }
   }

   const averageRating =
      totalVotes === 0 ? 0 : (totalRating / totalVotes).toFixed(1)

   return (
      <Container className="App">
         <h1>Рейтинг приложения</h1>
         <h3>
            Рейтинг: {averageRating} (Голосов: {totalVotes})
         </h3>
         <RatingMui
            name="app-rating"
            value={null}
            precision={0.5}
            onChange={handleRatingChange}
            // emptyIcon={<StarBorderIcon fontSize="inherit" />}
         />
      </Container>
   )
}

const Container = styled('div')`
   .MuiRating-root {
      font-size: 30px;
   }
`
