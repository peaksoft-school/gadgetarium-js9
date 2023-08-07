import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signUp } from '../../api/authServise'
import { STORAGE_KEY } from '../../utils/common/constants/globalConstants'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async (data, { rejectWithValue }) => {
      try {
         const response = await signIn(data)

         localStorage.setItem(STORAGE_KEY, JSON.stringify(response.data))

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
         localStorage.setItem(STORAGE_KEY, JSON.stringify(response.data))

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const logOut = createAsyncThunk('admin/logOut', async () => {
   localStorage.removeItem(STORAGE_KEY)
})
