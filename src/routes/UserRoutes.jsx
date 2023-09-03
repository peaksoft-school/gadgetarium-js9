import { FAQ } from '../components/user/storeInformation/fag/Fag'
import { Delivery } from '../components/user/storeInformation/delivery/Delivery'
import { Contacts } from '../components/user/storeInformation/contacts/Contacts'
import { routes } from '../utils/common/constants/routesConstants'
import { MainPage } from '../components/user/main.page/MainPage'
import { AboutShop } from '../components/user/storeInformation/aboutShop/AboutShop'

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
]
