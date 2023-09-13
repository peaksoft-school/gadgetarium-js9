import { styled } from '@mui/material'
import React from 'react'
import { themes } from '../../../../utils/common/styles/themes'

const BackButton = ({ onClick, bigButton, ...props }) => {
   return (
      <StyledButton
         onClick={onClick}
         state={bigButton}
         themes={themes}
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
               d="M14 6.5H1M1 6.5L6.42466 1M1 6.5L6.42466 12"
               stroke="#CB11AB"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </StyledButton>
   )
}
export default BackButton
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
