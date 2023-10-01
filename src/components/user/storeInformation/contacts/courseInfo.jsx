import { styled } from '@mui/material'
import React from 'react'

export const CourseInfo = () => {
   return (
      <Container>
         <h3>Магазин Gadgetarium</h3>

         <h3>Адрес:</h3>
         <p>г. Бишкек, ул. Гражданская 119</p>

         <h3>Телефон:</h3>
         <p>+996 (500) 34 44 33</p>

         <h3>Почта:</h3>
         <p>Gadgetarium.kg</p>

         <h3>Режим работы:</h3>
         <p>10:00 - 21:00</p>
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   fontFamily: theme.typography.mainFontFamily,
   color: theme.palette.primary.mainContrastText,

   h3: {
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '110%',
      margin: 0,
      marginTop: '1.5rem',
   },

   '& :first-child': {
      margin: '8.81rem 0 2.94rem 0',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '110%',
   },

   p: {
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '110%',
      margin: 0,
      marginTop: '0.62rem',
   },
}))
