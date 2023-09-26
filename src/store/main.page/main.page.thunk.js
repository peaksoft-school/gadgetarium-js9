import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   followMailRequest,
   getBannersRequest,
   getNoveltiesRequest,
   getRecommendRequest,
   getStockRequest,
} from '../../api/mainPage.service'

export const getStock = createAsyncThunk(
   'mainPage/getStock',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getStockRequest(payload.page, payload.pageSize)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getNovelities = createAsyncThunk(
   'mainPage/getNovelities',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getNoveltiesRequest(
            payload.page,
            payload.pageSize
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getRecommend = createAsyncThunk(
   'mainPage/getRecommend',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getRecommendRequest(
            payload.page,
            payload.pageSize
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getBanners = createAsyncThunk(
   'mainPage/getBanners',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getBannersRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const followMail = createAsyncThunk(
   'mainPage/getBanners',
   async ({ email, toggleMessageHandler }, { rejectWithValue }) => {
      try {
         const response = await followMailRequest(email)
         toggleMessageHandler(response.data.message)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
