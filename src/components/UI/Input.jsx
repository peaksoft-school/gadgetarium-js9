import React, { forwardRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import {
   FormControl,
   IconButton,
   InputAdornment,
   OutlinedInput,
   styled,
} from '@mui/material'

import { ReactComponent as DontWatch } from '../../assets/icons/iconsInput/eye-slash-fill.svg'
import { ReactComponent } from '../../assets/icons/iconsInput/Eye-Icon-wsj93.svg'

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
                           {showPassword ? <Watch /> : <DontWatch />}
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

export default forwardRef(InputUi)

const InputOutlained = styled(OutlinedInput)`
   width: 459px;
`
const Input = styled(TextField)`
   width: 459px;
`
const Watch = styled(ReactComponent)`
   width: 25px;
`
