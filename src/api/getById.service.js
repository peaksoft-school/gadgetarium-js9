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
