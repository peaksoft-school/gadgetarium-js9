import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { styled } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
// import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg'

export const PopUpTestPage = () => {
   const renderCustomPrevArrow = (onClickHandler, hasPrev) => {
      return (
         <div style={{ display: 'flex' }}>
            <button
               style={{ position: 'absolute' }}
               onClick={onClickHandler}
               disabled={!hasPrev}
            >
               Previous
            </button>
         </div>
      )
   }

   const renderCustomNextArrow = (onClickHandler, hasNext) => {
      return (
         <button onClick={onClickHandler} disabled={!hasNext}>
            Next
         </button>
      )
   }

   return (
      <div>
         <CarouselStyle
            renderArrowPrev={renderCustomPrevArrow}
            renderArrowNext={renderCustomNextArrow}
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
   & .slide .previous {
      margin-top: 200px;
      margin-left: 100px;
   }
`
// const LeftBlock = styled('div')`
//    display: flex;
// `
// const RightBlock = styled('div')`
//    display: flex;
// `
// const Right = styled(ArrowRight)`
//    position: relative;
//    top: -290px;
//    left: 1150px;
// `

// const Left = styled('button')``
