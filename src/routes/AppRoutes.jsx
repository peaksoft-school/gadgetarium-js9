import React from 'react'
import { Route, Routes } from 'react-router'
import { routes } from '../utils/common/constants/routesConstants'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path={routes.SIGN_IN} element={<div>Login</div>} />
         <Route path={routes.SIGN_UP} element={<div>Sign_Up</div>} />
         <Route path="" />
         <Route />
      </Routes>
   )
}
