import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserDataRequest } from '../../api/payment.service'

export const getUserInfo = createAsyncThunk(
   'profileSlice/getUserInfo',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getUserDataRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
