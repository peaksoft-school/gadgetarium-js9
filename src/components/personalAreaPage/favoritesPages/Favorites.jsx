import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { favorireRequest } from '../../../store/order/Order.thunk'
import { Button } from '../../UI/Button'

export const Favorites = () => {
   const favoritesOrders = useSelector((state) => state.order.favorite)

   const navigate = useNavigate()

   const homePage = () => {
      navigate('/')
   }

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(favorireRequest())
   }, [])
   return (
      <Container>
         <Block>
            {favoritesOrders?.map((el) => (
               <Card key={el.subProductId}>
                  <CardMedia
                     onClick={() => console.log(el.subProductId)}
                     sx={{ width: 210, height: 210 }}
                     image={el.image}
                  />
                  <CardContent>
                     <Typography variant="h5" component="div">
                        {el.name}
                     </Typography>
                     <BlockRaiting>
                        <p>Рейтинг</p>
                        <Rating name="simple-controlled" value={el.rating} />
                        <p> ({el.rating})</p>
                     </BlockRaiting>
                     <h3>
                        {el.price?.toLocaleString('ru-RU')}
                        <Сurrency>c</Сurrency>
                     </h3>
                  </CardContent>
               </Card>
            ))}
         </Block>
         <Btn onClick={homePage}>
            <ButtonStyle>Продолжить покупки</ButtonStyle>
         </Btn>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.44rem;
   height: 100%;
   padding-bottom: 7.5rem;
`

const Block = styled('div')`
   display: grid;
   grid-template-columns: repeat(5, 12.5rem);
   gap: 2rem;
   .MuiTypography-root {
      color: #292929;
      font-size: 14px;
      margin-top: 1.25rem;
   }
   .MuiCard-root {
      width: 13.125rem;
      cursor: pointer;
   }
   .MuiCard-root:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
   }
   .MuiCardContent-root {
      height: 9rem;
      padding: 0 0 16px 16px;
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

const Btn = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 2.5rem;
`

const ButtonStyle = styled(Button)`
   border: 1px solid #cb11ab;
   font-size: 12px;
   padding: 5px 10px 5px 10px;
   &:hover {
      color: #fff;
      background-color: #cb11ab;
   }
`
const Сurrency = styled('span')`
   border-bottom: 1.5px solid black;
`
