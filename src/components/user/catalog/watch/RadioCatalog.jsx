import { FormControlLabel, Radio, RadioGroup, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../../../store/cataog/catalogSlice'
import { slideIn, slideOut } from '../../../../utils/common/constants/constants'
import { ArrowIcon } from '../../../UI/Arrow'

export const RadioCatalog = () => {
   const [selectedValue, setSelectedValue] = useState('')
   const dispatch = useDispatch()
   const { allCate, waterProof } = useSelector((state) => state.category)
   const [cate, setCate] = useState(true)
   const openHandler = () => {
      setCate((prev) => !prev)
   }
   const handleChange = (event) => {
      setSelectedValue(event.target.value)
   }
   useEffect(() => {
      setCate(allCate)
   }, [allCate])
   useEffect(() => {
      dispatch(categoryActions.waterProof(selectedValue))
   }, [selectedValue])

   return (
      <Container checked={cate}>
         <CategorySelectContainer onClick={openHandler}>
            <h5>Водонепроницаемый</h5>
            <ArrowIcon checked={cate} />
         </CategorySelectContainer>
         {cate && (
            <RadioGroup
               name="waterproof"
               value={selectedValue}
               onChange={handleChange}
            >
               {waterProof.map((el) => {
                  return (
                     <FormControlLabel
                        key={el.id}
                        value={el.value}
                        control={<StyledRadio />}
                        label={el.label}
                     />
                  )
               })}
            </RadioGroup>
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
const StyledRadio = styled(Radio)`
   &:hover {
      color: #cb11ab;
   }
   &.Mui-checked {
      color: #cb11ab;
   }
`
