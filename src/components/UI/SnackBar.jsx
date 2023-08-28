import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import { Alert } from '@mui/material'
import { useSelector } from 'react-redux'

export const SnackBar = ({ handleClose }) => {
   const { open, severity, message } = useSelector((state) => state.snackbar)
   return (
      <div>
         <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
         >
            <Alert
               onClose={handleClose}
               severity={severity}
               sx={{ width: '100%' }}
            >
               {message}
            </Alert>
         </Snackbar>
      </div>
   )
}
