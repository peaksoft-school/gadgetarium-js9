import React from 'react'
import { Button as ButtonMui, styled } from '@mui/material'

export const Button = ({ children, onClick, variant, ...props }) => {
   return (
      <StyledButton onClick={onClick} props={props} variant={variant}>
         {children}
      </StyledButton>
   )
}

const StyledButton = styled(ButtonMui)(({ variant, props }) => {
   switch (variant) {
      case 'contained':
         return {
            '&.MuiButtonBase-root': {
               padding: props.padding,
               backgroundColor: props.background,
               color: props.color || 'white',
               fontSize: props.fontSize,

               boxSizing: 'border-box',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               gap: '0.375rem',
               border: '1px solid #CB11AB',
               borderRadius: '0.25rem',
               lineHeight: 'normal',

               '&:hover': {
                  background: props.backgroundHover,
               },

               '&:active': {
                  background: props.backgroundActive,
               },
            },
         }
      case 'outlined':
         return {
            '&.MuiButtonBase-root': {
               padding: props.padding,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               border: '1px solid #CB11AB',
               color: '#CB11AB',
               '&:hover': {
                  background: props.backgroundHover,
                  color: 'white',
               },
               '&:active': {
                  background: props.backgroundActive,
                  color: 'white',
               },
            },
         }
      default:
         return {}
   }
})
