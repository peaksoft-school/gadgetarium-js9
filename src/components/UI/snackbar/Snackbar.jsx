import { styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { CloseButton } from './CloseButton'

export const Snackbar = ({ message, linkText, path, closeToast }) => {
   return (
      <Box>
         <Title>{message}</Title>
         {linkText !== '' ? <StyledLink to={path}>{linkText}</StyledLink> : ''}
         <CloseButton closeToast={closeToast} />
      </Box>
   )
}

const Box = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1.875rem;
`

const Title = styled('p')(() => ({
   width: 'auto',
   fontWeight: 400,
   fontSize: '1.125rem',
   lineHeight: '140%',
   color: '#FFFFFF',
   marginLeft: '1.125rem',
   marginTop: '1.25rem',
   marginBottom: '1.25rem',
}))

const StyledLink = styled(NavLink)(() => ({
   textDecoration: 'none',
   fontWeight: 700,
   fontSize: '1.125rem',
   lineHeight: '130%',
   color: '#3CDE14;',
   cursor: 'pointer',
}))
