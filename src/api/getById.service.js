import { axiosInstance } from '../config/axiosInstants'

export const getByIdPhoneRequest = (subProductId = 2) => {
   return axiosInstance.get(`/v1/products/get-by-id?productId=${subProductId}`)
}
export const getReviwesProductRequest = (id) => {
   return axiosInstance.get(`/reviews?id=${id}`)
}
export const postReviewsProductRequest = (data) => {
   return axiosInstance.post('/reviews', data)
}

export const deleteReviewsProductRequest = (reviewId = 1) => {
   return axiosInstance.delete(`/reviews/${reviewId}`)
}
