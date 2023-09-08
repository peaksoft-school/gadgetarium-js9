import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getByIdPhoneRequest,
   getReviwesProductRequest,
} from '../../api/getById.service'

export const getInfoPage = createAsyncThunk(
   'phone/getInfoPage',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getByIdPhoneRequest()
         console.log('response.data', response.data)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteReviewsPhone = createAsyncThunk(
   'phone/deleteReviewsPhone',
   async (reviewId, { dispatch, rejectWithValue }) => {
      try {
         console.log(reviewId)
         await deleteReviewsRequest(reviewId)
         dispatch(getInfoPage())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const postReviewsPhone = createAsyncThunk(
   'phone/postReviewsPhone',
   async (data, { rejectWithValue }) => {
      console.log(data, 'LeaveYourFeedback')
      try {
         const response = await postReviewsRequest(data)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
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
