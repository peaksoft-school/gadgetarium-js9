import { styled } from '@mui/material'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export const CustomToast = () => {
   return (
      <div>
         <ToastContainerStyle newestOnTop rtl={false} pauseOnFocusLoss />
      </div>
   )
}

const ToastContainerStyle = styled(ToastContainer)`
   width: auto;

   & .Toastify__toast-icon {
      display: none;
   }
`
