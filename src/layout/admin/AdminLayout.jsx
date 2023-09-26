import { Outlet } from 'react-router-dom'
import { CustomToast } from '../../components/UI/snackbar/CustomToast'
import { AdminHeader } from '../../components/admin/header/AdminHeader'

export const AdminLayout = () => {
   return (
      <div>
         <AdminHeader />

         <Outlet />

         <CustomToast />
      </div>
   )
}
