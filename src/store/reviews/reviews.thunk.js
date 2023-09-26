import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteReviewsIdRequest,
   getAllReviewsRequest,
   getAnsweredReviewsRequest,
   getUnansweredReviewsRequest,
   postAdminReplyCommentsReviewsRequest,
   putEditAnswerReviewsRequest,
   updateViewReviewsIdRequest,
} from '../../api/reviewsAdmin.service'

export const getAllReviews = createAsyncThunk(
   'get/getAllReviews',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getAllReviewsRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getUnansweredReviews = createAsyncThunk(
   'get/getUnansweredReviews',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getUnansweredReviewsRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAnsweredReviews = createAsyncThunk(
   'get/getAnsweredReviews',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getAnsweredReviewsRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const putEditAnswerReviews = createAsyncThunk(
   'put/putEditAnswerReviews',
   async (payload, { dispatch, rejectWithValue }) => {
      try {
         const response = await putEditAnswerReviewsRequest(payload)

         dispatch(getAllReviews(4))
         dispatch(getUnansweredReviews(4))
         dispatch(getAnsweredReviews(4))

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteReviewsId = createAsyncThunk(
   'delete/deleteReviewsId',
   async (payload, { dispatch, rejectWithValue }) => {
      try {
         const response = await deleteReviewsIdRequest(payload)

         dispatch(getAllReviews(4))
         dispatch(getUnansweredReviews(4))
         dispatch(getAnsweredReviews(4))

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const updateViewReviewsId = createAsyncThunk(
   'put/updateViewReviewsId',
   async (payload, { dispatch, rejectWithValue }) => {
      try {
         const response = await updateViewReviewsIdRequest(payload)

         dispatch(getAllReviews(4))
         dispatch(getUnansweredReviews(4))
         dispatch(getAnsweredReviews(4))

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postAdminReplyCommentsReviews = createAsyncThunk(
   'post/postAdminReplyCommentsReviews',
   async (payload, { dispatch, rejectWithValue }) => {
      try {
         const response = await postAdminReplyCommentsReviewsRequest(payload)

         dispatch(getAllReviews(4))
         dispatch(getUnansweredReviews(4))
         dispatch(getAnsweredReviews(4))

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
