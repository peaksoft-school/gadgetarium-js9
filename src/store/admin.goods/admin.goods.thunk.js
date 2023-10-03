import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAllProductsRequest,
   deleteProductRequest,
   getAllFilteredProductsRequest,
   postBannersRequest,
   postDiscountRequest,
   postMailingListFileRequest,
   postMailingListRequest,
} from '../../api/admin.goods.service'

export const getAllFilteredProducts = createAsyncThunk(
   'adminGoods/getAllFilteredProducts',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getAllFilteredProductsRequest(payload)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const postS3File = createAsyncThunk(
   'adminGoods/postS3File',
   async (
      { data, field, handleFileChangeFromDrop, getSmartphonePhoto },
      { rejectWithValue }
   ) => {
      try {
         const response = await postMailingListFileRequest(data)
         if (field) {
            field.onChange(response.data)
         }
         if (handleFileChangeFromDrop) {
            handleFileChangeFromDrop(response.data)
         }
         if (getSmartphonePhoto) {
            getSmartphonePhoto(response.data)
         }

         return null
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const postMailingList = createAsyncThunk(
   'adminGoods/postMailingList',
   async ({ data, snackbarHandler }, { rejectWithValue }) => {
      try {
         await postMailingListRequest(data)
         snackbarHandler({ message: 'Успешно отправлена рассылка' })
      } catch (error) {
         snackbarHandler({ message: 'Рассылка не отправлена', type: 'error' })

         rejectWithValue(error)
      }
   }
)
export const postDiscount = createAsyncThunk(
   'adminGoods/postDiscount',
   async ({ data, snackbarHandler, onClick }, { rejectWithValue }) => {
      try {
         await postDiscountRequest(data)
         onClick()
         snackbarHandler({ message: 'Успешно установлена скидка' })
      } catch (error) {
         snackbarHandler({ message: 'Скидка не установлена', type: 'error' })

         rejectWithValue(error)
      }
   }
)
export const postBanners = createAsyncThunk(
   'adminGoods/postBanners',
   async ({ data, snackbarHandler }, { rejectWithValue }) => {
      try {
         await postBannersRequest(data)
         snackbarHandler({ message: 'Успешно загружены баннеры' })
      } catch (error) {
         snackbarHandler({ message: 'Баннеры не загружены', type: 'error' })

         rejectWithValue(error)
      }
   }
)
export const deleteProduct = createAsyncThunk(
   'adminGoods/deleteProduct',
   async ({ id, onClick }, { rejectWithValue }) => {
      try {
         await deleteProductRequest(id)
         onClick()
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const deleteAllProducts = createAsyncThunk(
   'adminGoods/deleteAllProducts',
   async (
      { checkedProducts, getAllFilteredProductsHandler },
      { rejectWithValue }
   ) => {
      try {
         await deleteAllProductsRequest(checkedProducts)
         getAllFilteredProductsHandler()
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
