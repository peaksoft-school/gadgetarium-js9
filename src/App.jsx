import { CustomToast } from './components/UI/snackbar/CustomToast'
import { UserLayout } from './layout/user/UserLayout'

// import { Catalog } from './components/user/catalog/Catalog'

function App() {
   return (
      <div>
         {/* <Catalog /> */}
         <UserLayout />
         <CustomToast />
      </div>
   )
}

export default App
