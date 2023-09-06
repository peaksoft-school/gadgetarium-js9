import { styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   memoryCapacity,
   slideIn,
   slideOut,
} from '../../../../utils/common/constants/constants'
import CheckboxInput from '../../../UI/icon.input/CheckboxInput'
import { ArrowIcon } from '../../../UI/Arrow'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
// import { sendSelectedCategories } from '../../../../store/cataog/categoryThunk'

export const MemoryСapacity = () => {
   const { cateMemory } = useSelector((state) => state.category)
   const dispatch = useDispatch()

   const openHandler = () => {
      dispatch(categoryActions.setCateMemory(!cateMemory))
   }

   const postTitile = () => {
      dispatch(categoryActions.memoryPhone())
   }

   return (
      <Container checked={cateMemory}>
         <CategorySelectContainer>
            <h5>Объем памяти (GB)</h5>
            <ArrowIcon checked={cateMemory} onClick={openHandler} />
         </CategorySelectContainer>
         {cateMemory && (
            <div className="content">
               {memoryCapacity?.map((el) => (
                  <div key={el.id}>
                     <CheckboxInputStyled
                        isChecked={el.checked}
                        onClick={postTitile}
                     />
                     <span>{el.title}</span>
                  </div>
               ))}
            </div>
         )}
      </Container>
   )
}

const Container = styled('div')`
   margin-top: 1.8519vh;
   .content {
      display: flex;
      flex-direction: column;
      gap: 1.2963vh;
      margin-top: 1.2963vh;
      animation: ${(props) => (props.checked ? slideIn : slideOut)} 0.3s
         ease-in-out;
      div {
         display: flex;
         align-items: center;
         gap: 0.625vw;
      }
   }
`
const CategorySelectContainer = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1.2963vh;
   h5 {
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      margin: 0;
      padding: 0;
   }
`
const CheckboxInputStyled = styled(CheckboxInput)`
   margin: 0;
   width: 1.896vw;
   height: 2.797vh;
   margin-left: -0.3rem;
`
