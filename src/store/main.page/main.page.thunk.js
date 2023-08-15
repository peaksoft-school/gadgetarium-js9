import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getNoveltiesRequest,
   getRecommendRequest,
   getStockRequest,
} from '../../api/main.page.service'

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
