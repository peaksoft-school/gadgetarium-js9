import { styled } from '@mui/system'
import React from 'react'
import { DeliveryMethods } from './DeliveryMethods'
import { PaymentMethods } from './PaymentMethods'

export const Delivery = () => {
   return (
      <Container>
         <Main>
            <Text>Доставка</Text>

            <section>
               <div>
                  <DeliveryMethods />
               </div>
               <div>
                  <PaymentMethods />
               </div>
            </section>
         </Main>
      </Container>
   )
}

const Container = styled('div')`
   margin: 1.88rem 0 0 12.25rem;
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

const Main = styled('main')(({ theme }) => ({
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
}))
