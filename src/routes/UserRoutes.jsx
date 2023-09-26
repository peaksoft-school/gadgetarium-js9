import { FAQ } from '../components/user/storeInformation/fag/Fag'
import { Delivery } from '../components/user/storeInformation/delivery/Delivery'
import { Contacts } from '../components/user/storeInformation/contacts/Contacts'
import { routes } from '../utils/common/constants/routesConstants'
import { AboutShop } from '../components/user/storeInformation/aboutShop/AboutShop'
import { Favorite } from '../components/user/favorite/Favorite'
import { MainPage } from '../components/user/main.page/MainPage'
import { PopUpPage } from '../components/user/UserUI/PopUp/PopUpPage'
import { Basket } from '../components/user/basket/Basket'
import { Compare } from '../components/user/compare/Compare'
import { Catalog } from '../components/user/catalog/Catalog'
import { PersonalAreaContainer } from '../components/user/personalAreaPage/PersonalAreaContainer'
import { HistoryDetailContainer } from '../components/user/personalAreaPage/historyPages/HistoryDetailContainer'
import { PhonePage } from '../components/user/productIdPages/productIdDetail/PhonePage'
import { PlacingAnOrder } from '../components/user/payment/PlacingAnOrder'

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
      path: routes.USER.basket,
      element: <Basket />,
   },
   {
      path: routes.USER.personal.index,
      element: <PersonalAreaContainer />,
   },
   {
      path: routes.USER.personal.personalDetail,
      element: <HistoryDetailContainer />,
   },
   {
      path: routes.USER.personalFavorites,
      element: <PersonalAreaContainer />,
   },
   {
      path: routes.USER.category.index,
      element: <Catalog />,
      children: [
         { path: routes.USER.category.smartphone, element: <Catalog /> },
         { path: routes.USER.category.smartWatch, element: <Catalog /> },
         { path: routes.USER.category.tablets, element: <Catalog /> },
         { path: routes.USER.category.laptops, element: <Catalog /> },
      ],
   },
   {
      path: routes.USER.compare,
      element: <Compare />,
   },
   {
      path: routes.USER.phones.index,
      element: (
         <div>
            <PhonePage />
         </div>
      ),
   },

   {
      path: routes.USER.phones.fullPicture,
      element: <PopUpPage />,
   },
   {
      path: routes.USER.payment,
      element: <PlacingAnOrder />,
   },
]
