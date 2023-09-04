import { createSlice } from '@reduxjs/toolkit'
import { favorireRequest, orderRequest } from './Order.thunk'

const initialState = {
   productOrder: [],
   favorite: [],
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
   },
})
