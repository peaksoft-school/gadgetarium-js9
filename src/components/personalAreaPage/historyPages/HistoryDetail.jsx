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

export const HistoryDetail = () => {
   const param = useParams()

   const dispatch = useDispatch()

   const orders = useSelector((state) => state.order.orderInfo)

   useEffect(() => {
      dispatch(orderByIdRequest(param))
   }, [])

   return (
      <Container>
         <h1>История заказов</h1>
         <Line />
         <BlockContainer>
            <h2>№ {orders.orderNumber}</h2>
            <BlockCard>
               {orders.productsInfoResponses?.map((el) => (
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
                           {el.productName}
                        </Typography>
                        <BlockRaiting>
                           <p>Рейтинг</p>
                           <Rating
                              name="read-only"
                              value={el.rating}
                              readOnly
                           />
                           <p> ({el.rating})</p>
                        </BlockRaiting>
                        <h3>
                           {el.price?.toLocaleString()} <Сurrency>c</Сurrency>
                        </h3>
                     </CardContent>
                  </Card>
               ))}
            </BlockCard>
            <p>Статус</p>
            <div>
               {orders.status === DELIVERED ? (
                  <Deliver>Доставлено</Deliver>
               ) : (
                  ''
               )}
            </div>
            <Block>
               <BlockChilde1>
                  <div>
                     <p>Клиент</p>
                     <Paragraph>{orders.client}</Paragraph>
                  </div>
                  <div>
                     <p>Имя</p>
                     <Paragraph>{orders.firstName}</Paragraph>
                  </div>
                  <div>
                     <p>Фамилия</p>
                     <Paragraph>{orders.lastName}</Paragraph>
                  </div>
                  <div>
                     <p>Адрес</p>
                     <Paragraph>
                        {orders.address === null ? (
                           <Paragraph>Исанова 55</Paragraph>
                        ) : (
                           orders.address
                        )}
                     </Paragraph>
                  </div>
               </BlockChilde1>

               <BlockChilde2>
                  <div>
                     <p>Телефон</p>
                     <Paragraph>{orders.phoneNumber}</Paragraph>
                  </div>
                  <div>
                     <p>Email</p>
                     <Paragraph>{orders.email}</Paragraph>
                  </div>
                  <div>
                     <p>Дата</p>
                     <Paragraph>{orders.date}</Paragraph>
                  </div>
                  <div>
                     <p>Способ оплаты</p>
                     <p>
                        {orders.typePayment === 'CASH' ? (
                           <Paragraph>Наличные</Paragraph>
                        ) : (
                           <Paragraph>Без наличные</Paragraph>
                        )}
                     </p>
                  </div>
               </BlockChilde2>
            </Block>
            <TotalDiskount>
               <p>
                  Скидка: <Span>{orders.totalDiscount}</Span>
               </p>
               <p>
                  Итого: <Span>{orders.totalPrice}</Span>
               </p>
            </TotalDiskount>
         </BlockContainer>
      </Container>
   )
}

const Container = styled('div')`
   width: 79.888vw;
   margin-top: 6rem;
   height: 94rem;
   p {
      color: #384255;
      font-family: Inter;
      font-size: 0.875rem;
      font-weight: 400;
   }
   .MuiCardMedia-root {
      height: 10rem;
   }
   .MuiTypography-root {
      margin-bottom: 0px;
   }
   h1 {
      font-family: Ubuntu;
      font-size: 1.875rem;
   }
   .MuiCard-root:not(:first-child) {
      margin-left: 2rem;
   }
   .MuiCard-root:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
   }
`

const BlockContainer = styled('div')`
   margin-top: 2.5rem;
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
const BlockRaiting = styled('div')`
   display: flex;
   width: 10rem;
   margin-top: 0.5rem;
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
const BlockCard = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 16px;
   margin-top: 1.88rem;
   padding-bottom: 1.88rem;
`
const Сurrency = styled('strong')`
   border-bottom: 1px solid black;
`
const Block = styled('div')`
   display: flex;
   width: 30rem;
   justify-content: space-between;
`
const BlockChilde1 = styled('div')`
   display: grid;
   gap: 1rem;
`
const BlockChilde2 = styled('div')`
   display: grid;
   gap: 1rem;
`
const Paragraph = styled('span')`
   color: #000;
   font-family: Manrope;
   font-size: 1rem;
`

const Span = styled('span')`
   font-family: Manrope;
   font-size: 1rem;
   font-weight: 500;
   color: #1a1a25;
`
const TotalDiskount = styled('div')`
   margin-top: 2.94rem;
`
const Line = styled('div')`
   border-bottom: 1px solid #cdcdcd;
`
