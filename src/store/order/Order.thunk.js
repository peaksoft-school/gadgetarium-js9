import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   getFavoriteRequest,
   getOrderByIdRequest,
   getOrderInfoRequest,
} from '../../api/order.Servise'

export const orderRequest = createAsyncThunk(
   'order/orderRequest',
   async (_, { rejectWithValue }) => {
      try {
         const responce = await getOrderInfoRequest()
         console.log(responce.data)
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const favorireRequest = createAsyncThunk(
   'order/favorireRequest',
   async (_, { rejectWithValue }) => {
      try {
         const responce = await getFavoriteRequest()
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const orderByIdRequest = createAsyncThunk(
   'order/orderByIdRequest',
   async (params, { rejectWithValue }) => {
      try {
         const responce = await getOrderByIdRequest(params)
         console.log(responce.data)
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
