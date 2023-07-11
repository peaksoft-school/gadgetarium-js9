import * as React from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'

const customTheme = (outerTheme) =>
   createTheme({
      palette: {
         mode: outerTheme.palette.mode,
      },
      components: {
         MuiTextField: {
            styleOverrides: {
               root: {
                  '--TextField-brandBorderColor': '#E0E3E7',
                  '--TextField-brandBorderHoverColor': '#B2BAC2',
                  '--TextField-brandBorderFocusedColor': '#6F7E8C',
                  '& label.Mui-focused': {
                     color: 'var(--TextField-brandBorderFocusedColor)',
                  },
               },
            },
         },
         MuiOutlinedInput: {
            styleOverrides: {
               notchedOutline: {
                  borderColor: 'var(--TextField-brandBorderColor)',
               },
               root: {
                  [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                     borderColor: 'var(--TextField-brandBorderHoverColor)',
                  },
                  [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                     borderColor: 'var(--TextField-brandBorderFocusedColor)',
                  },
               },
            },
         },
      },
   })

export default function CustomizedInputsStyleOverrides() {
   const outerTheme = useTheme()

   return (
      <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr 1fr' },
            gap: 2,
         }}
      >
         <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField label="Outlined" />
         </ThemeProvider>
      </Box>
   )
}
