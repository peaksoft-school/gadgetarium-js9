import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signUp, signUpPhoneNumber } from '../../api/authServise'
import {
   NUMBER_IMG,
   LOGIN_USER_KEY,
} from '../../utils/common/constants/globalConstants'
import { getFavoriteItems } from '../favorite/favorite.thunk'
import {
   getNovelities,
   getRecommend,
   getStock,
} from '../main.page/main.page.thunk'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async ({ data, snackbarHandler }, { rejectWithValue, dispatch }) => {
      try {
         const response = await signIn(data)
         localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response.data))
         dispatch(getNovelities({ page: 1, pageSize: 5 }))
         dispatch(getRecommend({ page: 1, pageSize: 5 }))
         dispatch(getStock({ page: 1, pageSize: 5 }))
         dispatch(getFavoriteItems())
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
