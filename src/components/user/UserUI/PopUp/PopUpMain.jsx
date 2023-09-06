import React, { useState } from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useSelector } from 'react-redux'
import { ReactComponent as ArrowLeft } from '../../../../assets/icons/arrows/left-icon.svg'
import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrows/right-icon.svg'

export const PopUpMain = () => {
   const infoPhone = useSelector((state) => state.phone.infoPhone)
   const [currentIndex, setCurrentIndex] = useState(0)

   const handlePreviousClick = () => {
      if (currentIndex > 0) {
         setCurrentIndex(currentIndex - 1)
      } else {
         setCurrentIndex(infoPhone.images.length - 1)
      }
   }

   const handleNextClick = () => {
      if (currentIndex < infoPhone.images.length - 1) {
         setCurrentIndex(currentIndex + 1)
      } else {
         setCurrentIndex(0)
      }
   }
   return (
      <div>
         <ButtonBlock>
            <LeftBtn onClick={handlePreviousClick} />
            <RightBtn onClick={handleNextClick} />
         </ButtonBlock>
         <CarouselStyle
            infiniteLoop
            selectedItem={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
         >
            {infoPhone.images?.map((image) => (
               <div key={image}>
                  <img height="80rem" src={image} alt="gadget" />
               </div>
            ))}
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
      width: '25vw',
      height: '45vh',
   },
   img: {
      padding: '8px',
   },

   '& .control-dots': {
      display: 'none',
   },

   '& .carousel-status': {
      display: 'none',
   },
   '& .carousel.carousel-slider .control-arrow': {
      display: 'none',
   },
}))

const ButtonBlock = styled('div')`
   display: flex;
   justify-content: center;
   position: relative;
   top: 28rem;
`
const LeftBtn = styled(ArrowLeft)`
   position: relative;
   z-index: 2;
   right: 8rem;
   width: 1.8525rem;
   height: 1.8525rem;
   cursor: pointer;
`
const RightBtn = styled(ArrowRight)`
   position: relative;
   z-index: 2;
   left: 8rem;
   width: 1.8525rem;
   height: 1.8525rem;
   cursor: pointer;
`
