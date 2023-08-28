import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getCompareRequest,
   getCountProductRequest,
   postCompareProductRequest,
} from '../../api/compare.service'

export const getCompare = createAsyncThunk(
   'compare/getCompare',
   async (prodName, { rejectWithValue }) => {
      try {
         const response = await getCompareRequest(prodName)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getCountProduct = createAsyncThunk(
   'compare/getCountProduct',
   async (_, { rejectWithValue }) => {
      try {
         const response = await getCountProductRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postCompareProduct = createAsyncThunk(
   'compare/postCompareProduct',
   async ({ id, addOrDelete }, { rejectWithValue }) => {
      try {
         return await postCompareProductRequest(id, addOrDelete)
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
