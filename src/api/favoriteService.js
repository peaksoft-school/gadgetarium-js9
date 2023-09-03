import { axiosInstance } from '../config/axiosInstants'

export const getFavoriteItemsRequest = () => {
   return axiosInstance.get('/v1/favorite')
}
export const deleteFavoriteItemsRequest = () => {
   return axiosInstance.delete('/v1/favorite')
}
export const postFavoriteItemRequest = (id) => {
   return axiosInstance.post(`/v1/favorite/${id}`)
}
