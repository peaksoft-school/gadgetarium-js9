import React from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import BackButton from '../UI/icon.button/back.forth.buttons/BackButton'
import ForthButton from '../UI/icon.button/back.forth.buttons/ForthButton'

const Image = [
   { id: 1, link: 'https://www.myphone.kg/files/media/17/17225.webp' },
   { id: 2, link: 'https://www.myphone.kg/files/media/17/17226.webp' },
   { id: 3, link: 'https://www.myphone.kg/files/media/17/17216.webp' },
   { id: 4, link: 'https://www.myphone.kg/files/media/17/17217.webp' },
   { id: 5, link: 'https://www.myphone.kg/files/media/17/17219.webp' },
   { id: 6, link: 'https://www.myphone.kg/files/media/17/17220.webp' },
   { id: 7, link: 'https://www.myphone.kg/files/media/17/17222.webp' },
]

export const PopUpPage = () => {
   return (
      <div>
         <CarouselStyle
            infiniteLoop
            renderArrowPrev={(onClickHandler) => (
               <ArrowBack>
                  <BackButton bigButton onClick={onClickHandler} />
               </ArrowBack>
            )}
            renderArrowNext={(onClickHandler) => (
               <ArrowNext>
                  <ForthButton bigButton onClick={onClickHandler} />
               </ArrowNext>
            )}
         >
            {Image.map((el) => {
               return (
                  <div style={{ padding: '50px' }}>
                     <img
                        width="150px"
                        height="90px"
                        src={el.link}
                        alt="gadget"
                     />
                  </div>
               )
            })}
         </CarouselStyle>
      </div>
   )
}
const CarouselStyle = styled(Carousel)(({ theme }) => ({
   textAlign: 'center',

   '& .thumb.selected': {
      border: `1px solid ${theme.palette.primary.main}`,
   },

   '& .thumb:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
   },

   '& .carousel .slide img': {
      position: 'relative',
      width: '25rem',
      height: '30rem',
   },

   img: {
      padding: '10px',
   },

   '& .control-dots': {
      display: 'none',
   },

   '& .carousel-status': {
      display: 'none',
   },
}))

const ArrowBack = styled('div')`
   position: absolute;
   z-index: 2;
   top: 190px;
   left: 200px;
   cursor: pointer;
`
const ArrowNext = styled('div')`
   z-index: 2;
   position: absolute;
   top: 190px;
   left: 1130px;
`
