import React, { forwardRef, useState } from 'react'
import {
   IconButton,
   InputAdornment,
   OutlinedInput,
   styled,
} from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export const InputUi = forwardRef(
   (
      {
         error,
         color,
         type,
         id,
         placeholder,
         value,
         onChange,
         padding,
         width,
         height,
         defaultValue = '',
      },
      ref
   ) => {
      const [showPassword, setShowPassword] = useState(false)

      const handleClickShowPassword = () => setShowPassword((show) => !show)

      const passwordType = showPassword ? 'text' : 'password'

      return (
         <div>
            <InputOutlained
               padding={padding}
               value={value}
               onChange={onChange}
               error={error}
               width={width}
               height={height}
               color={color}
               placeholder={placeholder}
               id={id}
               defaultValue={defaultValue}
               ref={ref}
               type={type === 'password' ? passwordType : type}
               endAdornment={
                  type === 'password' ? (
                     <InputAdornment>
                        <IconButton onClick={handleClickShowPassword}>
                           {showPassword ? (
                              <VisibilityIcon />
                           ) : (
                              <VisibilityOffIcon />
                           )}
                        </IconButton>
                     </InputAdornment>
                  ) : (
                     ''
                  )
               }
            />
         </div>
      )
   }
)

InputUi.displayName = 'InputUi'

const InputOutlained = styled(OutlinedInput)(({ padding, width, height }) => ({
   width,
   padding,
   height,

   '& input[type="date"]::-webkit-inner-spin-button, & input[type="date"]::-webkit-clear-button':
      {
         display: 'none',
      },
}))
