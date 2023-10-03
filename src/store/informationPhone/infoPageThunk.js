import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteReviewsProductRequest,
   deleteTableDetailProductRequest,
   getByIdPhoneRequest,
   getDownloadPdfFilesRequest,
   getProductDetailRequest,
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
   async ({ reviewId, snackbarHandler }, { rejectWithValue }) => {
      try {
         await deleteReviewsProductRequest(reviewId)
         snackbarHandler({
            message: 'Товар успешно удален!',
            type: 'success',
         })
      } catch (error) {
         snackbarHandler({
            message:
               'Вы не можете удалить комментарий, потому что администратор на него уже ответил!',
            type: 'error',
         })
         rejectWithValue(error)
      }
   }
)

export const putReviesRequest = createAsyncThunk(
   'product/putReviesRequest',
   async (
      { data, getPayload, subProductId, snackbarHandler },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await putReviewsProductRequest(data)
         dispatch(getInfoPage(getPayload))
         console.log('subProductId: ', subProductId)
         dispatch(getReviwesProduct(subProductId))
         return response.data
      } catch (error) {
         snackbarHandler({
            message:
               'Вы не можете редактировать комментарий, потому что администратор уже ответил на него!',
            type: 'error',
         })
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
         const response = await getDownloadPdfFilesRequest(productId)
         const url = window.URL.createObjectURL(new Blob([response.data]))
         const link = document.createElement('a')

         link.href = url
         link.setAttribute('download', 'file.pdf')
         document.body.appendChild(link)
         link.click()

         return response.data
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

export const getByIdProductDetail = createAsyncThunk(
   'product/getByIdProductDetail',
   async ({ productId, navigate }, { rejectWithValue }) => {
      try {
         const responce = await getProductDetailRequest(productId)
         if (responce.data.length === 0) {
            navigate('/admin/goods')
         }
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteIsCheckedProduct = createAsyncThunk(
   'product/deleteIsCheckedProduct',
   async (deleteIsCheck, { rejectWithValue }) => {
      try {
         await deleteTableDetailProductRequest(deleteIsCheck)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
