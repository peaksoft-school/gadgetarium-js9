import { createSlice } from '@reduxjs/toolkit'
import { getUserInfo, postS3FileProfile, putUserInfo } from './profile.thunk'

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
         state.isLoading = true
      })
      builder.addCase(getUserInfo.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(putUserInfo.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(putUserInfo.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(putUserInfo.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postS3FileProfile.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(postS3FileProfile.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postS3FileProfile.pending, (state) => {
         state.isLoading = true
      })
   },
})

export const profileActions = profileSlice.actions
