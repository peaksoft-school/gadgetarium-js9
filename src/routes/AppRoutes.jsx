import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { AdminLayout } from '../layout/admin/AdminLayout'
import { adminRoutes } from './AdminRoutes'
import { userRoutes } from './UserRoutes'
import { USER_ROLE, routes } from '../utils/common/constants/routesConstants'
import { PrivateRoute } from './PrivateRoutes'

const role = 'ADMIN'

const isAllowed = (roles) => {
   return roles.includes(role)
}

export const router = createBrowserRouter([
   {
      path: routes.SIGN_IN,
      element: (
         <PrivateRoute
            isAllowed={isAllowed([USER_ROLE.GUEST, USER_ROLE.USER])}
            fallBacPath={
               role === USER_ROLE.ADMIN ? '/admin/add-products/part-1' : '/home'
            }
            component={<h1>Sign In</h1>}
         />
      ),
   },
   {
      path: routes.SIGN_UP,
      element: (
         <PrivateRoute
            isAllowed={isAllowed([USER_ROLE.GUEST, USER_ROLE.USER])}
            fallBacPath={
               role === USER_ROLE.ADMIN ? '/admin/add-products/part-1' : '/home'
            }
            component={<h1>Sign Up</h1>}
         />
      ),
   },
   {
      path: routes.USER.index,
      element: (
         <PrivateRoute
            isAllowed={isAllowed([USER_ROLE.GUEST, USER_ROLE.USER])}
            fallBacPath="/admin/add-products/part-1"
            component={<App />}
         />
      ),
      children: userRoutes,
   },
   // {
   //    path: routes.ADMIN.index,
   //    element: (
   //       <PrivateRoute
   //          isAllowed={isAllowed([USER_ROLE.ADMIN])}
   //          fallBacPath="/home"
   //          component={<AdminLayout />}
   //       />
   //    ),
   //    children: adminRoutes,
   // },
   {
      path: routes.ADMIN.addProduct,
      element: (
         <PrivateRoute
            isAllowed={isAllowed([USER_ROLE.ADMIN])}
            fallBacPath="/"
            component={<AdminLayout />}
         />
      ),
      children: adminRoutes,
   },
   {
      path: '*',
      element: <Navigate to="/" />,
   },
])
