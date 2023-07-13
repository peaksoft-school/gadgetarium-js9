import { styled } from '@mui/material'
import React from 'react'

const ForthButton = () => {
   return (
      <StyledButton>
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
const StyledButton = styled('button')`
   width: 50px;
   height: 50px;
   border-radius: 100%;
   border: none;
   background-color: white;
   transition: background-color 0.3s;
   &:hover {
      background-color: #cb11ab;
   }
   &:active {
      background-color: #cb11ab;
   }
   svg path {
      transition: stroke 0.3s;
   }

   &:hover svg path {
      stroke: white;
   }

   &:active svg path {
      stroke: white;
   }
`
