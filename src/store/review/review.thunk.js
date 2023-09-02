import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getProductByIdRequest,
   getReviewsProductRequest,
   postReviewProductRequest,
} from '../../api/product.service'

export const getProductById = createAsyncThunk(
   'productById/getProductById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getProductByIdRequest(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getReviewsProduct = createAsyncThunk(
   'productById/getReviewsProduct',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getReviewsProductRequest(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const postReviewProduct = createAsyncThunk(
   'productById/postReviewProduct',
   async (data, { rejectWithValue, dispatch }) => {
      try {
         await postReviewProductRequest(data)
         dispatch(getProductById(data.subProductId))
         dispatch(getReviewsProduct(data.subProductId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
