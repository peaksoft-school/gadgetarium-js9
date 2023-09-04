import { createSlice } from '@reduxjs/toolkit'
import {
   deleteFavoriteItems,
   getFavoriteItems,
   postFavoriteItem,
} from './favorite.thunk'

const initialState = {
   favoriteItems: [],
   isLoadingFavorite: false,
}

export const favoriteSlice = createSlice({
   name: 'favorite',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getFavoriteItems.fulfilled, (state, action) => {
         return {
            ...state,
            favoriteItems: action.payload,
            isLoadingFavorite: false,
         }
      })
      builder.addCase(getFavoriteItems.pending, (state) => {
         return { ...state, isLoadingFavorite: true }
      })
      builder.addCase(getFavoriteItems.rejected, (state) => {
         return { ...state, isLoadingFavorite: false }
      })
      builder.addCase(deleteFavoriteItems.fulfilled, (state) => {
         return { ...state, isLoadingFavorite: false }
      })
      builder.addCase(deleteFavoriteItems.pending, (state) => {
         return { ...state, isLoadingFavorite: true }
      })
      builder.addCase(deleteFavoriteItems.rejected, (state) => {
         return { ...state, isLoadingFavorite: false }
      })
      builder.addCase(postFavoriteItem.fulfilled, (state) => {
         return { ...state, isLoadingFavorite: false }
      })
      builder.addCase(postFavoriteItem.pending, (state) => {
         return { ...state, isLoadingFavorite: true }
      })
      builder.addCase(postFavoriteItem.rejected, (state) => {
         return { ...state, isLoadingFavorite: false }
      })
   },
})

export const favoriteActions = favoriteSlice.actions
