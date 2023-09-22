import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'

export const PopUpMain = () => {
   const infoPhone = useSelector((state) => state.product.infoPhone)

   const { productId } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getInfoPage())
   }, [])

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
      <ButtonBlock>
         <LeftBtn onClick={handlePreviousClick} />
         <CarouselStyle
            infiniteLoop
            selectedItem={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
         >
            {infoPhone.images?.map((image) => (
               <div
                  onClick={() =>
                     navigate(`/product/${productId}/details/fullPicture`)
                  }
                  key={image}
               >
                  <img src={image} alt="gadget" />
               </div>
            ))}
         </CarouselStyle>
         <RightBtn onClick={handleNextClick} />
      </ButtonBlock>
   )
}

const CarouselStyle = styled(Carousel)(({ theme }) => ({
   '& .thumb.selected': {
      border: `1px solid ${theme.palette.primary.main}`,
   },
   '& .carousel .thumbs-wrapper': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '20vh',
      margin: '0px',
   },
   '& .carousel .slide img': {
      height: '56vh',
   },

   '& .thumb:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
   },
   '& .carousel .thumb': {
      marginRight: '0px',
      padding: '0px',
   },

   img: {
      width: '4.375rem',
      height: '4.375rem',
      padding: '10px',
   },

   '& .control-dots': {
      display: 'none',
   },

   '& .carousel-status': {
      display: 'none',
   },
   '& .thumb': {
      border: 'none',
   },
   '& .carousel.carousel-slider .control-arrow': {
      display: 'none',
   },
}))
const ButtonBlock = styled('div')`
   display: flex;
   align-items: flex-end;
`
const LeftBtn = styled(ArrowBackIosNewIcon)`
   z-index: 2;
   height: 10rem;
   cursor: pointer;
   color: #909cb5;
`
const RightBtn = styled(ArrowForwardIosIcon)`
   z-index: 2;
   height: 10rem;
   cursor: pointer;
   color: #909cb5;
`
