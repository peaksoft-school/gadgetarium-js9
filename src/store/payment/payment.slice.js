import { createSlice } from '@reduxjs/toolkit'
import { getUserData } from './payment.thunk'

const initialState = {
   isLoading: false,
   user: {},
   isError: '',
}

export const paymentSlice = createSlice({
   name: 'payment',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getUserData.fulfilled, (state, action) => {
         console.log('action.payload: ', action.payload)
         state.isLoading = false
         state.user = action.payload
      })
      builder.addCase(getUserData.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getUserData.rejected, (state, action) => {
         state.isLoading = false

         state.isError = action.payload
      })
   },
})

export const ActionsType = paymentSlice.actions
