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
   return axiosInstance.delete(`/reviews/delete-comment/${reviewId}`)
}

export const putReviewsProductRequest = (data) => {
   return axiosInstance.put('/reviews/update-comment', data)
}

export const postBasketCounterProductRequest = (data) => {
   return axiosInstance.post(
      `/v1/basket/add-sub-products-for-basket?subProductId=${data.subProductId}&quantity=${data.quantity}`
   )
}

export const getViewedProductRequest = () => {
   return axiosInstance.get('/v1/products/recently-viewed')
}

export const postAdminReviewsRequest = (data) => {
   return axiosInstance.post('/reviews/reply', data)
}

export const putAdminReviewsRequest = (data) => {
   return axiosInstance.put('/reviews', data)
}

export const getDownloadPdfFilesRequest = (productId) => {
   return axiosInstance.get(`/v1/products/downloadPdf/${productId}`, {
      responseType: 'blob',
   })
}

export const postViewedProductRequest = (subProductIdId) => {
   return axiosInstance.post(`/v1/products/get-product/${subProductIdId}`)
}

export const getProductDetailRequest = (productId) => {
   return axiosInstance.get(
      `/v1/products/product-details?productId=${productId}`
   )
}

export const deleteTableDetailProductRequest = (deleteIsCheck) => {
   return axiosInstance.delete(`/v1/products/multi-delete`, {
      data: deleteIsCheck,
   })
}
