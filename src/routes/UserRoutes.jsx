import { FAQ } from '../components/user/fag/Fag'
import { AboutShop } from '../components/user/aboutShop/AboutShop'
import { Delivery } from '../components/user/delivery/Delivery'
import { routes } from '../utils/common/constants/routesConstants'
import { Contacts } from '../components/user/contacts/Contacts'
import { MainPage } from '../components/user/main.page/MainPage'
import { PhoneContainer } from '../components/user/productIdPages/infoPhone/PhoneContainer'
import { PopUpPage } from '../components/user/UserUI/PopUp/PopUpPage'
import { InfoPagesContainer } from '../components/user/productIdPages/informationPage/InfoPagesContainer'

export const userRoutes = [
   { path: routes.USER.index, element: <MainPage /> },
   {
      path: routes.USER.aboutShop,
      element: <AboutShop />,
   },
   {
      path: routes.USER.delivery,
      element: <Delivery />,
   },
   {
      path: routes.USER.faq,
      element: <FAQ />,
   },
   {
      path: routes.USER.contacts,
      element: <Contacts />,
   },
   {
      path: routes.USER.phones.index,
      element: (
         <div>
            <PhoneContainer /> <InfoPagesContainer />
         </div>
      ),
   },
   {
      path: routes.USER.phones.fullPicture,
      element: <PopUpPage />,
   },
]
