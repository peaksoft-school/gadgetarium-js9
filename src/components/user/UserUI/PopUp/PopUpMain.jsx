// import React, { useState } from 'react'
// import { styled } from '@mui/material'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { Carousel } from 'react-responsive-carousel'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { ReactComponent as ArrowLeft } from '../../../../assets/icons/arrows/left-icon.svg'
// import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrows/right-icon.svg'

// export const PopUpMain = () => {
//    const infoPhone = useSelector((state) => state.phone.infoPhone)
//    const [currentIndex, setCurrentIndex] = useState(0)

//    const navigate = useNavigate()

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
//       <div>
//          <ButtonBlock>
//             <RightBtn onClick={handleNextClick} />
//             <LeftBtn onClick={handlePreviousClick} />
//          </ButtonBlock>
//          <CarouselStyle
//             infiniteLoop
//             selectedItem={currentIndex}
//             onChange={(index) => setCurrentIndex(index)}
//          >
//             {infoPhone.images?.map((image) => (
//                <div onClick={() => navigate('/phone/fullPicture')} key={image}>
//                   <img height="80rem" src={image} alt="gadget" />
//                </div>
//             ))}
//          </CarouselStyle>
//       </div>
//    )
// }

// const CarouselStyle = styled(Carousel)(({ theme }) => ({
//    width: '20vw',

//    '& .thumb.selected': {
//       border: `1px solid ${theme.palette.primary.main}`,
//    },

//    '& .thumb:hover': {
//       border: `1px solid ${theme.palette.primary.main}`,
//    },

//    '& .carousel .slide img': {
//       height: '45vh',
//    },
//    '& .carousel .thumbs-wrapper': {
//       width: '92%',
//       display: 'flex',
//       marginLeft: '2rem',
//       justifyContent: 'space-between',
//    },
//    img: {
//       padding: '8px',
//    },

//    '& .control-dots': {
//       display: 'none',
//    },

//    '& .carousel-status': {
//       display: 'none',
//    },
//    '& .carousel.carousel-slider .control-arrow': {
//       display: 'none',
//    },
//    '& .thumb': {
//       border: 'none',
//    },
//    '& .carousel .control-next.control-arrow': {
//       display: 'none',
//    },
//    '& .carousel .control-prev.control-arrow': {
//       display: 'none',
//    },
// }))

// const ButtonBlock = styled('div')`
//    display: flex;
//    width: 10rem;
//    justify-content: space-between;
//    position: relative;
//    top: 28rem;
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
import React, { useState } from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as ArrowLeft } from '../../../../assets/icons/arrows/left-icon.svg'
// import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrows/right-icon.svg'

export const PopUpMain = () => {
   const infoPhone = useSelector((state) => state.phone.infoPhone)
   const [currentIndex, setCurrentIndex] = useState(0)

   // const handlePreviousClick = () => {
   //    if (currentIndex > 0) {
   //       setCurrentIndex(currentIndex - 1)
   //    } else {
   //       setCurrentIndex(infoPhone.images.length - 1)
   //    }
   // }

   // const handleNextClick = () => {
   //    if (currentIndex < infoPhone.images.length - 1) {
   //       setCurrentIndex(currentIndex + 1)
   //    } else {
   //       setCurrentIndex(0)
   //    }
   // }

   return (
      <div>
         {/* <ButtonBlock>
            <LeftBtn onClick={handlePreviousClick} />
            <RightBtn onClick={handleNextClick} />
         </ButtonBlock> */}
         <NavLink>
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
         </NavLink>
      </div>
   )
}

const CarouselStyle = styled(Carousel)(({ theme }) => ({
   width: '20vw',
   textAlign: 'center',

   '& .thumb.selected': {
      border: `1px solid ${theme.palette.primary.main}`,
   },

   '& .thumb:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
   },

   '& .carousel .slide img': {
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
   '.carousel .control-arrow': {},
   '& .thumb': {
      border: 'none',
   },
}))

// const ButtonBlock = styled('div')`
//    display: flex;
//    justify-content: center;
//    position: relative;
//    top: 28rem;
// `
// const LeftBtn = styled(ArrowLeft)`
//    position: relative;
//    z-index: 2;
//    right: 8rem;
//    width: 1.8525rem;
//    height: 1.8525rem;
//    cursor: pointer;
// `
// const RightBtn = styled(ArrowRight)`
//    position: relative;
//    z-index: 2;
//    left: 8rem;
//    width: 1.8525rem;
//    height: 1.8525rem;
//    cursor: pointer;
// `
