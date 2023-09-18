import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserDataRequest } from '../../api/payment.service'

export const getUserData = createAsyncThunk(
   'get/getUserData',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getUserDataRequest()

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
