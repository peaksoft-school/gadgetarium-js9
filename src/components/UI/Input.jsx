import React, { forwardRef, useState } from 'react'
import { IconButton, OutlinedInput, styled } from '@mui/material'
import { ReactComponent as VisibilityIcon } from '../../assets/icons/eye/eye-icon.svg'
import { ReactComponent as VisibilityOffIcon } from '../../assets/icons/eye/eye-slashed-icon.svg'

<<<<<<< HEAD
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
=======
export const InputUi = forwardRef(function InputComponent(
   { error, color, type, id, placeholder, value, onChange, onBlur, ...props },
   ref
) {
   const [showPassword, setShowPassword] = useState(false)
>>>>>>> 1085dd01bd7a98823433ef3b2f9ac07aeb87d8d3

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const passwordType = showPassword ? 'text' : 'password'

   const handleBlur = (event) => {
      if (onBlur) {
         onBlur(event)
      }
<<<<<<< HEAD

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
=======
>>>>>>> 1085dd01bd7a98823433ef3b2f9ac07aeb87d8d3
   }
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
            onBlur={handleBlur}
            endAdornment={
               type === 'password' ? (
                  <StyleIconButton onClick={handleClickShowPassword}>
                     {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </StyleIconButton>
               ) : (
                  ''
               )
            }
         />
      </div>
   )
})

const InputOutlained = styled(OutlinedInput)(
   ({ width, height, padding, fontSize, background, borderradius }) => ({
      width,
      height,
      padding,
      fontSize,
      background,
      borderRadius: borderradius,
   })
)

const StyleIconButton = styled(IconButton)`
   position: absolute;
   left: 26.25rem;
`
