import { axiosInstance } from '../config/axiosInstants'

export const postBasketByIdRequest = (id) => {
   return axiosInstance.post(`/v1/basket/${id}`)
}
export const getBasketRequest = () => {
   return axiosInstance.get(`/v1/basket`)
}
export const deleteAllBasketGoodsRequest = (basketArray) => {
   return axiosInstance.delete(`/v1/basket`, { data: basketArray })
}
export const deleteBasketByIdRequest = (id) => {
   return axiosInstance.delete(`/v1/basket/${id}`)
}
