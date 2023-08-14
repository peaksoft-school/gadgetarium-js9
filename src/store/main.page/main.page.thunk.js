import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStockRequest } from '../../api/main.page.service'

export const getStock = createAsyncThunk(
   'mainPage/getStock',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getStockRequest()
         console.log(response)
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
