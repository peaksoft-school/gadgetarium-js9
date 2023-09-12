import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   filterProductsByCategory,
   getCategoryRequest,
   getColors,
} from '../../api/categoryServise'

export const getCategory = createAsyncThunk(
   'category/getCategory',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getCategoryRequest()
         const { data } = response
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const sendSelectedCategories = createAsyncThunk(
   'category/sendSelectedCategories',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await filterProductsByCategory(payload)
         const { data } = response
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getColorsCatalog = createAsyncThunk(
   'get/getColorsCatalog',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getColors(payload)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
