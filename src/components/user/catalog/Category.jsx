import React, { useEffect, useState } from 'react'
import { keyframes, styled } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CheckboxInput from '../../UI/icon.input/CheckboxInput'
import { ReactComponent as Strelka } from '../../../assets/icons/arrows/up-icon.svg'
import { getCategory } from '../../../store/cataog/categoryThunk'
import { categoryActions } from '../../../store/cataog/catalogSlice'

export const Category = () => {
   const dispatch = useDispatch()
   const { items } = useSelector((state) => state.category)
   const [cate, setCate] = useState(false)

   const toggleCheckedHandler = (categoryId, category) => {
      dispatch(categoryActions.toggleCheckedHandler(categoryId))
      dispatch(categoryActions.addBrandsId())
      dispatch(categoryActions.addSelectedCategories(category))
   }

   const ResetAllFilters = () => {
      dispatch(categoryActions.resetChecked())
      setCate(false)
   }
   useEffect(() => {
      dispatch(getCategory())
   }, [])

   const openHandler = () => {
      setCate((prev) => !prev)
   }

   return (
      <Container checked={cate}>
         <ButtonStyled onClick={ResetAllFilters}>
            Сбросить все фильтры
         </ButtonStyled>

         <CategorySelectContainer>
            <h5>Категория</h5>
            <StrelkaStyled checked={cate} onClick={openHandler} />
         </CategorySelectContainer>
         {cate && (
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

const slideIn = keyframes`
     from {
       opacity: 0;
       transform: translateY(-10px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   `

const slideOut = keyframes`
     from {
        opacity: 1;
        transform: translateY(0);
     }
     to {
       opacity: 0;
       transform: translateY(-10px);
     }
     `

const Container = styled('div')`
   user-select: none;
   width: 15.15625vw;
   margin-bottom: 1.25rem;
   padding-bottom: 1.25rem;
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

const StrelkaStyled = styled(Strelka)(({ checked }) => ({
   transition: 'transform 0.4s ease',
   transform: checked ? 'rotate(0)' : 'rotate(180deg)',
}))

const CategorySelectContainer = styled('div')`
   display: flex;
   align-items: center;
   margin-bottom: 0.875rem;
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
