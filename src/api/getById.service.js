import { axiosInstance } from '../config/axiosInstants'

export const getByIdPhoneRequest = (subProductId = 1) => {
   return axiosInstance.get(
      `/v1/products/get-by-id?subProductId=${subProductId}`
   )
}
export const getReviwesProductRequest = (id) => {
   return axiosInstance.get(`/reviews?id=${id}`)
}
export const postReviewsProductRequest = (data) => {
   return axiosInstance.post('/reviews', data)
}
