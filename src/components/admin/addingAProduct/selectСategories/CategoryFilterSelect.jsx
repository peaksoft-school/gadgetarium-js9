import {
   FormControl,
   MenuItem,
   Select,
   styled,
   InputLabel,
} from '@mui/material'
import { useState } from 'react'

export const CategoryFilterSelect = ({
   star = false,
   label,
   title,
   selectData,
   newBrand,
   onOpenModalAddNewBrand,
   onChange,
   value,
   name,
   onBlur,
   error,
   image = false,
}) => {
   const [isFocused, setIsFocused] = useState(false)

   const onSelectValue = () => {
      onOpenModalAddNewBrand()

      setIsFocused(false)
   }

   const handleSelectFocus = () => {
      setIsFocused(true)
   }

   const handleSelectBlur = (event) => {
      setIsFocused(false)

      if (onBlur) {
         onBlur(event)
      }
   }

   const labelFocused = value === '' ? label : ''

   return (
      <Container>
         <BoxLabel>
            <p>
               {title} <span>{star && '*'}</span>
            </p>
         </BoxLabel>

         <div>
            <StyledFormControl size="small">
               {isFocused ? null : (
                  <InputLabelStyle>{labelFocused}</InputLabelStyle>
               )}
               {name === 'brand'
                  ? selectData.map((item) => {
                       return (
                          item.name === value && (
                             <BoxIconSelectBrand key={item.id}>
                                <div className="box">
                                   <img src={item.image} alt="images" />
                                </div>
                             </BoxIconSelectBrand>
                          )
                       )
                    })
                  : null}
               <SelectStyle
                  name={name}
                  value={value !== undefined ? value : ''}
                  onChange={onChange}
                  image={image === true ? 'true' : 'false'}
                  onFocus={handleSelectFocus}
                  onBlur={(event) => handleSelectBlur(event)}
                  renderValue={(selected) => selected || label}
                  error={error}
                  MenuProps={{
                     PaperProps: {
                        style: {
                           maxHeight: '17.5rem',
                        },
                     },
                  }}
               >
                  {selectData.map((item) => (
                     <StyledMenuItem
                        key={item.id}
                        value={item.name}
                        selected={value === item.name}
                     >
                        <MenuItemContent>
                           {item.image && (
                              <div className="box-img">
                                 <img
                                    src={item.image}
                                    alt="icon brand photos"
                                 />
                              </div>
                           )}
                           <span>{item.name}</span>
                        </MenuItemContent>
                     </StyledMenuItem>
                  ))}
                  {newBrand && (
                     <StyledMenuItem
                        onClick={onSelectValue}
                        value="addNewBrand"
                     >
                        <NewBrandContainer className={isFocused && 'hover'}>
                           <p>
                              <span>+</span> Создать новый бренд
                           </p>
                        </NewBrandContainer>
                     </StyledMenuItem>
                  )}
               </SelectStyle>
            </StyledFormControl>
         </div>
      </Container>
   )
}

const InputLabelStyle = styled(InputLabel)(({ theme }) => ({
   color: theme.palette.secondary.contrastname,
}))

const SelectStyle = styled(Select)(({ image }) => ({
   paddingLeft: image === 'true' ? '26px' : '',
}))

const StyledFormControl = styled(FormControl)(() => ({
   minWidth: '24.75rem',
   margin: 0,
}))

const BoxIconSelectBrand = styled('div')`
   width: 3rem;
   display: flex;
   justify-content: center;
   align-items: center;

   .box {
      margin-bottom: -10px;

      img {
         margin-bottom: -30px;
         width: 2rem;
         height: 2rem;
         display: flex;
         justify-content: center;
         align-items: center;
         object-fit: contain;
         object-position: center center;
      }
   }
`

const NewBrandContainer = styled('div')(({ theme }) => ({
   color: theme.palette.primary.main,
   fontFamily: theme.typography.mainFontFamily,
   fontSize: '1rem',

   p: {
      padding: '0',
      margin: '0',

      span: {
         fontSize: '1.5rem',
      },
   },
}))

const StyledMenuItem = styled(MenuItem)(({ theme, selected }) => ({
   background: selected
      ? `${theme.palette.primary.main} !important`
      : 'inherit',
   color: selected ? '#fff' : 'inherit',
   borderRadius: '0.6875rem',
   margin: '0rem 0.5rem',
}))

const MenuItemContent = styled('div')`
   display: flex;
   gap: 0.62rem;

   .box-img {
      width: 1.5rem;
      height: 1.5rem;

      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
   }
`

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 0.38rem;

   p {
      margin: 0;
      padding: 0;
   }

   .select-container {
      height: 15.26042rem;
      overflow: scroll;
   }
`

const BoxLabel = styled('div')`
   span {
      color: #ff0000;
   }
`
