import { FAQ } from '../components/user/fag/Fag'
import { AboutShop } from '../components/user/aboutShop/AboutShop'
import { Delivery } from '../components/user/delivery/Delivery'
import { routes } from '../utils/common/constants/routesConstants'
import { Contacts } from '../components/user/contacts/Contacts'
import { Favorite } from '../components/user/favorite/Favorite'

export const userRoutes = [
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
      path: routes.USER.favorite,
      element: <Favorite />,
   },
]
