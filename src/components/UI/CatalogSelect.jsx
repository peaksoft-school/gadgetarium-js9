import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { slideIn, slideOut } from '../../utils/common/constants/constants'
import { ArrowIcon } from './Arrow'
import CheckboxInput from './icon.input/CheckboxInput'

export const CatalogSelect = ({ items, onToggleCheckbox, title }) => {
   const { allCate } = useSelector((state) => state.category)
   const [cate, setCate] = useState(true)
   const openHandler = () => {
      setCate((prev) => !prev)
   }
   useEffect(() => {
      setCate(allCate)
   }, [allCate])

   return (
      <Container checked={cate}>
         <CategorySelectContainer onClick={openHandler}>
            <h5>{title}</h5>
            <ArrowIcon checked={cate} />
         </CategorySelectContainer>
         {cate && (
            <div className="content">
               {items?.map((el) => {
                  const id = el.id ? el.id : el.codeColor

                  return (
                     <div key={id}>
                        <CheckboxInputStyled
                           isChecked={el.checked}
                           onClick={() => onToggleCheckbox(el.id, el)}
                        />

                        <span>
                           {el.title || el.name || el.codeColorTransform}
                        </span>

                        <span className="countColor">
                           {el?.countColor ? `(${el.countColor})` : ''}
                        </span>
                     </div>
                  )
               })}
            </div>
         )}
      </Container>
   )
}
const Container = styled('div')`
   margin-top: 1.8519vh;
   border-bottom: 1px solid #e8e8e8;
   padding-bottom: 1.8519vh;

   .countColor {
      color: #91969e;
   }
   .content {
      display: flex;
      flex-direction: column;
      gap: 1.2963vh;
      margin-top: 1.2963vh;
      animation: ${(props) => (props.checked ? slideIn : slideOut)} 0.3s
         ease-in-out;
      span {
         font-size: 1rem;
         font-style: normal;
         font-weight: 400;
         line-height: 140%;
      }
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
   cursor: pointer;

   h5 {
      width: 13.75vw;
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
