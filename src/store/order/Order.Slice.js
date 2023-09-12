import { createSlice } from '@reduxjs/toolkit'
import { favorireRequest, orderByIdRequest, orderRequest } from './order.thunk'

const initialState = {
   productOrder: [],
   favorite: [],
   orders: {},
   productsViewed: [],
   isLoading: false,
}

export const orderSlice = createSlice({
   name: 'order',
   initialState,
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
   },
})
