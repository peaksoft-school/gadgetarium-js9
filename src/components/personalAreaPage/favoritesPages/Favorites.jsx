import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { favorireRequest } from '../../../store/order/Order.thunk'

export const Favorites = () => {
   const favoritesOrders = useSelector((state) => state.order.favorite)
   console.log(favoritesOrders, 'favoritesOrders')

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(favorireRequest())
   }, [])
   return (
      <Conatiner>
         {favoritesOrders?.map((el) => (
            <Card
               key={el.subProductId}
               sx={{ width: '210px', height: '354px' }}
            >
               <CardMedia
                  sx={{ width: 210, height: 210 }}
                  image={el.image}
                  title="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     {el.name}
                  </Typography>
                  <BlockRaiting>
                     <p>Рейтинг</p>
                     <Rating name="simple-controlled" value={el.rating} />
                     <p> ({el.rating})</p>
                  </BlockRaiting>
                  <h3>{el.price}</h3>
               </CardContent>
            </Card>
         ))}
      </Conatiner>
   )
}

const Conatiner = styled('div')`
   display: flex;
   margin-top: 2.44rem;
   .MuiTypography-root {
      width: 150px;
      color: #292929;
      font-size: 14px;
   }
   .MuiCard-root:not(:first-child) {
      margin-left: 1.88rem;
   }
   h3 {
      position: relative;
      bottom: 1rem;
   }
`
const BlockRaiting = styled('div')`
   display: flex;
   width: 10rem;
   justify-content: space-between;
   align-items: center;
   p {
      font-size: 12px;
      color: #909cb5;
   }
   .MuiRating-root {
      font-size: 1rem;
   }
`
