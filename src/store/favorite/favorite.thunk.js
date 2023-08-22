import { createAsyncThunk } from '@reduxjs/toolkit'
import { getFavoriteItemsRequest } from '../../api/favoriteService'

export const getFavoriteItems = createAsyncThunk(
   'favorite/getFavoriteItems',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getFavoriteItemsRequest()
         console.log(response, payload)
         return response.data
      } catch (error) {
         rejectWithValue(error)
      }
      return null
   }
)
