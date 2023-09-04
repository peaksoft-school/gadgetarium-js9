import { styled } from '@mui/material'
import React from 'react'
import { themes } from '../../../../utils/common/styles/themes'

const ForthButton = ({ onClick, bigButton, ...props }) => {
   return (
      <StyledButton
         onClick={onClick}
         themes={themes}
         state={bigButton}
         {...props}
      >
         <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M1 6.5H14M14 6.5L8.57534 1M14 6.5L8.57534 12"
               stroke="#CB11AB"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </StyledButton>
   )
}
export default ForthButton
const StyledButton = styled('button')(({ state, themes }) => ({
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: state ? '3.75rem' : '3.125rem',
   height: state ? '3.75rem' : '3.125rem',
   borderRadius: '100%',
   border: state ? `1px solid ${themes.palette.primary.main}` : 'none',
   backgroundColor: 'white',
   transition: 'background-color 0.3s',
   '&:hover': {
      backgroundColor: themes.palette.primary.main,
   },
   '&:active': {
      backgroundColor: themes.palette.primary.main,
   },
   svg: {
      path: {
         transition: 'stroke 0.3s',
      },
   },
   '&:hover svg path': {
      stroke: 'white',
   },
   '&:active svg path': {
      stroke: 'white',
   },
}))
