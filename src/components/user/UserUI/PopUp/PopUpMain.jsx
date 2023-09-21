// import React, { useEffect, useState } from 'react'
// import { styled } from '@mui/material'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { Carousel } from 'react-responsive-carousel'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate, useParams } from 'react-router-dom'
// import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'
// import { ReactComponent as ArrowLeft } from '../../../../assets/icons/arrows/left-icon.svg'
// import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrows/right-icon.svg'

// export const PopUpMain = () => {
//    const infoPhone = useSelector((state) => state.product.infoPhone)

//    const { productId } = useParams()

//    const navigate = useNavigate()

//    const dispatch = useDispatch()

//    useEffect(() => {
//       dispatch(getInfoPage())
//    }, [])

//    const [currentIndex, setCurrentIndex] = useState(0)

//    const handlePreviousClick = () => {
//       if (currentIndex > 0) {
//          setCurrentIndex(currentIndex - 1)
//       } else {
//          setCurrentIndex(infoPhone.images.length - 1)
//       }
//    }

//    const handleNextClick = () => {
//       if (currentIndex < infoPhone.images.length - 1) {
//          setCurrentIndex(currentIndex + 1)
//       } else {
//          setCurrentIndex(0)
//       }
//    }
//    return (
//       <>
//          <ButtonBlock>
//             <LeftBtn onClick={handlePreviousClick} />
//             <RightBtn onClick={handleNextClick} />
//          </ButtonBlock>
//          <CarouselStyle
//             infiniteLoop
//             selectedItem={currentIndex}
//             onChange={(index) => setCurrentIndex(index)}
//          >
//             {infoPhone.images?.map((image) => (
//                <div
//                   onClick={() =>
//                      navigate(`/product/${productId}/details/fullPicture`)
//                   }
//                   key={image}
//                >
//                   <img src={image} alt="gadget" />
//                </div>
//             ))}
//          </CarouselStyle>
//       </>
//    )
// }

// const CarouselStyle = styled(Carousel)(({ theme }) => ({
//    '& .thumb.selected': {
//       border: `1px solid ${theme.palette.primary.main}`,
//    },
//    '& .carousel .thumbs-wrapper': {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: '100%',
//       height: '20vh',
//       margin: '0px',
//    },
//    '& .carousel .slide img': {
//       width: '19rem',
//       height: '56vh',
//    },

//    '& .thumb:hover': {
//       border: `1px solid ${theme.palette.primary.main}`,
//    },

//    img: {
//       width: '4.375rem',
//       height: '4.375rem',
//       padding: '10px',
//    },

//    '& .control-dots': {
//       display: 'none',
//    },

//    '& .carousel-status': {
//       display: 'none',
//    },
//    '& .thumb': {
//       border: 'none',
//    },
//    '& .carousel.carousel-slider .control-arrow': {
//       display: 'none',
//    },
// }))
// const ButtonBlock = styled('div')`
//    display: flex;
// `
// const LeftBtn = styled(ArrowLeft)`
//    z-index: 2;
//    width: 1.8525rem;
//    height: 1.8525rem;
//    cursor: pointer;
// `
// const RightBtn = styled(ArrowRight)`
//    z-index: 2;
//    width: 1.8525rem;
//    height: 1.8525rem;
//    cursor: pointer;
// `
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getInfoPage } from '../../../../store/informationPhone/infoPageThunk'
import { ReactComponent as ArrowLeft } from '../../../../assets/icons/arrows/left-icon.svg'
import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrows/right-icon.svg'

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
      <Container>
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
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   flex-direction: column;
`

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
      width: '19rem',
      height: '56vh',
   },

   '& .thumb:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
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
   width: 98%;
   justify-content: space-between;
   align-items: center;
   position: relative;
   top: 34.5rem;
`
const LeftBtn = styled(ArrowLeft)`
   z-index: 2;
   width: 1.8525rem;
   height: 1.8525rem;
   cursor: pointer;
`
const RightBtn = styled(ArrowRight)`
   z-index: 2;
   width: 1.8525rem;
   height: 1.8525rem;
   cursor: pointer;
`
