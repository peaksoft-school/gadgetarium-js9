import { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select, styled } from '@mui/material'
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/arrows/down-icon.svg'
import { ReactComponent as SelectLabelIcons } from '../../../../../assets/icons/photo-add/add-photo-icon.svg'

export const BrandSelect = ({ array, label, value, onChange }) => {
   const [select, setSelect] = useState(value)

   const handleChange = (event) => {
      setSelect(event.target.value)
   }
   const StyledArrowIcon = styled(ArrowIcon)`
      width: 18px;
      height: 18px;
      margin-right: 4px;
   `

   useEffect(() => {
      onChange(select)
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
            {label} <span>*</span>
         </BoxLabel>
         <StyledFormControl>
            <SelectLabelIconsStyle select={select} />
            <StyledSelect
               placeholder={label}
               value={select}
               select={select}
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
                        <Image src={el.image} alt="icon brand photos" />
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
   display: flex;
   gap: 10px;
`
const Image = styled('img')`
   width: 1.5rem;
   height: 1.5rem;
   object-fit: contain;
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
   position: relative;
`

const StyledSelect = styled(Select)`
   height: 39px;
   .MuiSelect-nativeInput {
      display: ${(props) => props.select && 'none'};
      border: none;
      height: 100%;
      opacity: 1;
      padding: 8px 44px;
      color: #292929;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
   }
   .MuiSelect-select {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-left: 12px;
   }
`
const SelectLabelIconsStyle = styled(SelectLabelIcons)`
   width: 1.25rem;
   height: 1.25rem;
   z-index: 3;
   top: 10px;
   left: 11px;
   position: absolute;
   display: ${(props) => props.select && 'none'};
`
