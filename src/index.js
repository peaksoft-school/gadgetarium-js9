import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import './index.css'
import App from './App'
import { themes } from './utils/common/styles/themes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={themes}>
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>
)
