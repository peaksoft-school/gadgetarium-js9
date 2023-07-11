import { styled } from '@mui/material'
import React from 'react'
import { ShopGadgetariumInfo } from './ShopGadgetariumInfo'
import { ReasonForSuccess } from './ReasonForSuccess'
import { TodayWeAre } from './TodayWeAre'
import { SliderStore } from './SliderStore'

export const AboutShop = () => {
   return (
      <Container>
         <Main>
            <BoxInfo>
               <Text>O магазине</Text>
            </BoxInfo>
            <div>
               <SliderStore />
            </div>
            <section>
               <div>
                  <ShopGadgetariumInfo />
               </div>
               <div>
                  <ReasonForSuccess />
               </div>
               <div>
                  <TodayWeAre />
               </div>
            </section>
         </Main>
      </Container>
   )
}

const Container = styled('div')`
   margin: 0;
   padding: 0;
   margin-bottom: 7.48rem;

   h1 {
      margin: 0;
      padding: 0;
   }
`

const Text = styled('p')(({ theme }) => ({
   fontFamily: theme.typography.fontFamily,
   color: theme.palette.primary.contrastText,
   fontSize: '1.875rem',
   fontWeight: 500,
   lineHeight: '110%',
   paddingBottom: '1.875rem',
   borderBottom: `1px solid ${theme.palette.secondary.main}`,
   width: '79.6875vw',
   marginBottom: '2.5rem',
}))

const BoxInfo = styled('div')(() => ({
   paddingLeft: '12.1875rem',
}))

const Main = styled('main')(({ theme }) => ({
   fontFamily: theme.typography.mainFontFamily,

   section: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '12.1875rem',
      marginTop: '1.875rem',
      gap: '3.75rem',
   },

   '& .box-text': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      color: theme.palette.primary.contrastText,
   },

   '& .title': {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '120%',
      fontStyle: 'normal',
      margin: '0',
      padding: '0',
   },

   '& .text': {
      fontStyle: 'normal',
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '150%',
   },
}))
