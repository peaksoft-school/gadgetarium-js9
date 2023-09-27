import { axiosInstance } from '../config/axiosInstants'

export const getAdminOrderRequest = (data) => {
   return axiosInstance.get(`/order`, { params: data })
}

export const deleteAdminOrderRequest = (orderId) => {
   return axiosInstance.delete(`/order/single-delete/${orderId}`)
}

export const updateStatusRequest = (data) => {
   return axiosInstance.post(`/order/${data.orderId}?status=${data.status}`)
}

export const getOrderAdminByIdRequest = (orderId) => {
   return axiosInstance.get(`/order/${orderId}`)
}
