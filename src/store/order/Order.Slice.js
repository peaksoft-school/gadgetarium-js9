import { createSlice } from '@reduxjs/toolkit'
import {
   favorireRequest,
   getOrderById,
   orderByIdRequest,
   orderIsAdminThunk,
   orderRequest,
} from './Order.thunk'

const initialState = {
   productOrder: [],
   favorite: [],
   orders: {},
   productsViewed: [],
   isLoading: false,
   orderIsAdmin: [],
   orderAdminId: [],
}

export const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(orderRequest.fulfilled, (state, action) => {
         state.productOrder = action.payload
      })
      builder.addCase(favorireRequest.fulfilled, (state, action) => {
         state.favorite = action.payload
      })
      builder.addCase(orderByIdRequest.fulfilled, (state, action) => {
         state.orders = action.payload
         state.isLoading = false
      })
      builder.addCase(orderByIdRequest.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(orderByIdRequest.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(orderIsAdminThunk.fulfilled, (state, action) => {
         state.orderIsAdmin = action.payload
      })
      builder.addCase(getOrderById.fulfilled, (state, action) => {
         state.orderAdminId = action.payload
      })
   },
})
