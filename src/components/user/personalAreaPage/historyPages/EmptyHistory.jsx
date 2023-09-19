import React from 'react'
import { Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ImageMen from '../../../../assets/images/sammy-the-man-trying-to-find-the-right-document 1.png'

export const EmptyHistory = () => {
   const navigate = useNavigate()

   const homePage = () => {
      navigate('/')
   }
   return (
      <Conatiner>
         <div>
            <BlockChilde>
               <Image src={ImageMen} alt="menImage" />
            </BlockChilde>
            <Empty>
               <p>Здесь пока пусто</p>
               <span>Здесь будет храниться история ваших заказов.</span>
            </Empty>
            <BlockButton onClick={homePage}>
               <ButtonUi variant="outlined" padding="20px">
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
   padding-bottom: 7.5rem;
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

const Empty = styled('div')`
   display: flex;
   align-items: center;
   flex-direction: column;
   p {
      font-family: 'Inter';
      font-size: 1.5rem;
      font-weight: 500;
   }
   span {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 1rem;
   }
`
const Image = styled('img')`
   width: 13.75rem;
   height: 13.75rem;
`
const BlockButton = styled('div')`
   display: flex;
   justify-content: center;
`
const ButtonUi = styled(Button)`
   margin-top: 1rem;
   &:hover {
      color: #fff;
      background-color: #cb11ab;
   }
`
