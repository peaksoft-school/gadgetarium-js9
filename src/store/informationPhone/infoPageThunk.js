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
import {
   getAllCategoryRequest,
   getSubCategoryRequest,
} from '../../api/addProduct.service'

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
         dispatch(getInfoPage(data.subProductId))
         onOpenSuccessModal()
         dispatch(getReviwesProduct(data.subProductId))
      } catch (error) {
         onOpenErrorModal(error.response.data.message)
         rejectWithValue(error.message)
      }
   }
)

export const getCatalogRequest = createAsyncThunk(
   'product/getCatalogRequest',
   async (_, { rejectWithValue }) => {
      try {
         const payload = await getAllCategoryRequest()
         return payload.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getSubCatalogRequest = createAsyncThunk(
   'product/getSubCatalogRequest',
   async (id, { rejectWithValue }) => {
      try {
         const payload = await getSubCategoryRequest(id)

         return payload.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteReviewsRequest = createAsyncThunk(
   'product/deleteReviewsRequest',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         await deleteReviewsProductRequest(id)
         dispatch(getInfoPage())
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
   async (data, { dispatch, rejectWithValue }) => {
      try {
         const response = await postAdminReviewsRequest(data)
         dispatch(getInfoPage())
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
         return rejectWithValue(error)
      }
   }
)

export const getDownloadPdfFiles = createAsyncThunk(
   'product/getDownloadPdfFiles',
   async (_, { rejectWithValue }) => {
      try {
         const responce = await getDownloadPdfFilesRequest()
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
