import React from 'react'
import { Button, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Arrow } from '../../../assets/icons/arrows/right-icon.svg'
import { themes } from '../../../utils/common/styles/themes'
import CategoryMenuItem from './CategoryMenuItem'
import { getSubCatalogRequest } from '../../../store/cataog/categoryThunk'

const Category = ({
   children,
   componentIcon: Icon,
   handleCategoryOpen,
   handleCategoryClose,
   open,
   index,
   id,
   tablet = false,
}) => {
   const StyledIcon = Icon
      ? styled(Icon)(({ open, tablet }) => ({
           transform: tablet ? 'rotate(90deg)' : null,
           path: {
              transition: 'fill 0.3s, stroke 0.3s',
              fill: open ? 'white' : '#91969E',
              stroke: open ? 'white' : '#91969E',
              opacity: open ? 1 : 0.8,
           },
        }))
      : null
   const subCatalog = useSelector((state) => state.category.subCategories)

   const dispatch = useDispatch()

   return (
      <div
         onMouseEnter={handleCategoryOpen}
         style={{ position: 'relative', display: 'inline-block' }}
      >
         <StyledSelectButton
            onClick={handleCategoryOpen}
            onMouseEnter={() => dispatch(getSubCatalogRequest(id))}
            themes={themes}
            open={open}
            aria-controls="category-menu"
            aria-haspopup="true"
         >
            {Icon && <StyledIcon open={open} tablet={tablet} />}
            <Container>
               {children}
               <StyledArrow open={open} />
            </Container>
         </StyledSelectButton>
         {open && (
            <Menu index={index}>
               {children}
               {subCatalog?.map((el) => {
                  return (
                     <CategoryMenuItem
                        id={el.id}
                        key={el.id}
                        onClick={() => handleCategoryClose(el.id, el.title)}
                     >
                        {el.title}
                     </CategoryMenuItem>
                  )
               })}
            </Menu>
         )}
      </div>
   )
}

export default Category
const StyledSelectButton = styled(Button)(({ open, themes }) => ({
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
   color: open ? 'white' : 'black',
   backgroundColor: open ? themes.palette.primary.main : 'transparent',

   '&:hover': {
      backgroundColor: themes.palette.primary.main,
      color: 'white',
   },
}))
const StyledArrow = styled(Arrow)(({ open }) => ({
   path: {
      transition: 'fill 0.3s, stroke 0.3s',
      fill: open ? 'white' : 'black',
      stroke: open ? 'white' : 'black',
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
   left: 346px;
   top: ${(props) => {
      switch (props.index) {
         case 2:
            return '-58px'
         case 3:
            return '-98px'
         case 4:
            return '-138px'
         default:
            return '-18px'
      }
   }};
   background-color: white;
   padding: 1.125rem;
   z-index: 1000;
`
