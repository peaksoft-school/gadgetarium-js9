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
         left,
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
                     <StyleIconButton
                        left={left}
                        onClick={handleClickShowPassword}
                     >
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
InputUi.displayName = 'Input'

const InputOutlained = styled(OutlinedInput)(
   ({
      width,
      height,
      padding,
      fontSize,
      background,
      borderradius,
      border,
      ...props
   }) => ({
      width,
      height,
      padding,
      fontSize,
      background,
      borderRadius: borderradius,
      border,
      '.MuiInputBase-input': {
         padding: props.classpadding && props.classpadding,
      },
   })
)

const StyleIconButton = styled(IconButton)`
   position: absolute;
   left: ${(props) => props.left || '26.25rem'};
`
