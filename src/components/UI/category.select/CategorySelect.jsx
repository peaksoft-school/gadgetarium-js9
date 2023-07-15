import React from 'react'
import { Button, styled } from '@mui/material'
import { ReactComponent as Arrow } from '../../../assets/icons/arrows/right-icon.svg'
import { themes } from '../../../utils/common/styles/themes'
import CategoryMenuItem from './CategoryMenuItem'

const smartphones = [
   {
      name: 'Айфон 11',
      id: 1,
   },
   {
      name: 'Айфон 11',
      id: 2,
   },
   {
      name: 'Айфон 11',
      id: 3,
   },
   {
      name: 'Айфон 11',
      id: 4,
   },
   {
      name: 'Айфон 11',
      id: 5,
   },
   {
      name: 'Айфон 11',
      id: 6,
   },
   {
      name: 'Айфон 11',
      id: 7,
   },
   {
      name: 'Айфон 12',
      id: 8,
   },
   {
      name: 'Айфон 11',
      id: 9,
   },
]
const Category = ({
   children,
   componentIcon: Icon,
   products = smartphones,
   handleCategoryOpen,
   handleCategoryClose,
   isMenuOpen,
   index,
}) => {
   console.log(isMenuOpen)
   // const onBlurCategory = () => {
   //    setOpen(false)
   // }
   // console.log('onBlurCategory: ', onBlurCategory)

   const StyledIcon = Icon
      ? styled(Icon)(({ isMenuOpen }) => ({
           path: {
              transition: 'fill 0.3s, stroke 0.3s',
              fill: isMenuOpen ? 'white' : '#91969E',
              stroke: isMenuOpen ? 'white' : '#91969E',
              opacity: isMenuOpen ? 1 : 0.8,
           },
        }))
      : null

   return (
      <div
         onMouseEnter={handleCategoryOpen}
         style={{ position: 'relative', display: 'inline-block' }}
      >
         <StyledSelectButton
            onClick={handleCategoryOpen}
            themes={themes}
            isMenuOpen={isMenuOpen}
            aria-controls="category-menu"
            aria-haspopup="true"
         >
            {Icon && <StyledIcon isMenuOpen={isMenuOpen} />}
            <Container>
               {children}
               <StyledArrow isMenuOpen={isMenuOpen} />
            </Container>
         </StyledSelectButton>
         {isMenuOpen && (
            <Menu index={index}>
               {children}
               {products.map((el) => {
                  return (
                     <CategoryMenuItem
                        onClick={handleCategoryClose}
                        id={el.id}
                        key={el.id}
                     >
                        {el.name}
                     </CategoryMenuItem>
                  )
               })}
            </Menu>
         )}
      </div>
   )
}

export default Category
const StyledSelectButton = styled(Button)(({ isMenuOpen, themes }) => ({
   fontSize: '16px',
   fontFamily: 'Inter',
   width: '346px',
   padding: '0',
   paddingLeft: '12px',
   scrollbarWidth: 'thin',
   borderRadius: '10px',
   border: 'none',
   height: '40px',
   textTransform: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   transition: 'color 0.3  s, background-color 0.3s',
   color: isMenuOpen ? 'white' : 'black',
   backgroundColor: isMenuOpen ? themes.palette.primary.main : 'transparent',

   '&:hover': {
      backgroundColor: themes.palette.primary.main,
      color: 'white',
   },
}))
const StyledArrow = styled(Arrow)(({ isMenuOpen }) => ({
   path: {
      transition: 'fill 0.3s, stroke 0.3s',
      fill: isMenuOpen ? 'white' : 'black',
      stroke: isMenuOpen ? 'white' : 'black',
   },
}))
const Container = styled('div')({
   height: '1.5rem',
   width: '18.875rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingRight: '0.9375rem',
})
const Menu = styled('div')`
   font-size: 1.25rem;
   font-weight: 500;
   position: absolute;
   width: 18.3125rem;
   left: 359px;
   top: ${(props) => {
      switch (props.index) {
         case 2:
            return '-53px'
         case 3:
            return '-93px'
         case 4:
            return '-133px'
         default:
            return '-13px'
      }
   }};
   background-color: white;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
   padding: 1.125rem;
   z-index: 1000;
`
