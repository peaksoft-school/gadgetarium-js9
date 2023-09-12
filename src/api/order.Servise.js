import { axiosInstance } from '../config/axiosInstants'

export const getOrderInfoRequest = () => {
   return axiosInstance.get('/v1/user/orders')
}
export const getFavoriteRequest = () => {
   return axiosInstance.get('/v1/user/favorites')
}
export const getOrderByIdRequest = (params) => {
   return axiosInstance.get(`/v1/user/user_order/${+params.orderId}`)
}

export const deleteOrderInfoRequest = (orderById) => {
   return axiosInstance.delete(`/order/single-delete/${orderById}`)
}
