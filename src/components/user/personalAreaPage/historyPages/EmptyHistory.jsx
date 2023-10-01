import React from 'react'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import imageMan from '../../../../assets/images/sammy-the-man-trying-to-find-the-right-document 1.png'
import { Button } from '../../../UI/Button'

export const EmptyHistory = () => {
   const navigate = useNavigate()

   const homePage = () => {
      navigate('/')
   }
   return (
      <Conatiner>
         <Image src={imageMan} alt="menImage" />
         <SecondTitle>Здесь пока пусто</SecondTitle>
         <Paragraph>Здесь будет храниться история ваших заказов.</Paragraph>
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
   margin: 0;
   margin-bottom: 2.2222vh;
`
const Image = styled('img')`
   width: 15.625vw;
   height: 15.625vw;
`
