import { axiosInstance } from '../config/axiosInstants'

export const getAdminOrderRequest = (data) => {
   return axiosInstance.get(`/order`, { params: data })
}
