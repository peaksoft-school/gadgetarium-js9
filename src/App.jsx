import { CustomToast } from './components/UI/snackbar/CustomToast'
import { PersonalArea } from './components/personalAreaPage/PersonalArea'
// import { UserLayout } from './layout/user/UserLayout'

function App() {
   return (
      <div>
         {/* <UserLayout /> */}
         <PersonalArea />
         <CustomToast />
      </div>
   )
}

export default App
