import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   filterProductsByCategory,
   getCategoryRequest,
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
