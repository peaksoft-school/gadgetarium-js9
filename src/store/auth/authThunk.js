import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signUp } from '../../api/authServise'
import { STORAGE_KEY } from '../../utils/common/constants/globalConstants'

export const signInRequest = createAsyncThunk(
   'auth/signInRequest',
   async (data, { rejectWithValue }) => {
      try {
         const response = await signIn(data)
         console.log(response)
         localStorage.setItem(STORAGE_KEY, JSON.stringify(response.data))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const signUpRequest = createAsyncThunk(
   'auth/signUpRequest',
   async (data, { rejectWithValue }) => {
      try {
         const response = await signUp(data)
         console.log(response)
         localStorage.setItem(STORAGE_KEY, JSON.stringify(response.data))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
