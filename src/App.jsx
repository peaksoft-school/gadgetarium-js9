import { CustomToast } from './components/UI/snackbar/CustomToast'
// import { PlacingAnOrder } from './components/user/payment/PlacingAnOrder'
import { UserLayout } from './layout/user/UserLayout'

function App() {
   return (
      <div>
         <UserLayout />
         {/* <PlacingAnOrder /> */}
         <CustomToast />
      </div>
   )
}

export default App
