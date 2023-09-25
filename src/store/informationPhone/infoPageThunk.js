import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteReviewsProductRequest,
   getByIdPhoneRequest,
   getDownloadPdfFilesRequest,
   getReviwesProductRequest,
   getViewedProductRequest,
   postAdminReviewsRequest,
   postReviewsProductRequest,
   postViewedProductRequest,
   putAdminReviewsRequest,
   putReviewsProductRequest,
} from '../../api/getById.service'

export const getInfoPage = createAsyncThunk(
   'product/getInfoPage',
   async ({ productId, colour }, { rejectWithValue }) => {
      try {
         const response = await getByIdPhoneRequest({ productId, colour })
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getReviwesProduct = createAsyncThunk(
   'product/getReviwesProduct',
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
   'product/postReviewsPhone',
   async (
      { data, onOpenSuccessModal, onOpenErrorModal },
      { dispatch, rejectWithValue }
   ) => {
      try {
         await postReviewsProductRequest(data)
         onOpenSuccessModal()
         dispatch(getReviwesProduct(data.subProductId))
      } catch (error) {
         onOpenErrorModal(error.response.data.message)
         rejectWithValue(error.message)
      }
   }
)

export const deleteReviewsRequest = createAsyncThunk(
   'product/deleteReviewsRequest',
   async (id, { rejectWithValue }) => {
      try {
         await deleteReviewsProductRequest(id)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const putReviesRequest = createAsyncThunk(
   'product/putReviesRequest',
   async ({ data, getPayload }, { rejectWithValue, dispatch }) => {
      try {
         const response = await putReviewsProductRequest(data)
         dispatch(getInfoPage(getPayload))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postReviewsAdminAnswer = createAsyncThunk(
   'product/putReviewsAdminAnswer',
   async (data, { rejectWithValue }) => {
      try {
         const response = await postAdminReviewsRequest(data)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const putReviewsAdminAnswer = createAsyncThunk(
   'product/putReviewsAdminAnswer',
   async (data, { rejectWithValue }) => {
      try {
         const responce = await putAdminReviewsRequest(data)
         return responce.data
      } catch (error) {
         return rejectWithValue(errorMessage)
      }
   }
)

export const getDownloadPdfFiles = createAsyncThunk(
   'product/getDownloadPdfFiles',
   async (productId, { rejectWithValue }) => {
      try {
         const responce = await getDownloadPdfFilesRequest(productId)
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getRecentlyViewedProduct = createAsyncThunk(
   'product/getRecentlyViewedProduct',
   async (_, { rejectWithValue }) => {
      try {
         const responce = await getViewedProductRequest()
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postRecentlyViewedProduct = createAsyncThunk(
   'product/postRecentlyViewedProduct',
   async (subProductId, { rejectWithValue }) => {
      try {
         await postViewedProductRequest(subProductId)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
