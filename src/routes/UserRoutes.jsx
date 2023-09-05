import { FAQ } from '../components/user/fag/Fag'
import { AboutShop } from '../components/user/aboutShop/AboutShop'
import { Delivery } from '../components/user/delivery/Delivery'
import { routes } from '../utils/common/constants/routesConstants'
import { Contacts } from '../components/user/contacts/Contacts'
import { Favorite } from '../components/user/favorite/Favorite'
import { MainPage } from '../components/user/main.page/MainPage'
import { HistoryDeital } from '../components/personalAreaPage/historyPages/HistoryDeital'
import { History } from '../components/personalAreaPage/historyPages/History'

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
      path: routes.USER.favorite,
      element: <Favorite />,
   },
   {
      path: routes.USER.personal.index,
      element: <History />,
   },
   { path: routes.USER.personal.personalDetail, element: <HistoryDeital /> },
]
