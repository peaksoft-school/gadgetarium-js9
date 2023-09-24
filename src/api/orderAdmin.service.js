import { axiosInstance } from '../config/axiosInstants'

export const getAdminOrderRequest = (data) => {
   return axiosInstance.get(`/order`, { params: data })
}

export const deleteAdminOrderRequest = (orderId) => {
   return axiosInstance.delete(`/order/single-delete/${orderId}`)
}
