import { axiosInstance } from '../config/axiosInstants'

export const getStockRequest = () => {
   return axiosInstance.get('/api/v1/products/discount')
}
