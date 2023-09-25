import { MenuItem, styled } from '@mui/material'
import React from 'react'

const CategoryMenuItem = ({ onClick, id, children }) => {
   return (
      <StyledMenuItem onClick={() => onClick(id)} id={id}>
         {children}
      </StyledMenuItem>
   )
}

export default CategoryMenuItem
const StyledMenuItem = styled(MenuItem)({
   color: 'gray',
   fontFamily: 'Inter',
   padding: '0',
   marginTop: '1.125rem',
   '&:hover': {
      color: 'black',
      background: 'none',
   },
   '&:active': {
      color: 'black',
      background: 'none',
   },
})
