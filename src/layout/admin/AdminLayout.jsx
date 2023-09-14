import { Outlet } from 'react-router-dom'
import { CustomToast } from '../../components/UI/snackbar/CustomToast'

export const AdminLayout = () => {
   return (
      <div>
         <Outlet />

         <CustomToast />
      </div>
   )
}
