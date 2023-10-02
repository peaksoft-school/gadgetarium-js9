import React from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ImageGirle from '../../../../assets/images/sammy-order-completed-by-a-delivery-girl 1.png'
import { Button } from '../../../UI/Button'

export const EmptyFavorites = () => {
   const navigate = useNavigate()

   const homePage = () => {
      navigate('/')
   }
   return (
      <Conatiner>
         <Image src={ImageGirle} alt="menImage" />
         <SecondTitle>В избранном пока пусто</SecondTitle>
         <Paragraph>
            Воспользуйтесь поиском или каталогом, выберите нужные товары и
            добавьте их в избранное!
         </Paragraph>

         <Button
            variant="contained"
            fontSize="1rem"
            padding="11px 21px"
            backgroundhover="#E313BF"
            backgroundactive="#C90EA9"
            onClick={homePage}
         >
            К покупкам
         </Button>
      </Conatiner>
   )
}

const Conatiner = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 3rem;
   padding-bottom: 7.5rem;
`

const SecondTitle = styled('p')`
   color: #292929;
   font-family: Inter;
   font-size: 1.25vw;
   font-style: normal;
   font-weight: 500;
   line-height: 110%;
   margin: 0;
   margin-top: 2.7778vh;
   margin-bottom: 1.8519vh;
`
const Paragraph = styled('p')`
   text-align: center;
   font-family: Inter;
   font-size: 0.938vw;
   font-style: normal;
   font-weight: 400;
   line-height: 130%;
   width: 24.792vw;
   margin: 0;
   margin-bottom: 2.2222vh;
`
const Image = styled('img')`
   width: 15.625vw;
   height: 15.625vw;
`
