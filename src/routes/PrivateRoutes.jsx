import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ component, fallBacPath, roles }) => {
   const { role } = useSelector((state) => state.auth)

   console.log('role: ', role)

   const isAllowed = () => {
      return roles.includes(role)
   }

   console.log('isAllowed', isAllowed())

   if (!isAllowed()) {
      return <Navigate to={fallBacPath} />
   }

   return component
}
