import React from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ReactComponent } from '../../assets/icons/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg'

export const PopUpTestPage = () => {
   return (
      <div>
         <CarouselStyle
            renderArrowPrev={(onClickHandler) => (
               <ArrowLeft
                  style={{ display: 'flex' }}
                  onClick={onClickHandler}
               />
            )}
            renderArrowNext={(onClickHandler) => (
               <ArrowRight onClick={onClickHandler} />
            )}
         >
            <div>
               <img
                  className="img1"
                  width="150px"
                  height="100px"
                  src="https://www.myphone.kg/files/media/17/17225.webp"
                  alt=""
               />
            </div>
            <div>
               <img
                  className="img2"
                  width="150px"
                  height="100px"
                  src="https://www.myphone.kg/files/media/17/17226.webp"
                  alt=""
               />
            </div>
            <div>
               <img
                  className="img3"
                  width="150px"
                  height="100px"
                  src="https://www.myphone.kg/files/media/17/17216.webp"
                  alt=""
               />
            </div>
            <div>
               <img
                  className="img4"
                  width="150px"
                  height="100px"
                  src="https://www.myphone.kg/files/media/17/17217.webp"
                  alt=""
               />
            </div>
            <div>
               <img
                  className="img5"
                  width="150px"
                  height="100px"
                  src="https://www.myphone.kg/files/media/17/17219.webp"
                  alt=""
               />
            </div>
            <div>
               <img
                  className="img6"
                  width="150px"
                  height="100px"
                  src="https://www.myphone.kg/files/media/17/17220.webp"
                  alt=""
               />
            </div>
            <div>
               <img
                  className="img7"
                  width="150px"
                  height="100px"
                  src="https://www.myphone.kg/files/media/17/17222.webp"
                  alt=""
               />
            </div>
         </CarouselStyle>
      </div>
   )
}

const CarouselStyle = styled(Carousel)`
   text-align: center;
   & .thumb.selected {
      border: 1px solid rgb(195, 46, 195);
   }
   & .thumb:hover {
      border: 1px solid rgb(195, 46, 195);
   }
   & .carousel .slide img {
      position: relative;
      width: 25rem;
      height: 30rem;
   }
   & .img1 {
      padding: 10px;
   }
   & .img2 {
      padding: 10px;
   }
   & .img3 {
      padding: 10px;
   }
   & .img4 {
      padding: 10px;
   }
   & .img5 {
      padding: 10px;
   }
   & .img6 {
      padding: 10px;
   }
   & .img7 {
      padding: 10px;
   }
   & .control-dots {
      display: none;
   }
   & .carousel-status {
      display: none;
   }
`

const ArrowLeft = styled(ReactComponent)`
   position: relative;
   top: 200px;
`
