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
export const deleteOrderInfoRequest = (deleteAll) => {
   return axiosInstance.delete('/order/multi-delete', { data: deleteAll })
}

export const getOrderAdminRequest = () => {
   return axiosInstance.get('/order')
}
export const putUserInfoRequest = (payload) => {
   return axiosInstance.put(`/v1/user`, payload)
}
