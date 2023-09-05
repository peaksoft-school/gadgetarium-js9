import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getBanners } from '../../../store/main.page/main.page.thunk'

export const BannerCarousel = React.memo(() => {
   const dispatch = useDispatch()
   const banner = useSelector((state) => state.mainPage.banner)

   useEffect(() => {
      dispatch(getBanners())
   }, [])
   return (
      <StyledCarousel
         autoPlay
         interval={3000}
         infiniteLoop
         showStatus={false}
         showThumbs={false}
      >
         {banner?.map((banner, index) => (
            <div key={banner.id}>
               <Image src={banner.images[0]} alt={`Banner ${index + 1}`} />
            </div>
         ))}
      </StyledCarousel>
   )
})
BannerCarousel.displayName = 'Banner'
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
