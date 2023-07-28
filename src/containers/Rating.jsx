// import { Star, StarBorder, StarHalf } from '@mui/icons-material'
// import React from 'react'

// export const Rating = ({ value }) => {
//    const stars = []
//    const fullStars = Math.floor(value)
//    const hasHalfStar = value % 1 !== 0

//    for (let i = 0; i < fullStars; i++) {
//       stars.push(<Star key={`star-${i}`} />)
//    }

//    if (hasHalfStar) {
//       stars.push(<StarHalf key="star-half" />)
//    }

//    while (stars.length < 5) {
//       stars.push(<StarBorder key={`star-border-${stars.length}`} />)
//    }

//    return <div>{stars}</div>
// }
