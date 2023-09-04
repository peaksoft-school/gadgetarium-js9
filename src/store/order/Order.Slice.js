import { createSlice } from '@reduxjs/toolkit'
import { favorireRequest, orderByIdRequest, orderRequest } from './Order.thunk'

const initialState = {
   productOrder: [],
   favorite: [],
   orderInfo: {},
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
         state.orderInfo = action.payload
      })
   },
})
