import { CustomToast } from './components/UI/snackbar/CustomToast'
import { PersonalAreaContainer } from './components/personalAreaPage/PersonalAreaContainer'
// import { UserLayout } from './layout/user/UserLayout'

function App() {
   return (
      <div>
         <PersonalAreaContainer />
         {/* <UserLayout /> */}

         <CustomToast />
      </div>
   )
}

export default App
