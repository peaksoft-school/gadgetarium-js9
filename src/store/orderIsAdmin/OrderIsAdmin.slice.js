import { createSlice } from '@reduxjs/toolkit'
import { orderIsAdminThunk } from './OrderAdmin.thunk'

const initialState = {
   orderIsAdmin: [],
}

export const orderIsAdminSlice = createSlice({
   name: 'orderAdmin',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(orderIsAdminThunk.fulfilled, (state, action) => {
         state.orderIsAdmin = action.payload
      })
   },
})
