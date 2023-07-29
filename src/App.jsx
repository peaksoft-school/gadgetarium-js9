import { CustomToast } from './components/UI/snackbar/CustomToast'
import { AddingAProduct } from './components/admin/addingAProduct/AddingAProduct'

function App() {
   return (
      <div>
         {/* <h1>Hello World</h1> */}

         <AddingAProduct />

         <CustomToast />
      </div>
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
