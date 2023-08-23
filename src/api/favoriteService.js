import { axiosInstance } from '../config/axiosInstants'

export const getFavoriteItemsRequest = () => {
   return axiosInstance.get('/api/v1/favorite')
}
export const deleteFavoriteItemsRequest = () => {
   return axiosInstance.get('/api/v1/favorite')
}
export const postFavoriteItemRequest = (id) => {
   return axiosInstance.post(`/api/v1/favorite/${id}`)
}
