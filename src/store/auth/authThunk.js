import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signUp, signUpPhoneNumber } from '../../api/auth.service'
import {
   NUMBER_IMG,
   AUTH_KEY_LOCAL,
} from '../../utils/common/constants/globalConstants'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async (data, { rejectWithValue }) => {
      try {
         const response = await signIn(data)

         localStorage.setItem(AUTH_KEY_LOCAL, JSON.stringify(response.data))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const signUpRequest = createAsyncThunk(
   'auth/signUp',
   async (data, { rejectWithValue }) => {
      try {
         const response = await signUp(data)

         localStorage.setItem(AUTH_KEY_LOCAL, JSON.stringify(response.data))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getPhoneNumber = createAsyncThunk(
   'auth/getPhoneNumber',
   async (_, { rejectWithValue }) => {
      try {
         const response = await signUpPhoneNumber()
         localStorage.setItem(NUMBER_IMG, JSON.stringify(response.data))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const logOut = createAsyncThunk('admin/logOut', async () => {
   localStorage.removeItem(STORAGE_KEY)
})
