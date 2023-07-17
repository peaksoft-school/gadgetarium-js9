import { styled } from '@mui/material'
import React from 'react'

const ForthButton = ({ onClick, bigButton }) => {
   return (
      <StyledButton onClick={onClick} state={bigButton}>
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
   width: state ? '3.5rem' : '3.125rem',
   height: state ? '3.5rem' : '3.125rem',
   borderRadius: '100%',
   border: state ? '1px solid #cb11ab' : 'none',
   backgroundColor: 'white',
   transition: 'background-color 0.3s',
   '&:hover': {
      backgroundColor: '#cb11ab',
   },
   '&:active': {
      backgroundColor: '#cb11ab',
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
