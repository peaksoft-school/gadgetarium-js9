import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { AdminLayout } from '../layout/admin/AdminLayout'
import { adminRoutes } from './AdminRoutes'
import { userRoutes } from './UserRoutes'
import { USER_ROLE, routes } from '../utils/common/constants/routesConstants'
import { PrivateRoute } from './PrivateRoutes'
import { SignUp } from '../pages/signInAndsignUp/SignUpPage'
import { SignIn } from '../pages/signInAndsignUp/SignInPage'

export const router = createBrowserRouter([
   {
      path: routes.SIGN_IN,
      element: (
         <PrivateRoute
            roles={[USER_ROLE.GUEST, USER_ROLE.USER]}
            fallBacPath="register"
            component={<SignIn />}
         />
      ),
   },
   {
      path: routes.SIGN_UP,
      element: (
         <PrivateRoute
            roles={[USER_ROLE.GUEST, USER_ROLE.USER]}
            fallBacPath="register"
            component={<SignUp />}
         />
      ),
   },
   {
      path: routes.USER.index,
      element: (
         <PrivateRoute
            roles={[USER_ROLE.GUEST, USER_ROLE.USER]}
            fallBacPath="/admin"
            component={<App />}
         />
      ),
      children: userRoutes,
   },
   {
      path: routes.ADMIN.index,
      element: (
         <PrivateRoute
            roles={[USER_ROLE.ADMIN]}
            fallBacPath="/"
            component={<AdminLayout />}
         />
      ),
      children: adminRoutes,
   },
])
