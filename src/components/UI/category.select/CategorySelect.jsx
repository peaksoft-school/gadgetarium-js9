import { Button, styled, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-icon.svg'

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

const CategorySelect = ({
   children,
   componentIcon: Component,
   products = smartphones,
}) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
      setIsMenuOpen(true)
   }

   const handleClose = () => {
      setAnchorEl(null)
      setIsMenuOpen(false)
   }

   return (
      <>
         <StyledSelectButton onClick={handleClick} isMenuOpen={isMenuOpen}>
            <Component />
            <Container>
               {children}
               <Arrow />
            </Container>
         </StyledSelectButton>
         <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
         >
            {children}
            {products.map((el) => {
               return (
                  <StyledMenuItem key={el} onClick={handleClose}>
                     {el}
                  </StyledMenuItem>
               )
            })}
         </StyledMenu>
      </>
   )
}

export default CategorySelect

const StyledSelectButton = styled(Button)(({ isMenuOpen }) => ({
   fontSize: 16,
   width: 346,
   padding: 0,
   paddingLeft: 12,
   scrollbarWidth: 'thin',
   borderRadius: 10,
   height: 40,
   textTransform: 'none',
   display: 'flex',
   justifyContent: 'space-between',
   color: isMenuOpen ? 'white' : 'black',
   backgroundColor: isMenuOpen ? '#CB11AB' : 'transparent',
   '&:hover': {
      backgroundColor: '#CB11AB',
      color: 'white',
   },
}))

const Container = styled('div')({
   height: 24,
   width: 302,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingRight: 15,
})

const StyledMenu = styled(Menu)({
   left: 373,
   fontSize: 20,
   fontWeight: 500,
   '& .MuiPaper-root': {
      width: 293,
      height: 402,
      top: '0 !important',
      left: '0 !important',
      boxShadow: 'none',
      ul: {
         padding: 19,
         background: 'white',
      },
   },
})

const StyledMenuItem = styled(MenuItem)({
   color: 'gray',
   padding: 0,
   marginTop: 19,
   '&:hover': {
      color: 'black',
      background: 'none',
   },
})