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
         padding,
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
               {...props}
               value={value}
               onChange={onChange}
               error={error}
               color={color}
               placeholder={placeholder}
               id={id}
               ref={ref}
               padding={padding}
               onBlur={handleBlur}
               type={type === 'password' ? passwordType : type}
               {...props}
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
   ({
      width,
      height,
      padding,
      fontSize,
      background,
      borderradius,
      border,
   }) => ({
      width,
      height,
      padding,
      fontSize,
      background,
      borderRadius: borderradius,
      border,
   })
)

const StyleIconButton = styled(IconButton)`
   position: absolute;
   left: 26.25rem;
`
