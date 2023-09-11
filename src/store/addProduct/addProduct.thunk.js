import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getAllCategoryRequest,
   getBrandAllRequest,
   getSubCategoryRequest,
   postAddProductRequest,
   postFileImgRequest,
   postFilePDFRequest,
} from '../../api/addProduct.service'

export const getAllCategory = createAsyncThunk(
   'get/getAllCategory',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getAllCategoryRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getSubCategory = createAsyncThunk(
   'get/getSubCategory',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getSubCategoryRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getBrandAll = createAsyncThunk(
   'get/getBrandAll',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getBrandAllRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postFilePDF = createAsyncThunk(
   'post/postFilePDF',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await postFilePDFRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postFileImg = createAsyncThunk(
   'post/postFileImg',
   async (newProduct, { rejectWithValue }) => {
      try {
         const updatedSubProductRequests = await Promise.all(
            newProduct.subProductRequests.map(async (subProduct) => {
               const updatedImages = await Promise.all(
                  subProduct.images.map(async (image) => {
                     try {
                        const response = await postFileImgRequest(image.imgObg)
                        return response.data
                     } catch (error) {
                        console.error('Error uploading image:', error)
                        return null
                     }
                  })
               )

               return {
                  ...subProduct,
                  images: updatedImages,
               }
            })
         )

         const updatedNewProduct = {
            ...newProduct,
            subProductRequests: updatedSubProductRequests,
         }

         return updatedNewProduct
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postAddProduct = createAsyncThunk(
   'post/postAddProduct',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await postAddProductRequest(payload.payloadOne)

         payload.payloadTwo({ message: 'Товар успешно добавлен' })

         payload.payloadThree('/')

         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)
