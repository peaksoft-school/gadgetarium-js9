import { styled } from '@mui/material'
import React from 'react'
import fiveStars from '../assets/images/fiveStars.png'
import fourStars from '../assets/images/fourStars.png'
import threeStars from '../assets/images/threeStars.png'
import twoStars from '../assets/images/twoStars.png'
import oneStars from '../assets/images/oneStars.png'
import { Button } from '../components/UI/Button'

export const Rewievs = () => {
   return (
      <Container>
         <div className="sad">
            <div>
               <h2>4,5</h2>
               <h1>img</h1>
               <p>789 отзывов</p>
            </div>
            <div className="dsadsa">
               <img src={fiveStars} alt="dsa" />
               <p>23 отзывов</p>
               <img src={fourStars} alt="dsa" />
               <p>5 отзывов</p>
               <img src={threeStars} alt="dsa" />
               <p>17 отзывов</p>
               <img src={twoStars} alt="dsa" />
               <p>4 отзывов</p>
               <img src={oneStars} alt="dsa" />
               <p>2 отзывов</p>
            </div>
         </div>
         <Button variant="contained">Оставить отзыв</Button>
      </Container>
   )
}

const Container = styled('div')`
   width: 25.5625rem;
   height: 13.9375rem;

   .sad {
      display: flex;

      width: 20.5625rem;
      width: 6.25rem;
      .dsadsa {
      }
      p {
         display: inline-block;
      }
   }
`
