import { FAQ } from '../components/user/fag/Fag'
import { AboutShop } from '../components/user/aboutShop/AboutShop'
import { Delivery } from '../components/user/delivery/Delivery'
import { routes } from '../utils/common/constants/routesConstants'
import { Contacts } from '../components/user/contacts/Contacts'
import { Favorite } from '../components/user/favorite/Favorite'
import { MainPage } from '../components/user/main.page/MainPage'
import { Basket } from '../components/user/basket/Basket'
import { Catalog } from '../components/user/catalog/Catalog'

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
      path: routes.USER.category.index,
      element: <Catalog />,
      children: [
         { path: routes.USER.category.smartphone, element: <Catalog /> },
         { path: routes.USER.category.smartWatch, element: <Catalog /> },
         { path: routes.USER.category.tablets, element: <Catalog /> },
         { path: routes.USER.category.laptops, element: <Catalog /> },
      ],
   }
]
