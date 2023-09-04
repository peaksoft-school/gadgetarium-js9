import { axiosInstance } from '../config/axiosInstants'

export const getOrderInfoRequest = () => {
   return axiosInstance.get('/v1/user/orders')
}
export const getFavoriteRequest = () => {
   return axiosInstance.get('/v1/user/favorites')
}
export const getOrderByIdRequest = (orderId) => {
   console.log('orderId', orderId)

   return axiosInstance.get(`/order/5`)
}
