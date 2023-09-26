import { createAsyncThunk } from '@reduxjs/toolkit'
import { getGlobalSearchRequest } from '../../api/mainPage.service'

export const getGlobalSearch = createAsyncThunk(
   'globalSearch/getGlobalSearch',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getGlobalSearchRequest(payload)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
