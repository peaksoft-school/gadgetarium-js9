import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signUp, signUpPhoneNumber } from '../../api/authServise'
import {
   NUMBER_IMG,
   LOGIN_USER_KEY,
} from '../../utils/common/constants/globalConstants'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async (data, { rejectWithValue }) => {
      try {
         const response = await signIn(data)

         localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response.data))
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

         localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response.data))
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
   localStorage.removeItem(LOGIN_USER_KEY)
   localStorage.removeItem(NUMBER_IMG)
})
