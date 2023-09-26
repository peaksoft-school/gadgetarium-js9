import { createSlice } from '@reduxjs/toolkit'
import { getUserInfo } from './profile.thunk'

const initialState = {
   user: {},
   isLoading: false,
}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getUserInfo.fulfilled, (state, action) => {
         state.user = action.payload
         state.isLoading = false
      })
      builder.addCase(getUserInfo.pending, (state) => {
         state.isLoading = false
      })
      builder.addCase(getUserInfo.rejected, (state) => {
         state.isLoading = false
      })
   },
})

export const profileActions = profileSlice.actions
