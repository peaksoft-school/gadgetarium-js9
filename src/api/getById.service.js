import { axiosInstance } from '../config/axiosInstants'

export const getByIdPhoneRequest = ({ productId, colour }) => {
   const encodedColour = encodeURIComponent(colour)
   if (colour) {
      return axiosInstance.get(
         `/v1/products/get-by-id?productId=${productId}&colour=${encodedColour}`
      )
   }
   return axiosInstance.get(`/v1/products/get-by-id?productId=${productId}`)
}
export const getReviwesProductRequest = (id) => {
   return axiosInstance.get(`/reviews?id=${id}`)
}
export const postReviewsProductRequest = (data) => {
   return axiosInstance.post('/reviews', data)
}

export const deleteReviewsProductRequest = (reviewId) => {
   return axiosInstance.delete(`/reviews/${reviewId}`)
}

export const putReviewsProductRequest = (data) => {
   return axiosInstance.put('/reviews/update-comment', data)
}

export const putAdminReviewsRequest = (data) => {
   return axiosInstance.put('/reviews', data)
}

export const postBasketCounterProductRequest = (data) => {
   console.log('data', data)
   return axiosInstance.post(
      `/v1/basket/add-sub-products-for-basket?subProductId=${data.subProductId}&quantity=${data.quantity}`
   )
}
