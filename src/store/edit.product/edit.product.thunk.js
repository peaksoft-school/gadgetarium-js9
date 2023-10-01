import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getAllCategoryRequest,
   getBrandAllRequest,
   getSubCategoryRequest,
   postFilePDFRequest,
} from '../../api/addProduct.service'
import {
   getProductToEditRequest,
   putProductRequest,
} from '../../api/admin.goods.service'

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
export const getProductToEdit = createAsyncThunk(
   'editProduct/getProductToEdit',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getProductToEditRequest(payload)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const putProduct = createAsyncThunk(
   'editProduct/putProduct',
   async (
      { product, subProductId, snackbarHandler, navigate },
      { rejectWithValue }
   ) => {
      try {
         await putProductRequest({ product, subProductId })
         snackbarHandler({ message: 'Товар успешно изменен' })
         navigate('/admin/goods')
      } catch (error) {
         snackbarHandler({ message: 'Товар не изменен', typeError })

         rejectWithValue(error)
      }
   }
)
