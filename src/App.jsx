import { UserLayout } from './layout/user/UserLayout'

function App() {
   return (
      <div>
         <UserLayout />
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
