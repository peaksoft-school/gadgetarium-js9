// import { styled } from '@mui/material'
// import React from 'react'
// import { ArrowIcon } from '../../../UI/Arrow'
// import { InputUi } from '../../../UI/Input'

// export const Price = () => {
//    return (
//       <Styled>
//          <CategorySelectContainer>
//             <h5>Стоимость</h5>
//             <ArrowIcon />
//          </CategorySelectContainer>

//          <div>
//             <InputUiStyled />
//             <InputUiStyled />
//          </div>
//       </Styled>
//    )
// }

// const Styled = styled('div')`
//    margin: 0;
// `
// const CategorySelectContainer = styled('div')`
//    display: flex;
//    align-items: center;
//    /* margin-bottom: 0.875rem; */
//    justify-content: space-between;
// `
// const InputUiStyled = styled(InputUi)`
//    width: 6.346927083333333vw;
// `
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled, TextField, Slider } from '@mui/material'
// import { useDispatch } from 'react-redux'
import { ArrowIcon } from '../../../UI/Arrow'
import { slideIn, slideOut } from '../../../../utils/common/constants/constants'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
// import {
//    getCategory,
//    sendSelectedCategories,
// } from '../../../../store/cataog/categoryThunk'

export const Price = () => {
   const { minValue, maxValue } = useSelector((state) => state.category)
   const [cate, setCate] = useState(false)
   const dispatch = useDispatch()

   const handleMinChange = (event) => {
      dispatch(categoryActions.setMinValue(event.target.value))
   }

   const handleMaxChange = (event) => {
      dispatch(categoryActions.setMaxValue(event.target.value))
   }

   // useEffect(() => {
   //    dispatch(sendSelectedCategories({ minValue, maxValue }))
   //    dispatch(getCategory())
   // }, [minValue, maxValue])

   const handleSliderChange = (event, newValue) => {
      dispatch(categoryActions.setMinValue(newValue[0]))
      dispatch(categoryActions.setMaxValue(newValue[1]))
   }
   const openHandler = () => {
      setCate((prev) => !prev)
   }

   return (
      <Container>
         <CategorySelectContainer>
            <h5>Стоимость</h5>
            <ArrowIconStyled checked={cate} onClick={openHandler} />
         </CategorySelectContainer>
         {cate && (
            <InfoPrice checked={cate}>
               <div className="ContainerTextField">
                  <TextFieldStyled
                     value={minValue}
                     onChange={handleMinChange}
                     type="number"
                     inputProps={{ min: 0, max: 100000 }}
                  />

                  <TextFieldStyled
                     value={maxValue}
                     onChange={handleMaxChange}
                     type="number"
                     inputProps={{ min: 0, max: 100000 }}
                  />
               </div>
               <SliderStyled
                  value={[minValue, maxValue]}
                  onChangeCommitted={handleSliderChange}
                  min={0}
                  max={100000}
                  valueLabelDisplay="auto"
               />
            </InfoPrice>
         )}
      </Container>
   )
}
const Container = styled('div')`
   user-select: none;
   border-bottom: 1px solid #e8e8e8;
   padding-bottom: 2.6852vh;
`

const CategorySelectContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   h5 {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      margin: 0;
      padding: 0;
   }
`
const ArrowIconStyled = styled(ArrowIcon)(({ checked }) => ({
   transition: 'transform 0.4s ease',
   transform: checked ? 'rotate(0)' : 'rotate(180deg)',
}))
const InfoPrice = styled('div')`
   animation: ${(props) => (props.checked ? slideIn : slideOut)} 0.3s
      ease-in-out;
   .ContainerTextField {
      display: flex;
      justify-content: space-between;
      margin-top: 18px;
   }
`
const TextFieldStyled = styled(TextField)`
   width: 6.347vw;
   height: 3.4259vh;
   padding: 0;
   padding: 0.7407vh 0;
`
const SliderStyled = styled(Slider)`
   /* text-align: center; */
   /* display: flex; */
   /* justify-content: center; */
   width: 14.4vw;
   padding: 0;
   margin: 0;
   margin-top: 9vh;
   /* position: absolute; */
   margin-left: 0.6vw;
`
