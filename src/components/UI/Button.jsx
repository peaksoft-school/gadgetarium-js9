import React from 'react'
import { Button as ButtonMui, styled } from '@mui/material'

export const Button = ({ children, onClick, variant, type, ...props }) => {
   return (
      <StyledButton type={type} onClick={onClick} variant={variant} {...props}>
         {children}
      </StyledButton>
   )
}

const StyledButton = styled(ButtonMui)(({ variant, ...props }) => {
   switch (variant) {
      case 'contained':
         return {
            '&.MuiButtonBase-root': {
               padding: props.padding,
               backgroundColor: props.background,
               color: props.color || 'white',
               fontSize: props.fontSize,
               boxSizing: 'border-box',
               textTransform: props.texttransform || 'none',
               fontFamily: 'Inter',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               gap: '6px',
               borderRadius: props.borderradius || '4px',
               lineHeight: 'normal',

               '&:hover': {
                  background: props.backgroundhover,
               },

               '&:active': {
                  background: props.backgroundactive,
               },
            },
         }
      case 'outlined':
         return {
            '&.MuiButtonBase-root': {
               padding: props.padding,
               fontSize: props.fontSize,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               border: '1px solid #CB11AB',
               textTransform: props.texttransform || 'none',
               fontFamily: 'Inter',
               color: '#CB11AB',
               backgroundColor: props.backgroundcolor,

               '&:hover': {
                  background: props.backgroundhover,
                  border: `1px solid ${props.backgroundhover}`,
                  color: 'white',
               },

               '&:active': {
                  background: props.backgroundactive,
                  border: `1px solid ${props.backgroundactive}`,
                  color: 'white',
               },
            },
         }
      default:
         return {}
   }
})
