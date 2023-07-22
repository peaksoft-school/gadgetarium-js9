import React, { forwardRef, useState } from 'react'
import {
   IconButton,
   InputAdornment,
   OutlinedInput,
   styled,
} from '@mui/material'

import VisibilityIcon from '../../assets/icons/eye/eye-icon.svg'
import VisibilityOffIcon from '../../assets/icons/eye/eye-slashed-icon.svg'

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
}))
