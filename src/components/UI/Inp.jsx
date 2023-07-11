import React from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/material'
// import { makeStyles } from '@mui/material/styles'

export const Inp = () => {
   const useStyles = makeStyles((theme) => ({
      root: {
         '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
         },
      },
      textField: {
         border: '1px solid blue',
      },
   }))

   const clasesss = useStyles()
   return (
      <div>
         <form className={clasesss.root}>
            <TextField
               className={clasesss.textField}
               id="outlined-basic"
               variant="outlined"
            />
         </form>
      </div>
   )
}
