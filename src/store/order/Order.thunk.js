import { createAsyncThunk } from '@reduxjs/toolkit'

import {
   deleteOrderInfoRequest,
   getFavoriteRequest,
   getOrderByIdRequest,
   getOrderInfoRequest,
} from '../../api/order.Servise'
import {
   deleteAdminOrderRequest,
   getAdminOrderRequest,
} from '../../api/orderAdmin.service'

export const orderRequest = createAsyncThunk(
   'order/orderRequest',
   async (_, { rejectWithValue }) => {
      try {
         const responce = await getOrderInfoRequest()
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

         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteOrderRequest = createAsyncThunk(
   'order/deleteOrderRequest',
   async (orderById, { dispatch, rejectWithValue }) => {
      try {
         await deleteOrderInfoRequest(orderById)

         dispatch(orderRequest())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const orderIsAdminThunk = createAsyncThunk(
   'order/orderIsAdminThunk',
   async (data, { rejectWithValue }) => {
      try {
         const responce = await getAdminOrderRequest(data)
         return responce.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteIsAdminThunk = createAsyncThunk(
   'order/deleteIsAdminThunk',
   async (orderId, { rejectWithValue }) => {
      try {
         await deleteAdminOrderRequest(orderId)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
