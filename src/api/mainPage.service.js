import { axiosInstance } from '../config/axiosInstants'

export const getStockRequest = (page, pageSize) => {
   return axiosInstance.get(
      `/v1/products/discount?page=${page}&pageSize=${pageSize}`
   )
}
export const getNoveltiesRequest = (page, pageSize) => {
   return axiosInstance.get(
      `/v1/products/new?page=${page}&pageSize=${pageSize}`
   )
}
export const getRecommendRequest = (page, pageSize) => {
   return axiosInstance.get(
      `/v1/products/recommended?page=${page}&pageSize=${pageSize}`
   )
}

export const getBannersRequest = () => {
   return axiosInstance.get(`/v1/banners`)
}
export const getGlobalSearchRequest = (keyword) => {
   return axiosInstance.get(`/globalSearch?keyword=${keyword}`)
}
export const followMailRequest = (email) => {
   return axiosInstance.post(`/v1/mailings/follow?email=${email}`)
}
