import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
import { FormControl, MenuItem, Select, styled } from '@mui/material'
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/arrows/down-icon.svg'

export const EditSelect = ({
   array,
   label,
   value,
   onChange,
   star,
   name,
   onChangeEvent,
}) => {
   const [select, setSelect] = useState(value)
   const handleChange = (event) => {
      if (onChangeEvent) {
         onChangeEvent(event)
      }
      const newValue = event.target.value
      if (newValue !== select) {
         setSelect(newValue)
      }
   }
   const StyledArrowIcon = styled(ArrowIcon)`
      width: 18px;
      height: 18px;
      margin-right: 4px;
   `
   useEffect(() => {
      if (!onChangeEvent) {
         onChange(select)
      }
   }, [select])
   useEffect(() => {
      if (value) {
         return setSelect(value)
      }
      return setSelect('')
   }, [value])

   return (
      <Container>
         <BoxLabel>
            {label} {star && <span>*</span>}
         </BoxLabel>
         <StyledFormControl>
            <StyledSelect
               placeholder={label}
               value={select}
               name={name}
               onChange={handleChange}
               MenuProps={{
                  PaperProps: {
                     style: {
                        maxHeight: '17.5rem',
                     },
                  },
               }}
               IconComponent={StyledArrowIcon}
            >
               {array.map((el) => {
                  return (
                     <StyledMenuItem
                        selected={value === el.name}
                        key={el.id}
                        value={el.name}
                     >
                        {el.name}
                     </StyledMenuItem>
                  )
               })}
            </StyledSelect>
         </StyledFormControl>
      </Container>
   )
}
const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 10px;
`
const StyledMenuItem = styled(MenuItem)`
   color: #292929;
   color: ${(props) => (props.selected ? '#fff' : '#292929')};
   font-family: Inter;
   font-size: 16px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   margin: 0rem 0.5rem;
   height: 40px;
   padding: 10px 12px;
   border-radius: 0.6875rem;
   background: ${(props) =>
      props.selected ? '#cb11ab !important' : 'inherit'};
`

const BoxLabel = styled('p')`
   color: #384255;
   font-family: Inter;
   font-size: 14px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   margin: 0;
   span {
      color: #ff0000;
   }
`
const StyledFormControl = styled(FormControl)`
   min-width: 24.75rem;
`

const StyledSelect = styled(Select)`
   height: 39px;
   .MuiSelect-nativeInput {
      border: none;
      opacity: 1;
      height: 100%;
      padding: 8px 12px;
      color: #292929;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
`
