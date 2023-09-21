import { axiosInstance } from '../config/axiosInstants'

export const getUserDataRequest = () => {
   return axiosInstance.get(`/v1/user`)
}

export const postOrderUserDataRequest = (data) => {
   return axiosInstance.post(`/order`, data)
}

export const postPaymentRequest = (data) => {
   return axiosInstance.post(`/v1/payment`, data)
}
