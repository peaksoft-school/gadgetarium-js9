import React, { forwardRef, useState } from 'react'
import { IconButton, OutlinedInput, styled } from '@mui/material'
import { ReactComponent as VisibilityIcon } from '../../assets/icons/eye/eye-icon.svg'
import { ReactComponent as VisibilityOffIcon } from '../../assets/icons/eye/eye-slashed-icon.svg'

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
         onBlur,
         ...props
      },
      ref
   ) => {
      const [showPassword, setShowPassword] = useState(false)

      const handleClickShowPassword = () => setShowPassword((show) => !show)

      const passwordType = showPassword ? 'text' : 'password'

      const handleBlur = (event) => {
         if (onBlur) {
            onBlur(event)
         }
      }

      return (
         <div>
            <InputOutlained
               value={value === undefined || null ? '' : value}
               onChange={onChange}
               error={error}
               color={color}
               placeholder={placeholder}
               id={id}
               ref={ref}
               type={type === 'password' ? passwordType : type}
               {...props}
               onBlur={handleBlur}
               endAdornment={
                  type === 'password' ? (
                     <StyleIconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                           <VisibilityIcon />
                        ) : (
                           <VisibilityOffIcon />
                        )}
                     </StyleIconButton>
                  ) : (
                     ''
                  )
               }
            />
         </div>
      )
   }
)

const InputOutlained = styled(OutlinedInput)(
   ({ width, height, padding, fontSize }) => ({
      width,
      height,
      padding,
      fontSize,
   })
)
const StyleIconButton = styled(IconButton)`
   position: absolute;
   left: 26.25rem;
`
