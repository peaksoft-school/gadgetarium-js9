import gadgetStorePhoto from '../../../assets/images/gadgetStorePhoto.jpg'
import gadgetStoreFigmaPhoto from '../../../assets/images/gadgetStoreFigmaPhoto.png'
import gadgetPhoto from '../../../assets/images/gadgetPhoto.jpg'

export const slidePhotos = [
   {
      id: '1',
      url: gadgetStoreFigmaPhoto,
   },
   {
      id: '2',
      url: gadgetPhoto,
   },
   {
      id: '3',
      url: gadgetStorePhoto,
   },
]

export const navBarForHeader = [
   {
      path: '/',
      title: 'Главная',
   },
   {
      path: '/aboutStore',
      title: 'О магазине',
   },
   {
      path: '/delivery',
      title: 'Доставка',
   },
   {
      path: '/faq',
      title: 'FAQ',
   },
   {
      path: '/contacts',
      title: 'Контакты',
   },
]

export const navBarForAdminHeader = [
   {
      path: '/admin/goods',
      title: 'Товары',
   },
   {
      path: '/admin/orders',
      title: 'Заказы',
   },
   {
      path: '/admin/reviewsAndRating',
      title: 'Отзывы и рейтинг',
   },
]
