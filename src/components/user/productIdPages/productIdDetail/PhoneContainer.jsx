import React from 'react'
import { styled } from '@mui/material'
import { PopUpMain } from '../../UserUI/PopUp/PopUpMain'
import { PhoneDeital } from './PhoneDeital'

export const PhoneContainer = () => {
   return (
      <ConatinerChilde>
         <PopUpMain />
         <PhoneDeital />
      </ConatinerChilde>
   )
}

const ConatinerChilde = styled('div')`
   display: flex;
   justify-content: space-between;
   width: 79.888vw;
   margin-bottom: 7.5rem;
`
