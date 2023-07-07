import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {
   FormControl,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export const InputUi = ({ error, color, type, placeholder, register, id }) => {
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

   return (
      <div>
         {type === 'password' ? (
            <FormControl sx={{ m: 1, width: '459px' }} variant="outlined">
               <InputLabel htmlFor={id}>{placeholder}</InputLabel>
               <OutlinedInput
                  error={error}
                  color={color}
                  id={id}
                  {...register}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                           edge="end"
                        >
                           {showPassword ? (
                              <VisibilityIcon />
                           ) : (
                              <VisibilityOffIcon />
                           )}
                        </IconButton>
                     </InputAdornment>
                  }
                  label={placeholder}
               />
            </FormControl>
         ) : (
            <Box
               component="form"
               sx={{
                  '& > :not(style)': { m: 1, width: '459px', height: '43px' },
               }}
               noValidate
               autoComplete="off"
            >
               <TextField
                  size="small"
                  id="outlined-basic"
                  label={placeholder}
                  variant="outlined"
                  type={type}
                  color={color}
                  error={error}
               />
            </Box>
         )}
      </div>
   )
}
