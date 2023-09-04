import React from 'react'
import { styled } from '@mui/material'
import ImageMen from '../../../assets/images/sammy-the-man-trying-to-find-the-right-document 1.png'
import { Button } from '../../UI/Button'

export const EmptyHistory = () => {
   return (
      <Conatiner>
         <div>
            <BlockChilde>
               <img src={ImageMen} alt="menImage" />
               <p>Здесь пока пусто</p>
            </BlockChilde>
            <Paragraph>Здесь будет храниться история ваших заказов.</Paragraph>
            <BlockButton>
               <Button variant="contained" padding="20px">
                  К покупкам
               </Button>
            </BlockButton>
         </div>
      </Conatiner>
   )
}

const Conatiner = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 5.5rem;
`

const BlockChilde = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   p {
      font-family: 'Inter';
      font-size: 1.5rem;
      font-weight: 500;
   }
`
const Paragraph = styled('p')`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 1.125rem;
`
const BlockButton = styled('div')`
   display: flex;
   justify-content: center;
`
