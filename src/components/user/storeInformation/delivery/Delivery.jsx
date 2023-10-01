import { styled } from '@mui/material'
import React from 'react'
import { DeliveryMethods } from './DeliveryMethods'
import { PaymentMethods } from './PaymentMethods'
import { BreadCrumbs } from '../../../UI/breadCrumbs/BreadCrumbs'

export const Delivery = () => {
   return (
      <Main>
         <BreadCrumbsBox>
            <BreadCrumbs
               breadcrumbs={[
                  { path: '/', label: 'Главная' },
                  { label: 'Доставка' },
               ]}
            />
         </BreadCrumbsBox>
         <Text>Доставка</Text>

         <section>
            <DeliveryMethods />
            <PaymentMethods />
         </section>
      </Main>
   )
}

const BreadCrumbsBox = styled('div')`
   width: 79.688vw;
`

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

const Main = styled('main')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontFamily: theme.typography.mainFontFamily,

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
   section: {
      width: '79.688vw',
   },
}))
