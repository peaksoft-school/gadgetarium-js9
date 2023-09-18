import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllFilteredProductsRequest } from '../../api/admin.goods.service'

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
