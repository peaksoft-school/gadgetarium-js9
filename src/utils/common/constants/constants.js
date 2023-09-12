import { keyframes } from '@mui/material'
import gadgetStorePhoto from '../../../assets/images/gadgetStorePhoto.jpg'
import gadgetStoreFigmaPhoto from '../../../assets/images/gadgetStoreFigmaPhoto.png'
import gadgetPhoto from '../../../assets/images/gadgetPhoto.jpg'
import { ReactComponent as BankCard } from '../../../assets/icons/warranty-icons/bank-cards.svg'
import { ReactComponent as WarrantlyIcon } from '../../../assets/icons/warranty-icons/warranty-icon.svg'
import { ReactComponent as DeliveryIcon } from '../../../assets/icons/warranty-icons/delivery-icon.svg'
import { ReactComponent as Honestly } from '../../../assets/icons/warranty-icons/honestly.svg'
import { ReactComponent as MendingIcon } from '../../../assets/icons/warranty-icons/mending-icon.svg'

export const arrayForTools = [
   {
      id: 1,
      name: 'firstCard',
      component: WarrantlyIcon,
      text: 'Официальный дистрибьютер',
   },
   {
      id: 2,
      name: 'secondCard',
      component: MendingIcon,
      text: 'Гарантийное обслуживание',
   },
   {
      id: 3,
      name: 'thirdCard',
      component: BankCard,
      text: 'Оплата любым удобным способом',
   },
   {
      id: 4,
      name: 'fourthCard',
      component: Honestly,
      text: 'Оптовые продажи',
   },
   {
      id: 5,
      name: 'fifthCard',
      component: DeliveryIcon,
      text: 'Доставка в любой регион Кыргызстана',
   },
]
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

export const slideIn = keyframes`
     from {
       opacity: 0;
       transform: translateY(-10px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   `

export const slideOut = keyframes`
     from {
        opacity: 1;
        transform: translateY(0);
     }
     to {
       opacity: 0;
       transform: translateY(-10px);
     }
     `

export const memoryRamConstants = [
   { title: 3, id: 1, checked: false },
   { title: 4, id: 2, checked: false },
   { title: 6, id: 3, checked: false },
   { title: 8, id: 4, checked: false },
   { title: 16, id: 5, checked: false },
]

export const memoryCapacityConstants = [
   { title: 8, id: 1, checked: false },
   { title: 16, id: 2, checked: false },
   { title: 32, id: 3, checked: false },
   { title: 64, id: 4, checked: false },
   { title: 128, id: 5, checked: false },
   { title: 256, id: 6, checked: false },
   { title: 512, id: 7, checked: false },
   { title: 1024, id: 8, checked: false },
]
export const simConstants = [
   { title: 1, id: 1, checked: false },
   { title: 2, id: 2, checked: false },
]

export const ProcessorsLaptop = [
   { title: 'Intel Core i3', id: 1, checked: false },
   { title: 'Intel Core i5', id: 2, checked: false },
   { title: 'Intel Core i7', id: 3, checked: false },
   { title: 'Intel Core i9', id: 4, checked: false },
   { title: 'Intel Celeron', id: 5, checked: false },
   { title: 'Intel Pentium', id: 6, checked: false },
   { title: 'AMD', id: 7, checked: false },
   { title: 'Intel Quad Core', id: 8, checked: false },
   { title: 'Intel Dual Core', id: 9, checked: false },
   { title: 'AMD Ryzen 3 3250U', id: 10, checked: false },
   { title: 'Intel Core i7-8565U', id: 11, checked: false },
   { title: 'AMD Ryzen 7 4700U', id: 12, checked: false },
]
