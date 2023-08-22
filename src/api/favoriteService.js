import { axiosInstance } from '../config/axiosInstants'

export const getFavoriteItemsRequest = () => {
   return axiosInstance.get('/api/v1/favorite')
}
