import * as Yup from 'yup'

export const schema = Yup.object().shape({
   lastName: Yup.string().required('Обязательное поле'),
   firstName: Yup.string().required('Обязательное поле'),
   email: Yup.string().required('Обязательное поле'),
   telephone: Yup.string().required('Обязательное поле'),
   address: Yup.string(),
})

export const breadcrumbs = [
   { path: '/', label: 'Главная' },
   {
      path: '/basket',
      label: 'Корзина',
   },
   { label: 'Оформление заказа' },
]

export const typeDelivery = {
   PICKUP: 'Самовызов',
   DELIVERY: 'Доставка',
}

export const typePaymentData = {
   CASH: 'Наличные',
   CARD_ONLINE: 'Картой онлайн',
   CARD_ON_RECEIPT: 'Картой при Получений',
}

export const getByIdBreadcrumbs = [
   { path: '/', label: 'Главная' },
   {
      path: '/category/Cмартфоны и Планшеты',
      label: 'Смартфоны',
   },
   {
      label: '',
   },
]
export const userOrdersBreadcrumbs = [
   { path: '/', label: 'Главная' },
   {
      label: 'Личный кабинет',
   },
   {
      label: '',
   },
]
