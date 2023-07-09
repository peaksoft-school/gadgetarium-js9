import { styled } from '@mui/material'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { CloseButton } from './CloseButton'

export const Snackbar = ({ message, linkText, path, closeToast }) => {
   return (
      <Box>
         <Title>{message}</Title>
         {linkText !== '' ? (
            <StyledLink href={path}>{linkText}</StyledLink>
         ) : (
            ''
         )}
         <CloseButton closeToast={closeToast} />
      </Box>
   )
}

const Box = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 30px;
`

const Title = styled('p')(() => ({
   width: 'auto',
   fontWeight: 400,
   fontSize: '18px',
   lineHeight: ' 140%',
   color: '#FFFFFF',
   marginLeft: '18px',
   marginTop: '20px',
   marginBottom: '20px',
}))

const StyledLink = styled('a')(() => ({
   textDecoration: 'none',
   fontWeight: 700,
   fontSize: '18px',
   lineHeight: '130%',
   color: '#3CDE14;',
   cursor: 'pointer',
}))
