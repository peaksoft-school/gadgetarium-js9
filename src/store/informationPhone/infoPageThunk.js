import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getAllCategoryRequest,
   getSubCategoryRequest,
} from '../../api/categoryServise'

export const getCatalogRequest = createAsyncThunk(
   'product/getCatalogRequest',
   async (_, { rejectWithValue }) => {
      try {
         const payload = await getAllCategoryRequest()
         return payload.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getSubCatalogRequest = createAsyncThunk(
   'product/getSubCatalogRequest',
   async (id, { rejectWithValue }) => {
      try {
         const payload = await getSubCategoryRequest(id)

         return payload.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
