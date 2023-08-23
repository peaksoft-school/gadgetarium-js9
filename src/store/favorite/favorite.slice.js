import { createSlice } from '@reduxjs/toolkit'
import {
   deleteFavoriteItems,
   getFavoriteItems,
   postFavoriteItem,
} from './favorite.thunk'

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
      builder.addCase(deleteFavoriteItems.fulfilled, (state) => {
         return { ...state, isLoading: true }
      })
      builder.addCase(deleteFavoriteItems.pending, (state) => {
         return { ...state, isLoading: false }
      })
      builder.addCase(deleteFavoriteItems.rejected, (state) => {
         return { ...state, isLoading: true }
      })
      builder.addCase(postFavoriteItem.fulfilled, (state) => {
         return { ...state, isLoading: true }
      })
      builder.addCase(postFavoriteItem.pending, (state) => {
         return { ...state, isLoading: false }
      })
      builder.addCase(postFavoriteItem.rejected, (state) => {
         return { ...state, isLoading: true }
      })
   },
})

export const favoriteActions = favoriteSlice.actions
