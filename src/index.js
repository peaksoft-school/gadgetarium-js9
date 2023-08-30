import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import './index.css'
import { themes } from './utils/common/styles/themes'
import { router } from './routes/AppRoutes'
import { store } from './store'
import { injectStore } from './config/axiosInstants'
import { injectStoreFile } from './config/axiosFileInstance'

injectStoreFile(store)
injectStore(store)

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
