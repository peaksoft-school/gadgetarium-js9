import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CheckboxInput from '../../../UI/icon.input/CheckboxInput'
import { getCategory } from '../../../../store/cataog/categoryThunk'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { ArrowIcon } from '../../../UI/Arrow'
import { slideIn, slideOut } from '../../../../utils/common/constants/constants'

export const Category = () => {
   const dispatch = useDispatch()
   const { items, cateCategory } = useSelector((state) => state.category)

   const toggleCheckedHandler = (categoryId, category) => {
      dispatch(categoryActions.toggleCheckedHandler(categoryId))
      dispatch(categoryActions.addBrandsId())
      dispatch(categoryActions.addSelectedCategories(category))
   }

   useEffect(() => {
      dispatch(getCategory())
   }, [])

   const resetAllFilters = () => {
      dispatch(categoryActions.resetChecked())
   }

   const openHandler = () => {
      dispatch(categoryActions.setCateCategory(!cateCategory))
   }

   return (
      <Container checked={cateCategory}>
         <ButtonStyled onClick={resetAllFilters}>
            Сбросить все фильтры
         </ButtonStyled>

         <CategorySelectContainer>
            <h5>Категория</h5>
            <ArrowIcon checked={cateCategory} onClick={openHandler} />
         </CategorySelectContainer>
         {cateCategory && (
            <div className="brandContainer">
               {items?.map((el) => (
                  <div key={el.id}>
                     <CheckboxInputStyled
                        isChecked={el.checked}
                        onClick={() => toggleCheckedHandler(el.id, el)}
                     />
                     <span>{el.name}</span>
                  </div>
               ))}
            </div>
         )}
      </Container>
   )
}

const Container = styled('div')`
   box-sizing: border-box;
   padding-bottom: 1.8519vh;
   border-bottom: 1px solid #e8e8e8;

   h5 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      font-style: normal;
      line-height: normal;
   }

   .brandContainer {
      padding: 0;
      display: flex;
      gap: 0.875rem;
      align-items: start;
      flex-direction: column;
      animation: ${(props) => (props.checked ? slideIn : slideOut)} 0.3s
         ease-in-out;
      div {
         display: flex;
         gap: 0.729vw;
      }
   }
`

const CategorySelectContainer = styled('div')`
   display: flex;
   align-items: center;
   margin-bottom: 1.2963vh;
   justify-content: space-between;
`

const CheckboxInputStyled = styled(CheckboxInput)`
   margin: 0;
   width: 1.896vw;
   height: 2.797vh;
   margin-left: -0.3rem;
`

const ButtonStyled = styled('button')`
   margin: 0;
   padding: 0;
   width: 100%;
   border: none;
   font-size: 16px;
   background: none;
   font-weight: 500;
   text-align: left;
   color: #2c68f5;
   line-height: 140%;
   font-style: normal;
   text-transform: none;
   margin-bottom: 1.25rem;
   padding-bottom: 1.25rem;
   border-bottom: 1px solid #e8e8e8;
`
