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
      name: 'firstCa rd',
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
   { title: 32, id: 6, checked: false },
   { title: 36, id: 7, checked: false },
]

export const memoryCapacityConstants = [
   { title: 4, id: 1, checked: false },
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
export const screenResolutionLaptop = [
   { title: '1024x600', id: 1, checked: false },
   { title: '1280x800', id: 2, checked: false },
   { title: '1366x768', id: 3, checked: false },
   { title: '1600x900', id: 4, checked: false },
   { title: '1366x768', id: 5, checked: false },
   { title: '1920x1080', id: 6, checked: false },
   { title: '2160x1440', id: 7, checked: false },
   { title: '2560x1600', id: 8, checked: false },
   { title: '3072x1920', id: 9, checked: false },
   { title: '3840x2160', id: 10, checked: false },
]

export const laptopVideoMemory = [
   { title: 2, id: 1, checked: false },
   { title: 4, id: 2, checked: false },
   { title: 6, id: 3, checked: false },
   { title: 8, id: 4, checked: false },
   { title: 16, id: 5, checked: false },
]

export const laptopPuproses = [
   { title: 'Для работы', id: 1, checked: false },
   { title: 'Мультимедийный', id: 2, checked: false },
   { title: 'Игровой', id: 3, checked: false },
   { title: 'Для бизнеса', id: 4, checked: false },
   { title: 'Для учебы', id: 5, checked: false },
   { title: 'Офисный', id: 6, checked: false },
]

export const laptopScreenSize = [
   { title: 11.6, id: 1, checked: false },
   { title: 13.3, id: 2, checked: false },
   { title: 14, id: 3, checked: false },
   { title: 15, id: 4, checked: false },
   { title: 15.6, id: 5, checked: false },
   { title: 16, id: 6, checked: false },
   { title: 16.1, id: 7, checked: false },
   { title: 17.3, id: 8, checked: false },
]

export const watchInterfaces = [
   { title: 'Bluetooth', id: 1, checked: false },
   { title: 'Wi-Fi', id: 2, checked: false },
   { title: 'GPS', id: 3, checked: false },
   { title: 'NFC', id: 4, checked: false },
]

export const watchShapes = [
   { title: 'Квадратная', id: 1, checked: false },
   { title: 'Круглая', id: 2, checked: false },
   { title: 'Овальная', id: 3, checked: false },
   { title: 'Прямоугольная', id: 4, checked: false },
]

export const watchMaterialBracelets = [
   { title: 'Силикон', id: 1, checked: false },
   { title: 'Кожа', id: 2, checked: false },
   { title: 'Резина', id: 3, checked: false },
   { title: 'Пластик', id: 4, checked: false },
   { title: 'Нейлон', id: 5, checked: false },
   { title: 'Из искусственной кожи', id: 6, checked: false },
   { title: 'Имитация керамики', id: 7, checked: false },
]

export const watchMaterialHousing = [
   { title: 'Акриловый', id: 1, checked: false },
   { title: 'Алюминий', id: 2, checked: false },
   { title: 'Керамика', id: 3, checked: false },
   { title: 'Пластик', id: 4, checked: false },
   { title: 'Металл', id: 5, checked: false },
   { title: 'Нержавейщая сталь', id: 6, checked: false },
   { title: 'Стекло', id: 7, checked: false },
]

export const watchFloor = [
   { title: 'Унисекс ', id: 1, checked: false },
   { title: 'Женский', id: 2, checked: false },
   { title: 'Мужской', id: 3, checked: false },
]

export const watchWaterProof = [
   { title: 'Да ', id: 1, checked: false },
   { title: 'Нет', id: 2, checked: false },
]

export const watchDisplayDiagonal = [
   { title: '1.2', id: 1, checked: false },
   { title: '1.22', id: 2, checked: false },
   { title: '13', id: 3, checked: false },
   { title: '1.4', id: 4, checked: false },
   { title: '1.41', id: 5, checked: false },
   { title: '1.44', id: 6, checked: false },
   { title: '1.54', id: 7, checked: false },
]

export const tabletBatteryCapacity = [
   { title: '0 – 2399 мА/час', id: 1, checked: false },
   { title: '2400 – 4799 мА/час', id: 2, checked: false },
   { title: '4800 – 7199 мА/час', id: 3, checked: false },
   { title: '7200 – 9599 мА/ч', id: 4, checked: false },
   { title: '9600 – 12000 мА/ч', id: 5, checked: false },
]
