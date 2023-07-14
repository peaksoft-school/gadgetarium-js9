import React, { useState } from 'react'
import { Button, MenuItem, styled } from '@mui/material'
import { ReactComponent as Arrow } from '../../../assets/icons/arrows/right-icon.svg'
import { ReactComponent as Headphone } from '../../../assets/icons/goods/headphones-icon.svg'
const smartphones = [
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
   'Айфон 11',
]
const Category = ({
   children,
   componentIcon: Icon,
   products = smartphones,
}) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const handleMouseEnter = () => {
      setIsMenuOpen(true)
   }
   const handleMouseLeave = () => {
      setIsMenuOpen(false)
   }

   return (
      <div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={{ position: 'relative', display: 'inline-block' }}
      >
         <StyledSelectButton
            onClick={handleMouseEnter}
            isMenuOpen={isMenuOpen}
            aria-controls="category-menu"
            aria-haspopup="true"
         >
            <StyledIcon isMenuOpen={isMenuOpen} />
            <Container>
               {children}
               <StyledArrow isMenuOpen={isMenuOpen} />
            </Container>
         </StyledSelectButton>
         {isMenuOpen && (
            <Menu>
               {children}
               {products.map((el) => {
                  return (
<StyledMenuItem key={el} onClick={handleMouseLeave}>
                        {el}
                        <Icon />
                     </StyledMenuItem>
                  )
               })}
            </Menu>
         )}
      </div>
   )
}

export default Category
const StyledSelectButton = styled(Button)(({ isMenuOpen }) => ({
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
   transition: 'color 0.2s, background-color 0.1s',
   color: isMenuOpen ? 'white' : 'black',
   backgroundColor: isMenuOpen ? '#CB11AB' : 'transparent',

   '&:hover': {
      backgroundColor: '#CB11AB',
      color: 'white',
   },
}))
const StyledArrow = styled(Arrow)(({ isMenuOpen }) => ({
   path: {
      transition: 'fill 0.1s, stroke 0.1s',
      fill: isMenuOpen ? 'white' : 'black',
      stroke: isMenuOpen ? 'white' : 'black',
   },
}))
const StyledIcon = styled(Headphone)(({ isMenuOpen }) => ({
   path: {
      transition: 'fill 0.1s, stroke 0.1s',
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
   font-size: 20px;
   font-weight: 500;
   padding: 19px;
   position: absolute;
   top: 100%;
   width: 18.3125rem;
   left: 0;
   background-color: white;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
   padding: 0.625rem;
   z-index: 1000;
`
const StyledMenuItem = styled(MenuItem)({
   color: 'gray',
   fontFamily: 'Inter',
   padding: '0',
   marginTop: '1.1875rem',
   '&:hover': {
      color: 'black',
      background: 'none',
   },
})
