import { axiosInstance } from '../config/axiosInstants'

export const getCompareRequest = (prodName) => {
   return axiosInstance.get(
      `/v1/products/compare-product?productName=${prodName}`
   )
}
export const getCountProductRequest = () => {
   return axiosInstance.get(`/v1/products/count/comparison`)
}
export const getAllCompareGoodsRequest = () => {
   return axiosInstance.get(`/v1/products/get-latest-comparison`)
}
export const postCompareProductRequest = (id, addOrDelete) => {
   return axiosInstance.post(
      `/v1/products/save-comparison?id=${id}&addOrDelete=${addOrDelete}`
   )
}
export const deleteAllListProductsRequest = (deleteAll) => {
   return axiosInstance.delete('/v1/products', { data: deleteAll })
}
