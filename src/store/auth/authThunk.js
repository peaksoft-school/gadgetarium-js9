import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signUp, signUpPhoneNumber } from '../../api/auth.service'
import {
   NUMBER_IMG,
   LOGIN_USER_KEY,
} from '../../utils/common/constants/globalConstants'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async ({ data, snackbarHandler }, { rejectWithValue }) => {
      try {
         const response = await signIn(data)
         localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response.data))

         snackbarHandler({
            message: 'Вход успешно выполнен',
            type: 'success',
         })
         return response.data
      } catch (error) {
         snackbarHandler({
            message:
               'Неправильный email или пароль. Пожалуйста, попробуйте еще раз.',
            type: 'error',
         })
         return rejectWithValue(error)
      }
   }
)

export const signUpRequest = createAsyncThunk(
   'auth/signUp',
   async ({ data, snackbarHandler }, { rejectWithValue }) => {
      try {
         const response = await signUp(data)

         localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response.data))
         return response.data
      } catch (error) {
         const updatedError = error.response.data.message.slice(0, 22)
         console.log(updatedError, 'updatedError')
         if (updatedError === 'User with phone number') {
            snackbarHandler({
               message: 'Пользователь с таким номером уже существует!',
               type: 'error',
            })
         } else if (updatedError === '[Wrong format phone nu') {
            snackbarHandler({
               message: 'Неправильный формат номера телефона!',
               type: 'error',
            })
         }
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
