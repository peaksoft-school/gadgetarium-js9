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
      return null
   }
)
export const deleteFavoriteItems = createAsyncThunk(
   'favorite/deleteFavoriteItems',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await deleteFavoriteItemsRequest()
         console.log(response)
      } catch (error) {
         rejectWithValue(error)
      }
      return null
   }
)
export const postFavoriteItem = createAsyncThunk(
   'favorite/postFavoriteItems',
   async (id, { rejectWithValue }) => {
      try {
         const response = await postFavoriteItemRequest(id)
         console.log(response)
      } catch (error) {
         rejectWithValue(error)
      }
      return null
   }
)
