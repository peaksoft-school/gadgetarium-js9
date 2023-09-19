import { axiosFileInstance } from '../config/axiosFileInstance'
import { axiosInstance } from '../config/axiosInstants'

export const getAllFilteredProductsRequest = (params) => {
   return axiosInstance.get('/globalSearch/admin-search', { params })
}
export const postMailingListFileRequest = (payload) => {
   return axiosFileInstance.post('/v1/files', payload)
}
export const postMailingListRequest = (payload) => {
   return axiosInstance.post('/v1/mailings/send', payload)
}
export const postDiscountRequest = (payload) => {
   return axiosInstance.post('/v1/discounts', payload)
}
export const postBannersRequest = (payload) => {
   return axiosInstance.post('/v1/banners', payload)
}
export const deleteProductRequest = (subProductId) => {
   return axiosInstance.delete(`/v1/products/single-delete/${subProductId}`)
}
export const deleteAllProductsRequest = (subProductIds) => {
   return axiosInstance.delete(`/v1/products/multi-delete`, {
      data: subProductIds,
   })
}
