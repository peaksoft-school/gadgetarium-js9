import { styled } from '@mui/material'
import React, { memo } from 'react'
import { pathNumberTrueColorPinkBackgroundColorAndColor } from '../../../utils/helpers/AddFilterResComponent'

export const HeaderAddingAProduct = memo(({ title, pathNumber }) => {
   return (
      <Container>
         <Text>{title}</Text>

         <Box>
            <BoxInfoPage>
               <RoundNumber pathNumber={pathNumber} num={1}>
                  <span>1</span>
               </RoundNumber>
               <PageText pathNumber={pathNumber} num={1}>
                  Добавление товара
               </PageText>
               <Line />
            </BoxInfoPage>
            <BoxInfoPage>
               <RoundNumber pathNumber={pathNumber} num={2}>
                  <span>2</span>
               </RoundNumber>
               <PageText pathNumber={pathNumber} num={2}>
                  Установка цены и количества товара
               </PageText>
               <Line />
            </BoxInfoPage>
            <BoxInfoPage>
               <RoundNumber pathNumber={pathNumber} num={3}>
                  <span>3</span>
               </RoundNumber>
               <PageText pathNumber={pathNumber} num={3}>
                  Описание и обзор
               </PageText>
            </BoxInfoPage>
         </Box>
      </Container>
   )
})

const Container = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
`

const Box = styled('div')`
   display: flex;
   gap: 1rem;
   align-items: center;
`

const BoxInfoPage = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
}))

const RoundNumber = styled('div')(({ theme, pathNumber, num }) => ({
   width: '3.5rem',
   height: '3.5rem',
   color: '#fff',
   fontSize: '1.75rem',
   fontWeight: 600,
   lineHeight: 'normal',
   borderRadius: '5rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: pathNumberTrueColorPinkBackgroundColorAndColor(
      theme,
      pathNumber,
      num,
      1
   ),
}))

const PageText = styled('span')(({ theme, pathNumber, num }) => ({
   fontSize: '1.125rem',
   fontStyle: 'normal',
   color: pathNumberTrueColorPinkBackgroundColorAndColor(
      theme,
      pathNumber,
      num,
      2
   ),

   fontWeight: 500,
   lineHeight: 'normal',
   letterSpacing: '0.0125rem',
}))

const Text = styled('p')(({ theme }) => ({
   fontFamily: theme.typography.fontFamily,
   color: theme.palette.primary.mainContrastText,
   fontSize: '1.875rem',
   fontWeight: 500,
   lineHeight: '110%',
   paddingBottom: '1.875rem',
   borderBottom: `1px solid ${theme.palette.secondary.main}`,
   width: '82vw',
   marginBottom: '2.5rem',
}))

const Line = styled('div')`
   width: 1.875rem;
   border-bottom: 0.0625rem solid #384255;
`
