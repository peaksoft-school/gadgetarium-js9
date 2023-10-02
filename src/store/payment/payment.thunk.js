import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getUserDataRequest,
   postOrderUserDataRequest,
   postPaymentRequest,
} from '../../api/payment.service'
import { deleteAllBasketGoods } from '../basket/basket.thunk'

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

export const postOrderUserData = createAsyncThunk(
   'post/postOrderUserData',
   async (payload, { dispatch, rejectWithValue }) => {
      try {
         const response = await postOrderUserDataRequest(payload)

         dispatch(deleteAllBasketGoods(payload.subProductIds))

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postPayment = createAsyncThunk(
   'post/postPayment',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await postPaymentRequest(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
