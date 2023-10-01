import { axiosInstance } from '../config/axiosInstants'

export const deleteAdminOrderRequest = (orderId) => {
   return axiosInstance.delete(`/order/single-delete/${orderId}`)
}

export const updateStatusRequest = (data) => {
   return axiosInstance.post(`/order/${data.orderId}?status=${data.status}`)
}

export const getOrderAdminByIdRequest = (orderId) => {
   return axiosInstance.get(`/order/${orderId}`)
}

export const getSearchUserOrdersRequest = (data) => {
   return axiosInstance.get(`/order/order-admin-search`, { params: data })
}

export const postChangeStatusRequest = (data) => {
   return axiosInstance.post(`/order/${data.orderId}?status=${data.status}`)
}
