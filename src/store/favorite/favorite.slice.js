import { createSlice } from '@reduxjs/toolkit'
import { getFavoriteItems } from './favorite.thunk'

const initialState = {
   favoriteItems: [],
   isLoading: false,
}

export const favoriteSlice = createSlice({
   name: 'favorite',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getFavoriteItems.fulfilled, (state, action) => {
         return { ...state, favoriteItems: action.payload, isLoading: true }
      })
      builder.addCase(getFavoriteItems.pending, (state) => {
         return { ...state, isLoading: false }
      })
      builder.addCase(getFavoriteItems.rejected, (state) => {
         return { ...state, isLoading: true }
      })
   },
})

export const favoriteActions = favoriteSlice.actions
