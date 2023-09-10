import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteReviewsProductRequest,
   getByIdPhoneRequest,
   getReviwesProductRequest,
   postReviewsProductRequest,
} from '../../api/getById.service'

export const getInfoPage = createAsyncThunk(
   'phone/getInfoPage',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getByIdPhoneRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getReviwesProduct = createAsyncThunk(
   'phone/getReviwesProduct',
   async (id, { rejectWithValue }) => {
      try {
         const response = await getReviwesProductRequest(id)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postReviewsPhone = createAsyncThunk(
   'phone/postReviewsPhone',
   async (data, { dispatch, rejectWithValue }) => {
      try {
         await postReviewsProductRequest(data)
         dispatch(getInfoPage(data.subProductId))
         dispatch(getReviwesProduct(data.subProductId))
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const deleteReviewsPhone = createAsyncThunk(
   'phone/deleteReviewsPhone',
   async (reviewId, { rejectWithValue }) => {
      try {
         await deleteReviewsProductRequest(reviewId)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
