import React from 'react'
import { Button, styled } from '@mui/material'
import ImageGirle from '../../../assets/images/sammy-order-completed-by-a-delivery-girl 1.png'

export const EmptyFavorites = () => {
   return (
      <Conatiner>
         <div>
            <BlockChilde>
               <Image src={ImageGirle} alt="menImage" />
            </BlockChilde>
            <Paragraph>
               <p>Здесь пока пусто</p>
               <span> Воспользуйтесь поиском или каталогом,</span>
               <span> выберите нужные товары и добавьте их в избранное!</span>
            </Paragraph>

            <BlockButton>
               <ButtonUi variant="contained" padding="20px">
                  К покупкам
               </ButtonUi>
            </BlockButton>
         </div>
      </Conatiner>
   )
}

const Conatiner = styled('div')`
   display: flex;
   justify-content: center;
   margin-top: 3rem;
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
   font-size: 1rem;
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
const Image = styled('img')`
   width: 13.75rem;
   height: 13.75rem;
`
const ButtonUi = styled(Button)`
   margin-top: 1rem;
`
