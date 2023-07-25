import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { themes } from './utils/common/styles/themes'
import { CustomToast } from './components/UI/snackbar/CustomToast'

function App() {
   return (
      <BrowserRouter>
         <ThemeProvider theme={themes}>
            <h1>Hello World</h1>

            <CustomToast />
         </ThemeProvider>
      </BrowserRouter>
   )
}

export default App

// redux-logger

/*

import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ isAllowed, component }) => {
  if (isAllowed) {
    return component
  }

  return <Navigate to={LOGIN} />
}

<PrivateRoute isAllowed={isAuth} component={<Login />} />

*/
