import { styled } from '@mui/material'
import React from 'react'
import { ShopGadgetariumInfo } from './ShopGadgetariumInfo'
import { ReasonForSuccess } from './ReasonForSuccess'
import { TodayWeAre } from './TodayWeAre'
import { SliderStore } from './SliderStore'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'

export const AboutShop = () => {
   return (
      <Main>
         <BoxInfo>
            <BreadCrumbsContainer>
               <BreadCrumbs
                  breadcrumbs={[
                     { path: '/', label: 'Главная' },
                     { label: 'O магазине' },
                  ]}
               />
            </BreadCrumbsContainer>
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
   )
}

const Text = styled('p')(({ theme }) => ({
   fontFamily: theme.typography.fontFamily,
   color: theme.palette.primary.mainContrastText,
   fontSize: '1.875rem',
   fontWeight: 500,
   lineHeight: '110%',
   paddingBottom: '1.875rem',
   borderBottom: `1px solid ${theme.palette.secondary.main}`,
   width: '79.688vw',
   marginBottom: '2.5rem',
}))

const BoxInfo = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))
const BreadCrumbsContainer = styled('div')`
   width: 79.688vw;
`
const Main = styled('main')(({ theme }) => ({
   fontFamily: theme.typography.mainFontFamily,

   section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '1.875rem',
      gap: '3.75rem',
      div: {
         width: '79.688vw',
      },
   },

   '& .box-text': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      color: theme.palette.primary.mainContrastText,
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
