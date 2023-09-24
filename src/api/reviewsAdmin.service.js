import { axiosInstance } from '../config/axiosInstants'

export const getAllRatingCountRequest = () => {
   return axiosInstance.get('/reviews/all-ratings-info')
}
