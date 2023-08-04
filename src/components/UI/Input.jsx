import React, { forwardRef, useState } from 'react'
import {
   IconButton,
   InputAdornment,
   OutlinedInput,
   styled,
} from '@mui/material'
import { ReactComponent as VisibilityIcon } from '../../assets/icons/eye/eye-icon.svg'
import { ReactComponent as VisibilityOffIcon } from '../../assets/icons/eye/eye-slashed-icon.svg'

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
               value={value}
               onChange={onChange}
               error={error}
               color={color}
               placeholder={placeholder}
               id={id}
               ref={ref}
               type={type === 'password' ? passwordType : type}
               {...props}
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
   width: ${(props) => (props.width ? props.width : '459px')};
   height: ${(props) => (props.height ? props.height : 'auto')};
`
