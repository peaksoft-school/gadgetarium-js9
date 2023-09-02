import { axiosInstance } from '../config/axiosInstants'

export const getProductByIdRequest = (id) => {
   return axiosInstance.get(`/v1/products/get-by-id?subProductId=${id}`)
}
export const getReviewsProductRequest = (id) => {
   return axiosInstance.get(`/reviews?id=${id}`)
}
export const postReviewProductRequest = (data) => {
   return axiosInstance.post(`/reviews`, data)
}
