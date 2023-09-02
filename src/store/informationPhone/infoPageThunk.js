import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteReviewsRequest,
   getInfoPhoneRequest,
   postReviewsRequest,
} from '../../api/informationPage.service'

export const getInfoPage = createAsyncThunk(
   'infoPhone/getInfoPage',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getInfoPhoneRequest()
         console.log('response.data', response.data)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteReviewsPhone = createAsyncThunk(
   'infoPhone/deleteReviewsPhone',
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
   'infoPhone/postReviewsPhone',
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
