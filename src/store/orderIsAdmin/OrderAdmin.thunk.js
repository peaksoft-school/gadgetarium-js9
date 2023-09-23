import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAdminOrderRequest } from '../../api/orderAdmin.service'

export const orderIsAdminThunk = createAsyncThunk(
   'orderAdmin/orderIsAdminThunk',
   async (_, { rejectWithValue }) => {
      try {
         const responce = await getAdminOrderRequest()
         console.log(responce.data)
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
