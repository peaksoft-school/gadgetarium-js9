import { styled } from '@mui/material'
import React from 'react'
import { themes } from '../../../utils/common/styles/themes'

const PlayButton = () => {
   return (
      <StyledButton themes={themes}>
         <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M18 0C8.05901 0 0 8.05887 0 18C0 27.9411 8.05901 36 18 36C27.941 36 36 27.9411 36 18C36 8.05887 27.941 0 18 0ZM24.2213 18.9541L15.2212 24.5791C15.0391 24.6928 14.8321 24.75 14.625 24.75C14.4374 24.75 14.2495 24.7033 14.0795 24.6088C13.7219 24.4105 13.5 24.0342 13.5 23.625V12.375C13.5 11.9658 13.7219 11.5895 14.0795 11.3912C14.4371 11.1918 14.8744 11.2039 15.2212 11.4209L24.2213 17.0459C24.55 17.2519 24.75 17.6122 24.75 18C24.75 18.3878 24.55 18.7482 24.2213 18.9541Z"
               fill="#F10000"
            />
         </svg>
      </StyledButton>
   )
}

export default PlayButton
const StyledButton = styled('button')(({ themes }) => ({
   width: '2.25rem',
   height: '2.25rem',
   border: 'none',
   borderRadius: '100%',
   '&:hover svg path': {
      fill: '#e32a38',
   },
   '&:active svg path': {
      fill: themes.palette.error.main,
   },
}))
