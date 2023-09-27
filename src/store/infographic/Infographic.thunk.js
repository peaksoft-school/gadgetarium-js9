import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getInfographicDayRequest,
   getInfographicMonthRequest,
   getInfographicYearRequest,
} from '../../api/Infographic.service'

export const getInfoDayRequest = createAsyncThunk(
   'get/getInfoDay',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getInfographicDayRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getInfoMonthRequest = createAsyncThunk(
   'get/getInfoMonth',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getInfographicMonthRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getInfoYearRequest = createAsyncThunk(
   'get/getInfoYear',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getInfographicYearRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
