import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   filterProductsByCategory,
   getCategoryRequest,
   getColors,
   getColorsTransformation,
   getSubCategoryRequest,
   getAllCategoryRequest,
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

export const getColorsTransformationFunction = createAsyncThunk(
   'get/getColorsTransformation',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getColorsTransformation(payload)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getColorsCatalog = createAsyncThunk(
   'get/getColorsCatalog',
   async (payload, { rejectWithValue, dispatch }) => {
      try {
         const response = await getColors(payload)
         dispatch(getColorsTransformationFunction(response.data))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

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
