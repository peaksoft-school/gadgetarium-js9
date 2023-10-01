import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   getInfoDayRequest,
   getInfoMonthRequest,
   getInfoYearRequest,
} from '../../../store/infographic/Infographic.thunk'

export const Infographic = () => {
   const dispatch = useDispatch()
   const infographicSelectData = useSelector(
      (state) => state.infographic.infographic
   )
   const [infographicData, setInfographic] = useState({})
   const [num, setNum] = useState(1)

   useEffect(() => {
      dispatch(getInfoDayRequest())
      dispatch(getInfoMonthRequest())
      dispatch(getInfoYearRequest())
   }, [])

   const day = () => {
      setInfographic(infographicSelectData?.day)
      setNum(1)
   }

   const month = () => {
      setInfographic(infographicSelectData?.month)
      setNum(2)
   }

   const year = () => {
      setInfographic(infographicSelectData?.year)
      setNum(3)
   }

   useEffect(() => {
      setInfographic(infographicSelectData.day)
      setNum(1)
   }, [infographicSelectData])

   return (
      <Container>
         <Box>
            <div>
               <p className="headTitle">инфоГрафика</p>
            </div>
            <InfoAmountContainer>
               <InfoAmountBox>
                  <BoughtForTheAmountContainer>
                     <div>
                        <p className="title">
                           {infographicData?.deliveredTotalPrice?.toLocaleString()}{' '}
                           <span>c</span>
                        </p>
                     </div>
                     <div>
                        <p className="text">Выкупили на сумму</p>
                     </div>
                     <div>
                        <p className="things">
                           {infographicData?.deliveredQuantity?.toLocaleString()}{' '}
                           шт
                        </p>
                     </div>
                  </BoughtForTheAmountContainer>
                  <Line />
                  <OrderedForTheAmountContainer>
                     <div>
                        <p className="title">
                           {infographicData?.waitingTotalPrice?.toLocaleString()}{' '}
                           <span> c</span>
                        </p>
                     </div>
                     <div>
                        <p className="text">Заказали на сумму</p>
                     </div>
                     <div>
                        <p className="things">
                           {infographicData?.waitingQuantity?.toLocaleString()}
                           шт
                        </p>
                     </div>
                  </OrderedForTheAmountContainer>
               </InfoAmountBox>
               <InADayContainer>
                  <InADayBox date={num === 1} onClick={day}>
                     <span>За день</span>
                  </InADayBox>
                  <InADayBox date={num === 2} onClick={month}>
                     <span>За месяц</span>
                  </InADayBox>
                  <InADayBox date={num === 3} onClick={year}>
                     <span>За год</span>
                  </InADayBox>
               </InADayContainer>
            </InfoAmountContainer>
            <DeliveredGoodsInQuantityContainer>
               <Title>Доставлено товаров на сумму</Title>

               <DeliveredGoodsInQuantityBox>
                  <div>
                     <p className="current">
                        {infographicData.currentPeriod?.toLocaleString()}{' '}
                        <span>c</span>
                     </p>
                     <p>Текущий период</p>
                  </div>
                  <div>
                     <p className="previous">
                        {infographicData.previousPeriod?.toLocaleString()}{' '}
                        <span>c</span>
                     </p>
                     <p>Предыдущий период</p>
                  </div>
               </DeliveredGoodsInQuantityBox>
            </DeliveredGoodsInQuantityContainer>
         </Box>
      </Container>
   )
}

const Container = styled('div')`
   width: 19vw;

   p {
      margin: 0;
   }

   .headTitle {
      color: #292929;
      font-family: Manrope;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1px;
      text-transform: uppercase;
   }
`

const Box = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

const InfoAmountContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
`

const InfoAmountBox = styled('div')`
   display: flex;
   gap: 0.75rem;

   .text {
      color: #384255b2;
      font-family: Inter;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1px;

      margin-top: 0.25rem;
   }
`

const BoughtForTheAmountContainer = styled('div')`
   .title {
      color: #1556de;
      font-family: Inter;
      font-size: 1.625rem;

      span {
         color: #384255;
         font-family: Manrope;
         font-size: 1.5625rem;
         font-style: normal;
         font-weight: 500;
         line-height: normal;
         text-decoration-line: underline;
      }
   }

   .text {
      color: #384255b2;
      font-family: Inter;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1px;
   }

   .things {
      color: #2c68f5;
      font-family: Inter;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1px;

      margin-top: 0.625rem;
   }
`

const OrderedForTheAmountContainer = styled('div')`
   .title {
      color: #f99808;
      font-family: Inter;
      font-size: 1.625rem;

      span {
         color: #384255;
         font-family: Manrope;
         font-size: 1.5625rem;
         font-style: normal;
         font-weight: 500;
         line-height: normal;
         text-decoration-line: underline;
      }
   }

   .things {
      color: #f99808;
      font-family: Inter;
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 1px;

      margin-top: 0.625rem;
   }
`

const Line = styled('div')`
   width: 1px;
   height: 8vh;

   background: #cdcdcd;
`

const InADayContainer = styled('div')`
   display: flex;
`

const InADayBox = styled('div')(({ date }) => ({
   width: '14.4vw',
   textAlign: 'center',
   paddingBottom: '0.5rem',
   cursor: 'pointer',

   borderBottom: `0.125rem solid ${date === true ? '#292929' : '#CDCDCD'}`,

   ':hover': {
      backgroundColor: '#dbdbdb1f',
   },

   span: {
      color: '#292929',
      fontFamily: 'Inter',
      fontSize: '0.75rem',
      fontStyle: 'normal',
      fontWeight: `${date === true ? 700 : 400}`,
      lineHeight: 'normal',
      letterSpacing: '1px',
      textTransform: 'uppercase',
   },
}))

const DeliveredGoodsInQuantityContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1.1875rem;

   font-family: Inter;

   border-radius: 0.5rem;
   background: #1556de16;

   padding: 0.875rem 0.875rem 1.1875rem 0.875rem;
`

const Title = styled('div')`
   color: #384255;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: 1px;
`

const DeliveredGoodsInQuantityBox = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: flex-end;

   color: #384255;
   font-size: 0.75rem;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 1px;

   .current {
      color: #2fc509;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1px;
      margin-bottom: 0.25rem;

      span {
         text-decoration-line: underline;
      }
   }

   .previous {
      color: #2fc509;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1px;
      margin-bottom: 0.25rem;

      span {
         text-decoration-line: underline;
      }
   }
`
