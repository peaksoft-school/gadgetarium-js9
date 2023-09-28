import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserDataRequest } from '../../api/payment.service'
import { putUserInfoRequest } from '../../api/order.Servise'

export const getUserInfo = createAsyncThunk(
   'profile/getUserInfo',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getUserDataRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const putUserInfo = createAsyncThunk(
   'profile/putUserInfo',
   async (payload, { rejectWithValue, dispatch }) => {
      try {
         await putUserInfoRequest(payload)
         dispatch(getUserInfo())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
