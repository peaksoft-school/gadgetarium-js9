import { axiosFileInstance } from '../config/axiosFileInstance'
import { axiosInstance } from '../config/axiosInstants'

export const getAllCategoryRequest = () => {
   return axiosInstance.get('/v1/category')
}

export const getSubCategoryRequest = (id) => {
   return axiosInstance.get(`/v1/category/get-sub-categories?categoryId=${id}`)
}

export const getBrandAllRequest = () => {
   return axiosInstance.get('/v1/brand/get-all')
}

export const postBrandRequest = (data) => {
   return axiosInstance.post('/v1/brand/save', data)
}

export const postFileImgRequest = (imgData) => {
   const file = {
      file: imgData,
   }

   return axiosFileInstance.post('/v1/files', file)
}

export const postFilePDFRequest = (pdfData) => {
   const file = {
      file: pdfData,
   }

   return axiosFileInstance.post('/v1/files', file)
}

export const postAddProductRequest = (data) => {
   return axiosInstance.post('/v1/products', data)
}
