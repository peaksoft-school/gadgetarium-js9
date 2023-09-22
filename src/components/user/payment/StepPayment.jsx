import { styled } from '@mui/material'
import React from 'react'

const step = [
   {
      id: 1,
      label: 'Варианты доставки',
      line: true,
      left: 0,
   },
   {
      id: 2,
      label: 'Оплата',
      line: true,
      left: 10,
   },
   {
      id: 3,
      label: 'Обзор заказа',
      line: false,
      left: 60,
   },
]

export const StepPayment = ({ page }) => {
   return (
      <div>
         <Container>
            {step.map((item, index) => {
               const successPage = index === page[index]

               return (
                  <div key={item.id}>
                     <BoxStepHead>
                        <Circle page={successPage}>{item.id}</Circle>
                        {item.line && <Line page={successPage} />}
                     </BoxStepHead>
                     <BoxLabel>
                        <LabelStep page={successPage} index={item.id} {...item}>
                           {item.label}
                        </LabelStep>
                     </BoxLabel>
                  </div>
               )
            })}
         </Container>
      </div>
   )
}

const Container = styled('div')`
   display: flex;
`

const BoxStepHead = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
}))

const Circle = styled('span')(({ page }) => ({
   width: '2.4vw',
   height: '2.4vw',
   backgroundColor: page ? '#cb11ab' : '#C6C6C6',
   borderRadius: '3.125rem',

   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   color: '#f4f4f4',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
}))

const Line = styled('div')(({ page }) => ({
   width: '19vw',
   height: '0.1563rem',
   backgroundColor: page ? '#cb11ab' : '#C6C6C6',
}))

const BoxLabel = styled('div')`
   margin-top: 1rem;
   width: 12.5rem;
`

const LabelStep = styled('p')(({ page, left }) => ({
   color: page ? '#cb11ab' : '#686868',
   margin: 0,

   marginLeft: `-${left}px`,

   textAlign: 'start',

   fontFamily: 'Inter',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
}))
