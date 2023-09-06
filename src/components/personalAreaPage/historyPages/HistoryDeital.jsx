import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import { DELIVERED } from '../../../utils/common/constants/globalConstants'
import { orderByIdRequest } from '../../../store/order/Order.thunk'

export const HistoryDeital = () => {
   const orders = useSelector((state) => state.order.orderInfo)
   const dispatch = useDispatch()
   const params = useParams()
   console.log(params)
   useEffect(() => {
      dispatch(orderByIdRequest(orderId))
   }, [])

   return (
      <Conatiner>
         <h2>№ 1521751218</h2>
         <BlockCard>
            {orders.productResponseList?.map((el) => (
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
                     <Typography gutterBottom variant="p" component="div">
                        {el.name}
                     </Typography>
                     <BlockRaiting>
                        <p>Рейтинг</p>
                        <Rating name="simple-controlled" value={el.rating} />
                        <p> ({el.rating})</p>
                     </BlockRaiting>
                     <h3>
                        {el.sumOfDiscount}
                        <Сurrency>c</Сurrency>
                     </h3>
                  </CardContent>
               </Card>
            ))}
         </BlockCard>
         <p>Статус</p>
         <div>
            {orders.status === DELIVERED ? <Deliver>Доставлено</Deliver> : ''}
         </div>
         <Block>
            <div>
               <p>Телефон</p>
               <span>{orders.phoneNumber}</span>
            </div>
            <div>
               <p>Адрес</p>
               <span>
                  {orders.address === null ? (
                     <span>Исанова 55</span>
                  ) : (
                     orders.address
                  )}
               </span>
            </div>
         </Block>
      </Conatiner>
   )
}

const Conatiner = styled('div')`
   margin-top: 6rem;
   p {
      color: #384255;
      font-family: Inter;
      font-size: 0.875rem;
      font-weight: 400;
   }
   span {
      font-family: Manrope;
      font-size: 1rem;
      font-weight: 400;
   }
   .MuiCardMedia-root {
      height: 10rem;
   }
   .MuiTypography-root {
      margin-bottom: 0px;
   }
`

const Deliver = styled('p')`
   display: flex;
   justify-content: center;
   color: #033152;
   font-family: Manrope;
   font-size: 0.875rem;
   font-weight: 600;
   padding: 0.375rem 0.625rem;
   border-radius: 0.375rem;
   width: 7.8125rem;
   background: #bddef1;
`
const Block = styled('div')`
   display: grid;
   gap: 1.25rem;
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
`
const BlockCard = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 16px;
   margin-top: 1.88rem;
`
const Сurrency = styled('strong')`
   border-bottom: 1px solid black;
`
