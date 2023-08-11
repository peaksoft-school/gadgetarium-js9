import { styled } from '@mui/material'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const banners = [
   { src: 'banner1.jpg', id: 1 },
   { src: 'banner2.jpg', id: 2 },
   { src: 'banner3.jpg', id: 3 },
]
export const BannerCarousel = () => {
   return (
      <Carousel
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
      </Carousel>
   )
}
const Image = styled('img')`
   width: 20vw !important;
   height: 46.2963vh;
   button {
      display: none;
   }
`
