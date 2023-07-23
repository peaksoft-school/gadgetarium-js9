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
      { error, color, type, id, placeholder, value, onChange, ...props },
      ref
   ) => {
      const [showPassword, setShowPassword] = useState(false)

      const handleClickShowPassword = () => setShowPassword((show) => !show)

      const passwordType = showPassword ? 'text' : 'password'

      return (
         <div>
            <InputOutlained
               {...props}
               value={value}
               onChange={onChange}
               error={error}
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

const InputOutlained = styled(OutlinedInput)`
   width: 459px;
`
