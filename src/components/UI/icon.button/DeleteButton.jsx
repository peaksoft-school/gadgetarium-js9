import { styled } from '@mui/material'
import React from 'react'

const DeleteButton = () => {
   return (
      <StyledButton>
         <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M9.15819 2.27268L6.43124 4.99991L9.15819 7.72702C9.56381 8.13279 9.56381 8.7901 9.15819 9.19587C8.95552 9.39854 8.68981 9.49995 8.42423 9.49995C8.15821 9.49995 7.89247 9.39869 7.68996 9.19587L4.96242 6.46846L2.23508 9.19585C2.03244 9.39851 1.7667 9.49993 1.50089 9.49993C1.23515 9.49993 0.969595 9.39867 0.766772 9.19585C0.361152 8.79025 0.361152 8.13292 0.766772 7.72699L3.49364 4.99989L0.766617 2.27268C0.360997 1.86706 0.360997 1.2096 0.766617 0.803983C1.17216 0.398672 1.82923 0.398672 2.23493 0.803983L4.96239 3.53122L7.68965 0.803983C8.09542 0.398672 8.75257 0.398672 9.15803 0.803983C9.56381 1.2096 9.56381 1.86706 9.15819 2.27268Z"
               fill="#91969E"
            />
         </svg>
      </StyledButton>
   )
}

export default DeleteButton
const StyledButton = styled('button')`
   width: 18px;
   height: 18px;
   border: 1px solid #91969e;
   border-radius: 100%;
   &:hover {
      border: 1px solid #cb11ab;
   }
   &:active {
      border: 1px solid #cb11ab;
   }
   &:hover svg path {
      fill: #cb11ab;
   }

   &:active svg path {
      fill: #cb11ab;
   }
`
