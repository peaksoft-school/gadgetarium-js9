import { useNavigate, Outlet } from 'react-router-dom'
import { CustomToast } from '../../components/UI/snackbar/CustomToast'

export const AdminLayout = () => {
   // eslint-disable-next-line no-unused-vars
   const navigate = useNavigate()

   return (
      <div>
         <Outlet />

         <CustomToast />
         {/* <button onClick={() => navigate('/admin/add-products-part-1')}>
            Click
         </button> */}
      </div>
   )
}
