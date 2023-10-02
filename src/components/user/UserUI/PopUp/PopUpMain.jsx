import React, { useState } from 'react'
import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useSelector } from 'react-redux'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { PopUpPage } from './PopUpPage'
import { useCustomSearchParams } from '../../../../hooks/useCustomSearchParams'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 900,
   height: 700,
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
   borderRadius: '10px',
}

export const PopUpMain = () => {
   const infoPhone = useSelector((state) => state.product.infoPhone)

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

   const { params, setParam, deleteParam } = useCustomSearchParams()

   const handleOpen = () => {
      setParam('fullPicture', 'true')
   }
   const handleClose = () => deleteParam('fullPicture')
   return (
      <>
         <Container>
            <CarouselStyle
               infiniteLoop
               selectedItem={currentIndex}
               onChange={(index) => setCurrentIndex(index)}
            >
               {infoPhone.images?.map((image) => (
                  <div onClick={handleOpen} key={image}>
                     <img src={image} alt="gadget" />
                  </div>
               ))}
            </CarouselStyle>
            <ButtonBlock>
               <ButtonBlockChilde>
                  <LeftBtn onClick={handlePreviousClick} />
                  <RightBtn onClick={handleNextClick} />
               </ButtonBlockChilde>
            </ButtonBlock>
         </Container>

         <Modal
            open={params.has('fullPicture')}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <PopUpPage handleClose={handleClose} />
            </Box>
         </Modal>
      </>
   )
}

const CarouselStyle = styled(Carousel)(({ theme }) => ({
   width: '30vw',
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
      width: '304px',
      height: '364px',
   },

   '& .thumb:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
   },
   '& .carousel .thumb': {
      marginRight: '10px',
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
   '.control-arrow': {
      display: 'none',
   },
}))

const Container = styled('div')`
   display: flex;
   flex-direction: column;
`

const ButtonBlock = styled('div')`
   display: flex;
   justify-content: center;
   position: relative;
   bottom: 7.7rem;
`

const ButtonBlockChilde = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 28.125rem;
`

const LeftBtn = styled(ArrowBackIosNewIcon)`
   position: absolute;
   left: 5rem;
   z-index: 0;
   cursor: pointer;
   color: #909cb5;
`
const RightBtn = styled(ArrowForwardIosIcon)`
   position: absolute;
   right: 5rem;
   z-index: 0;
   cursor: pointer;
   color: #909cb5;
`
