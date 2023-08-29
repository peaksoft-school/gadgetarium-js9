import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import './index.css'
import { themes } from './utils/common/styles/themes'
import { router } from './routes/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider theme={themes}>
            <RouterProvider router={router} />
         </ThemeProvider>
      </Provider>
   </React.StrictMode>
)
