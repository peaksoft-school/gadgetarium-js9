import { styled } from '@mui/material'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import banner from '../../../assets/images/banner/banner.png'
import airpodsBanner from '../../../assets/images/banner/airpods-banner.jpg'
import watchBanner from '../../../assets/images/banner/watch-banner.jpg'
import laptopBanner from '../../../assets/images/banner/laptop-banner.jpg'

const banners = [
   {
      src: banner,
      id: 1,
   },
   {
      src: airpodsBanner,
      id: 2,
   },
   {
      src: watchBanner,
      id: 3,
   },
   {
      src: laptopBanner,
      id: 4,
   },
]
export const BannerCarousel = () => {
   return (
      <StyledCarousel
         autoPlay
         interval={3000}
         infiniteLoop
         showStatus={false}
         showThumbs={false}
      >
         {banners.map((banner, index) => (
            <div key={banner.id}>
               <Image src={banner.src} alt={`Banner ${index + 1}`} />
            </div>
         ))}
      </StyledCarousel>
   )
}
const Image = styled('img')`
   width: 100vw !important;
   height: 46.2963vh;
   button {
      display: none;
   }
`
const StyledCarousel = styled(Carousel)`
   width: 100%;
   .carousel.carousel-slider .control-arrow {
      display: none !important;
   }
   .carousel {
      height: 50.926vh !important;
   }
   .dot {
      background-color: #cb11ab !important;
      width: 0.416666vw !important;
      height: 0.416666vw !important;
      margin-left: 0.7407407vh !important;
      margin-right: 0.7407407vh !important;
   }
   @keyframes increaseSize {
      from {
         width: 0.416666vw;
         height: 0.416666vw;
      }
      to {
         width: 0.625vw;
         height: 0.625vw;
      }
   }
   .selected {
      animation: increaseSize 1.5s ease-in-out !important;
      width: 0.625vw !important;
      height: 0.625vw !important;
   }
   .control-dots {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 !important;
      margin-bottom: 1px !important;
   }
`
