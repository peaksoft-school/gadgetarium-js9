import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { favorireRequest } from '../../../store/order/Order.thunk'

export const Favorites = () => {
   const [value, setValue] = useState(2)
   const favoritesOrders = useSelector((state) => state.order.favorite)
   console.log(favoritesOrders, 'favoritesOrders')

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(favorireRequest())
   }, [])
   return (
      <Conatiner>
         <Card sx={{ width: '210px', height: '354px' }}>
            {favoritesOrders?.map((el) => {
               return (
                  <div key={el.subProductId}>
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
                           <Rating
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                 setValue(newValue)
                              }}
                           />
                           <p> (56)</p>
                        </BlockRaiting>
                        <h3>{el.price}</h3>
                     </CardContent>
                  </div>
               )
            })}
         </Card>
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
