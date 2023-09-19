import { CustomToast } from './components/UI/snackbar/CustomToast'
import { AdminOrders } from './components/admin/orders/adminOrders'
// import { UserLayout } from './layout/user/UserLayout'

function App() {
   return (
      <div>
         <AdminOrders />
         {/* <UserLayout /> */}
         <CustomToast />
      </div>
   )
}

export default App
