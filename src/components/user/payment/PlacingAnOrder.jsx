import React from 'react'
import {
   Box,
   Button,
   Step,
   StepConnector,
   StepLabel,
   Stepper,
   Typography,
   stepConnectorClasses,
   styled,
} from '@mui/material'
import { BreadCrumbs } from '../../UI/breadCrumbs/BreadCrumbs'

const breadcrumbs = [
   { path: '/', label: 'Главная' },
   {
      path: '/',
      label: 'Корзина',
   },
   { label: 'Оформление заказа' },
]

const steps = ['Варианты доставки', 'Оплата', 'Обзор заказа']

const QontoConnector = styled(StepConnector)(({ theme }) => ({
   [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
   },
   [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         borderColor: '#CB11AB',
      },
   },
   [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         borderColor: '#CB11AB',
      },
   },
   [`& .${stepConnectorClasses.line}`]: {
      borderColor:
         theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
   },
}))

export const PlacingAnOrder = () => {
   const [activeStep, setActiveStep] = React.useState(0)
   const [skipped, setSkipped] = React.useState(new Set())
   console.log('skipped: ', skipped)
   console.log('activeStep: ', activeStep)

   const isStepSkipped = (step) => {
      return skipped.has(step)
   }

   const handleNext = () => {
      let newSkipped = skipped
      if (isStepSkipped(activeStep)) {
         newSkipped = new Set(newSkipped.values())
         newSkipped.delete(activeStep)
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setSkipped(newSkipped)
   }

   return (
      <div>
         <BreadCrumbs breadcrumbs={breadcrumbs} />
         <Box sx={{ width: '100%' }}>
            <Stepper
               alternativeLabel
               //  activeStep={activeStep}
               connector={<QontoConnector />}
            >
               {steps.map((label, index) => {
                  const stepProps = {}
                  const labelProps = {}

                  if (isStepSkipped(index)) {
                     stepProps.completed = false
                  }

                  return (
                     <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                     </Step>
                  )
               })}
            </Stepper>
            {activeStep === steps.length ? null : (
               <>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                     Step {activeStep + 1}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                     <Box sx={{ flex: '1 1 auto' }} />

                     <Button onClick={handleNext}>
                        {activeStep === steps.length - 1
                           ? 'Оформить заказ'
                           : 'продолжить'}
                     </Button>
                  </Box>
               </>
            )}
         </Box>
      </div>
   )
}
