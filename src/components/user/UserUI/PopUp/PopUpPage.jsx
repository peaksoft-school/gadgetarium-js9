import React from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useSelector } from 'react-redux'
import BackButton from '../../../UI/icon.button/back.forth.buttons/BackButton'
import ForthButton from '../../../UI/icon.button/back.forth.buttons/ForthButton'

import { ReactComponent as Cross } from '../../../../assets/icons/cross/big-cross-icon.svg'

export const PopUpPage = ({ openComponent }) => {
   const infoPhone = useSelector((state) => state.phone.infoPhone)
   return (
      <div>
         <BlockCross onClick={openComponent}>
            <Cross />
         </BlockCross>
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
            {infoPhone.images?.map((image) => (
               <div style={{ padding: '50px' }} key={image}>
                  <img width="10vw" height="90px" src={image} alt="gadget" />
               </div>
            ))}
         </CarouselStyle>
      </div>
   )
}

const BlockCross = styled('div')`
   display: flex;
   position: relative;
   width: 98vw;
   bottom: 3rem;
   justify-content: flex-end;
   cursor: pointer;
`
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
      width: '27vw',
      height: '56vh',
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
   top: 15rem;
   left: 12.5rem;
   cursor: pointer;
`
const ArrowNext = styled('div')`
   z-index: 2;
   position: absolute;
   top: 15rem;
   left: 71.875rem;
`
