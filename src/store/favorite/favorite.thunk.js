import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteFavoriteItemsRequest,
   getFavoriteItemsRequest,
   postFavoriteItemRequest,
} from '../../api/favoriteService'

export const getFavoriteItems = createAsyncThunk(
   'favorite/getFavoriteItems',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getFavoriteItemsRequest()
         return response.data
      } catch (error) {
         rejectWithValue(error)
      }
      return []
   }
)
export const deleteFavoriteItems = createAsyncThunk(
   'favorite/deleteFavoriteItems',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         await deleteFavoriteItemsRequest()
         dispatch(getFavoriteItems())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const postFavoriteItem = createAsyncThunk(
   'favorite/postFavoriteItems',
   async (id, { rejectWithValue }) => {
      try {
         await postFavoriteItemRequest(id)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
