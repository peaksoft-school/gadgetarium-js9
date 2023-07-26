import { Navigate } from 'react-router-dom'
import { routes } from '../utils/common/constants/routesConstants'

export const PrivateRoute = ({ component, isAuth }) => {
   if (isAuth) {
      return component
   }

   return <Navigate to={routes.LOGIN} />
}
