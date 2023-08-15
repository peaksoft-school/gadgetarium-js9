import { axiosInstance } from '../config/axiosInstants'

export const getStockRequest = (page, pageSize) => {
   return axiosInstance.get(
      `/api/v1/products/discount?page=${page}&pageSize=${pageSize}`
   )
}
export const getNoveltiesRequest = (page, pageSize) => {
   return axiosInstance.get(
      `/api/v1/products/new?page=${page}&pageSize=${pageSize}`
   )
}
export const getRecommendRequest = (page, pageSize) => {
   return axiosInstance.get(
      `/api/v1/products/recommended?page=${page}&pageSize=${pageSize}`
   )
}
