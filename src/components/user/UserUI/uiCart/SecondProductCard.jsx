import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postRecentlyViewedProduct } from '../../../../store/informationPhone/infoPageThunk'

export const SecondProductCard = ({ el }) => {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const addViwedProduct = () => {
      dispatch(postRecentlyViewedProduct(el.subProductId))

      navigate(`/product/${el.productId}/details`)
   }

   return (
      <CardStyled>
         <CardMedia
            onClick={addViwedProduct}
            sx={{ width: 210, height: 210 }}
            image={el.image}
         />
         <CardContent>
            <Typography variant="h5" component="div">
               {el.name}
               {el.productName}
            </Typography>
            <BlockRating>
               <p>Рейтинг</p>
               <Rating name="read-only" value={el.rating} readOnly />
               <p> ({el.rating})</p>
            </BlockRating>
            <Price>
               {el.price?.toLocaleString()} <Сurrency>c</Сurrency>
            </Price>
         </CardContent>
      </CardStyled>
   )
}

const CardStyled = styled(Card)`
   width: 13.125rem;

   .MuiTypography-root {
      font-family: Inter;
      font-size: 0.875rem;
      font-weight: 500;
   }
   &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
   }
`

const BlockRating = styled('div')`
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

const Сurrency = styled('span')`
   border-bottom: 1.5px solid black;
`
const Price = styled('p')`
   font-family: Inter !important;
   font-size: 1.125rem !important;
   font-weight: 700 !important;
`
