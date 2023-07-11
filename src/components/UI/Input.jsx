import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import {
   FormControl,
   IconButton,
   InputAdornment,
   OutlinedInput,
   styled,
} from '@mui/material'
// import VisibilityIcon from '@mui/icons-material/Visibility'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const InputUi = ({ error, color, type, register, id, placeholder }) => {
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

   return (
      <div>
         {type === 'password' ? (
            <FormControl variant="outlined">
               <InputOutlained
                  error={error}
                  color={color}
                  placeholder={placeholder}
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
                           {/* {showPassword ? (
                              <VisibilityIcon />
                           ) : (
                              <VisibilityOffIcon />
                           )} */}
                        </IconButton>
                     </InputAdornment>
                  }
               />
            </FormControl>
         ) : (
            <Input
               id="outlined-basic"
               variant="outlined"
               error={error}
               color={color}
               type={type}
               placeholder={placeholder}
            />
         )}
      </div>
   )
}

export default InputUi

const Input = styled(TextField)(() => ({
   width: '459px',
   borderColor: 'red',
}))

const InputOutlained = styled(OutlinedInput)`
   width: 459px;
`
