import { styled } from '@mui/material'
import React from 'react'

export const CourseInfo = () => {
   return (
      <Container>
         <h3>Магазин Gadgetarium</h3>

         <h3>АДРЕС:</h3>
         <p>г. Бишкек, ул. Гражданская 119</p>

         <h3>Телефон:</h3>
         <p>г+996(400) 00-00-00</p>

         <h3>Почта:</h3>
         <p>Gadgetarium.kg</p>

         <h3>Режим работы:</h3>
         <p>10:00 - 21:00</p>
      </Container>
   )
}

const Container = styled('div')(({ theme }) => ({
   h3: {
      fontFamily: `${theme.typography.mainFontFamily}`,
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '110%',
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
      fontFamily: `${theme.typography.mainFontFamily}`,
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '110%',
      marginTop: '0.62rem',
   },
}))