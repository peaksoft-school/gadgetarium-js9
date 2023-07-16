import { useState } from 'react'
import { styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ReactComponent } from '../../assets/icons/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg'

export const PopUpPage = () => {
   const imgs = [
      {
         id: 0,
         value: 'https://www.myphone.kg/files/media/17/17225.webp',
      },
      {
         id: 1,
         value: 'https://www.myphone.kg/files/media/17/17226.webp',
      },
      {
         id: 2,
         value: 'https://www.myphone.kg/files/media/17/17216.webp',
      },
      {
         id: 3,
         value: 'https://www.myphone.kg/files/media/17/17217.webp',
      },
      {
         id: 4,
         value: 'https://www.myphone.kg/files/media/17/17219.webp',
      },
      {
         id: 5,
         value: 'https://www.myphone.kg/files/media/17/17220.webp',
      },
      {
         id: 6,
         value: 'https://www.myphone.kg/files/media/17/17222.webp',
      },
   ]

   const [close, setClose] = useState(true)
   const [sliderData, setSliderData] = useState(imgs[0])
   const [val, setVal] = useState(0)

   const handleClosePage = () => {
      setClose(false)
   }

   const handleClick = (index) => {
      const slider = imgs[index]
      setSliderData(slider)
      setVal(index)
   }
   const handleNext = () => {
      const index = val < imgs.length - 1 ? val + 1 : 0
      setVal(index)
      const slider = imgs[index]
      setSliderData(slider)
   }
   const handlePrevious = () => {
      const isFirstSlide = val === 0
      const index = isFirstSlide ? imgs.length - 1 : val - 1
      setVal(index)
      const slider = imgs[index]
      setSliderData(slider)
   }

   return (
      <div>
         {close ? (
            <div>
               <ButtonIcons>
                  <Back onClick={handlePrevious} />
                  <Next onClick={handleNext} />
               </ButtonIcons>
               <MuiIcon onClick={handleClosePage} />
               <Images
                  style={{ width: '25rem', height: '30rem' }}
                  src={sliderData.value}
                  alt="gadjet"
               />
               <BlockFlex>
                  {imgs.map((data, index) => (
                     <BlockFlexChilde>
                        <Images2
                           onClick={() => handleClick(index)}
                           key={data.id}
                           className={sliderData.id === index ? 'clicked' : ''}
                           src={data.value}
                           alt="phone"
                        />
                     </BlockFlexChilde>
                  ))}
               </BlockFlex>
            </div>
         ) : (
            ''
         )}
      </div>
   )
}

const BlockFlex = styled('div')`
   display: flex;
   padding: 20px;
   justify-content: space-around;
   width: 40rem;
   margin-top: 5rem;
   margin-left: 400px;
`
const BlockFlexChilde = styled('div')`
   .clicked {
      width: 4.75rem;
      height: 4.75rem;
      padding: 10px;
      border: 1.443px solid #cb11ab;
   }
`

const Images = styled('img')`
   margin-left: 33rem;
`
const Images2 = styled('img')`
   width: 4.75rem;
   height: 4.75rem;
   padding: 10px;
   cursor: pointer;
`

const ButtonIcons = styled('div')`
   display: flex;
   justify-content: space-around;
`
const Back = styled(ReactComponent)`
   cursor: pointer;
   position: relative;
   transition: 20s;
   top: 300px;
   right: 100px;
`

const Next = styled(ArrowRight)`
   cursor: pointer;
   position: relative;
   transition: 20s;
   top: 300px;
   left: 100px;
`
const MuiIcon = styled(CloseIcon)`
   position: absolute;
   top: 2rem;
   left: 86rem;
   cursor: pointer;
`
