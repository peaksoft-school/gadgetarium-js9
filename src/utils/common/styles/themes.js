import { createTheme } from '@mui/material'

export const themes = createTheme({
   palette: {
      primary: {
         main: '#CB11AB',
         light: '#384255',
         dark: '#CB11AB',
         headerFooter: '#1a1a25',
         contrastText: '#fff',
         mainContrastText: '#292929',
      },
      secondary: {
         main: '#CDCDCD',
         light: '#909CB5',
         lightGray: '#91969E',
         tabsBg: '#E0E2E7',
         contrastText: '#91969E',
      },
      error: {
         main: '#ff0000',
      },
      info: {
         main: '#2C68F5',
         orange: '#F99808',
         darkBlue: '#08A592',
      },
      success: {
         main: '#2FC509',
         light: '#3CDE14',
      },
   },
   typography: {
      fontFamily: 'Ubuntu',
      mainFontFamily: 'Inter',
   },
})
