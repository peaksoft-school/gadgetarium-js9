import { Checkbox, styled } from '@mui/material'
import React from 'react'

export const Box = ({
   children,
   width,
   check,
   paddingBottom = '1.875rem',
   onClick,
}) => {
   return (
      <Container
         onClick={onClick}
         width={width}
         check={check}
         paddingbottom={paddingBottom}
      >
         <div>
            <CheckboxStyle checked={check} color="success" size="small" />
         </div>
         <div>{children}</div>
      </Container>
   )
}

const Container = styled('div')(({ width, check, paddingbottom }) => ({
   padding: `1.625rem 0.75rem ${paddingbottom} 0.75rem`,
   borderRadius: '0.375rem',
   border: `0.125rem solid ${check ? '#2fc509' : '#ffffff'}`,
   backgroundColor: '#ffffff',
   width,

   display: 'flex',
   gap: '1rem',
   cursor: 'pointer',
}))

const CheckboxStyle = styled(Checkbox)`
   padding: 0;
`
