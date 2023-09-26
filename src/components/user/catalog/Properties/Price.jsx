import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled, TextField, Slider } from '@mui/material'
import { ArrowIcon } from '../../../UI/Arrow'
import { slideIn, slideOut } from '../../../../utils/common/constants/constants'
import { categoryActions } from '../../../../store/cataog/catalogSlice'

export const Price = () => {
   const { minValue, maxValue, allCate } = useSelector(
      (state) => state.category
   )
   const dispatch = useDispatch()
   const [cate, setCate] = useState(true)
   const handleMinChange = (event) => {
      dispatch(categoryActions.setMinValue(event.target.value))
   }

   const handleMaxChange = (event) => {
      dispatch(categoryActions.setMaxValue(event.target.value))
   }

   const handleSliderChange = (event, newValue) => {
      dispatch(categoryActions.setMinValue(newValue[0]))
      dispatch(categoryActions.setMaxValue(newValue[1]))
   }
   const openHandler = () => {
      setCate(!cate)
   }

   useEffect(() => {
      setCate(allCate)
   }, [allCate])

   return (
      <Container>
         <CategorySelectContainer onClick={openHandler}>
            <h5>Стоимость</h5>
            <ArrowIcon checked={cate} />
         </CategorySelectContainer>
         {cate && (
            <InfoPrice checked={cate}>
               <div className="ContainerTextField">
                  <TextFieldStyled
                     label="От"
                     type="number"
                     value={minValue}
                     onChange={handleMinChange}
                     inputProps={{ min: 0, max: maxValue }}
                  />

                  <TextFieldStyled
                     label="До"
                     type="number"
                     value={maxValue}
                     onChange={handleMaxChange}
                     inputProps={{ min: 0, max: maxValue }}
                  />
               </div>
               <SliderStyled
                  value={[minValue, maxValue]}
                  onChangeCommitted={handleSliderChange}
                  min={0}
                  max={250000}
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
   padding-bottom: 1.8519vh;
   margin-top: 1.8519vh;
`

const CategorySelectContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1.2963vh;
   cursor: pointer;
   h5 {
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      margin: 0;
      padding: 0;
   }
`

const InfoPrice = styled('div')`
   animation: ${(props) => (props.checked ? slideIn : slideOut)} 0.3s
      ease-in-out;
   .ContainerTextField {
      display: flex;
      justify-content: space-between;
      margin-top: 1.6667vh;
   }
`

const TextFieldStyled = styled(TextField)`
   width: 6.347vw;
   height: 3.4259vh;
   padding: 0;
   padding: 0.7407vh 0;
`

const SliderStyled = styled(Slider)`
   width: 93%;
   padding: 0;
   margin: 0;
   margin-top: 9vh;
   margin-left: 0.6vw;
`
