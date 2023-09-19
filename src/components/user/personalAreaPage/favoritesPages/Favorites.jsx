import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { favorireRequest } from '../../../../store/order/Order.thunk'
import { Button } from '../../../UI/Button'
import { SecondProductCard } from '../../UserUI/uiCart/SecondProductCard'

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
               <SecondProductCard key={el.subProductId} el={el} />
            ))}
         </Block>

         <ButtonBlock>
            <ButtonStyle onClick={homePage} variant="outlined">
               Продолжить покупки
            </ButtonStyle>
         </ButtonBlock>
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 2.44rem;
   height: 100%;
   padding-bottom: 7.5rem;
`

const Block = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 25px;

   .MuiTypography-root {
      color: #292929;
      font-size: 0.875rem;
      margin-top: 1.25rem;
   }
   .MuiCard-root {
      width: 13.125rem;
      cursor: pointer;
   }

   .MuiCardContent-root {
      height: 9rem;
      padding: 0 0 16px 16px;
   }
`

const ButtonBlock = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 2.5rem;
`

const ButtonStyle = styled(Button)`
   border: 1px solid #cb11ab;
   font-size: 1rem;
   padding: 0.55rem 1.55rem 0.55rem 1.55rem;
   &:hover {
      color: #fff;
      background-color: #cb11ab;
   }
`
