import React from 'react'
import { styled } from '@mui/material'
import ImageMen from '../../../assets/images/sammy-order-completed-by-a-delivery-girl 1.png'
import { Button } from '../../UI/Button'

export const EmptyFavorites = () => {
   return (
      <Conatiner>
         <div>
            <BlockChilde>
               <img src={ImageMen} alt="menImage" />
            </BlockChilde>
            <Paragraph>
               <p>Здесь пока пусто</p>
               <span> Воспользуйтесь поиском или каталогом,</span>
               <span> выберите нужные товары и добавьте их в избранное!</span>
            </Paragraph>

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
`
const Paragraph = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 1.125rem;
   p {
      font-family: 'Inter';
      font-size: 1.5rem;
      font-weight: 500;
   }
`

const BlockButton = styled('div')`
   display: flex;
   margin-top: 1.5rem;
   justify-content: center;
`
