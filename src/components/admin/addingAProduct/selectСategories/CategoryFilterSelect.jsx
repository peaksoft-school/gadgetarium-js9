import {
   FormControl,
   MenuItem,
   Select,
   styled,
   InputLabel,
} from '@mui/material'
import { useState } from 'react'

export const CategoryFilterSelect = ({
   star = true,
   label,
   title,
   selectData,
   newBrand,
   onOpenModalAddNewBrand,
   onChange,
   value,
   name,
}) => {
   const [isFocused, setIsFocused] = useState(false)

   const onSelectValue = () => {
      onOpenModalAddNewBrand()

      setIsFocused(false)
   }

   const handleSelectFocus = () => {
      setIsFocused(true)
   }

   const handleSelectBlur = () => {
      setIsFocused(false)
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
               <Select
                  name={name}
                  value={value}
                  onChange={onChange}
                  onFocus={handleSelectFocus}
                  onBlur={handleSelectBlur}
                  renderValue={(selected) => selected || label}
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
                        value={item.text}
                        selected={value === item.text}
                     >
                        <MenuItemContent>
                           {item.icon && (
                              <div className="box-img">
                                 <img src={item.icon} alt="icon brand photos" />
                              </div>
                           )}
                           <span>{item.text}</span>
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
               </Select>
            </StyledFormControl>
         </div>
      </Container>
   )
}

const InputLabelStyle = styled(InputLabel)(({ theme }) => ({
   color: theme.palette.secondary.contrastText,
}))

const StyledFormControl = styled(FormControl)(() => ({
   minWidth: '24.75rem',
   margin: 0,
}))

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
   margin: '0rem 0.5rem',
   borderRadius: '0.6875rem',

   '& .hover': {
      color: selected ? '#fff' : theme.palette.primary.main,
   },
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
