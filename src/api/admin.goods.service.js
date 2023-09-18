import { axiosInstance } from '../config/axiosInstants'

export const getAllFilteredProductsRequest = (params) => {
   return axiosInstance.get('/globalSearch/admin-search', { params })
}
