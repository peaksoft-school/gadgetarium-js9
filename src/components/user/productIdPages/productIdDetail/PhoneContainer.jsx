import React from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { PopUpMain } from '../../UserUI/PopUp/PopUpMain'
import { PhoneDeital } from './PhoneDeital'

export const PhoneContainer = () => {
   const { role } = useSelector((state) => state.auth)
   return (
      <ConatinerChilde roleadmin={role}>
         <PopUpMain />
         <PhoneDeital />
      </ConatinerChilde>
   )
}

const ConatinerChilde = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-bottom: 7.5rem;
   width: ${(props) => (props.roleadmin === 'ADMIN' ? '89.583vw' : '79.888vw')};
`
