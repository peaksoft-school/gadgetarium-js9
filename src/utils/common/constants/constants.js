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
   { title: 2, id: 1, checked: false },
   { title: 3, id: 9, checked: false },
   { title: 4, id: 2, checked: false },
   { title: 6, id: 3, checked: false },
   { title: 8, id: 4, checked: false },
   { title: 12, id: 5, checked: false },
   { title: 16, id: 6, checked: false },
   { title: 32, id: 7, checked: false },
   { title: 36, id: 8, checked: false },
]

export const memoryCapacityConstants = [
   { title: 4, id: 1, checked: false },
   { title: 8, id: 2, checked: false },
   { title: 16, id: 3, checked: false },
   { title: 32, id: 4, checked: false },
   { title: 64, id: 5, checked: false },
   { title: 128, id: 6, checked: false },
   { title: 256, id: 7, checked: false },
   { title: 512, id: 8, checked: false },
   { title: 1024, id: 9, checked: false },
]
export const simConstants = [
   { title: 1, id: 1, checked: false },
   { title: 2, id: 2, checked: false },
]

export const ProcessorsLaptop = [
   { title: 'INTEL_CORE_I3', id: 1, checked: false },
   { title: 'INTEL_CORE_I5', id: 2, checked: false },
   { title: 'INTEL_CORE_I7', id: 3, checked: false },
   { title: 'INTEL_CORE_I9', id: 4, checked: false },
   { title: 'INTEL_CELERON', id: 5, checked: false },
   { title: 'INTEL_PENTIUM', id: 6, checked: false },
   { title: 'AMD', id: 7, checked: false },
   { title: 'INTEL_QUAD_CORE', id: 8, checked: false },
   { title: 'INTEL_DUAL_CORE', id: 9, checked: false },
   { title: 'AMD_RYZEN_3_3250U', id: 10, checked: false },
   { title: 'INTEL_CORE_I7_8565U', id: 11, checked: false },
   { title: 'AMD_RYZEN_7_4700U', id: 12, checked: false },
]
export const screenResolutionLaptop = [
   { title: '1024x600', id: 1, checked: false },
   { title: '1280x800', id: 2, checked: false },
   { title: '1366x768', id: 3, checked: false },
   { title: '1600x900', id: 4, checked: false },
   { title: '1920x1080', id: 5, checked: false },
   { title: '2160x1440', id: 6, checked: false },
   { title: '2560x1600', id: 7, checked: false },
   { title: '3072x1920', id: 8, checked: false },
   { title: '3840x2160', id: 9, checked: false },
]

export const laptopVideoMemory = [
   { title: 2, id: 1, checked: false },
   { title: 4, id: 2, checked: false },
   { title: 6, id: 3, checked: false },
   { title: 8, id: 4, checked: false },
   { title: 16, id: 5, checked: false },
]

export const laptopPuproses = [
   { title: 'FOR_WORK', id: 1, checked: false },
   { title: 'MULTIMEDIA', id: 2, checked: false },
   { title: 'GAMING', id: 3, checked: false },
   { title: 'FOR_BUSINESS', id: 4, checked: false },
   { title: 'FOR_LEARNING', id: 5, checked: false },
   { title: 'OFFICE', id: 6, checked: false },
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
   { title: 'BLUETOOTH', id: 1, checked: false },
   { title: 'WIFI', id: 2, checked: false },
   { title: 'GPS', id: 3, checked: false },
   { title: 'NFC', id: 4, checked: false },
]

export const watchShapes = [
   { title: 'SQUARE', id: 1, checked: false },
   { title: 'ROUND', id: 2, checked: false },
   { title: 'OVAL', id: 3, checked: false },
   { title: 'RECTANGULAR', id: 4, checked: false },
]

export const watchMaterialBracelets = [
   { title: 'SILICONE', id: 1, checked: false },
   { title: 'LEATHER', id: 2, checked: false },
   { title: 'RUBBER', id: 3, checked: false },
   { title: 'PLASTIC', id: 4, checked: false },
   { title: 'NYLON', id: 5, checked: false },
   { title: 'IMITATION_LEATHER', id: 6, checked: false },
   { title: 'CERAMIC_IMITATION', id: 7, checked: false },
]

export const watchMaterialHousing = [
   { title: 'ACRYLIC', id: 1, checked: false },
   { title: 'ALUMINIUM', id: 2, checked: false },
   { title: 'CERAMIC', id: 3, checked: false },
   { title: 'PLASTIC', id: 4, checked: false },
   { title: 'METAL', id: 5, checked: false },
   { title: 'STAINLESS_STEEL', id: 6, checked: false },
   { title: 'GLASS', id: 7, checked: false },
]

export const watchFloor = [
   { title: 'UNI', id: 1, checked: false },
   { title: 'FEMALE', id: 2, checked: false },
   { title: 'MALE', id: 3, checked: false },
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

export const smartWaterProof = [
   { value: true, label: 'Да', id: 1 },
   { value: false, label: 'Нет', id: 2 },
]
