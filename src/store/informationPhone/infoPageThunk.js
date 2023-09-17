import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteReviewsProductRequest,
   getByIdPhoneRequest,
   getReviwesProductRequest,
   postReviewsProductRequest,
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
         console.log(getPayload, 'putReviesRequest')
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
