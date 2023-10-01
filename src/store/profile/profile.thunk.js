import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserDataRequest } from '../../api/payment.service'
import { putUserInfoRequest } from '../../api/order.Servise'
import { postMailingListFileRequest } from '../../api/admin.goods.service'
import { getPhoneNumber } from '../auth/authThunk'

export const getUserInfo = createAsyncThunk(
   'profile/getUserInfo',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await getUserDataRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const putUserInfo = createAsyncThunk(
   'profile/putUserInfo',
   async (
      { snackbarHandler, data, toggleReadOnly, setFieldValue },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await putUserInfoRequest(data)
         dispatch(getUserInfo())
         dispatch(getPhoneNumber())
         snackbarHandler({ message: 'Вы успешно поменяли данные' })
         toggleReadOnly()
         setFieldValue('oldPassword', '')
         setFieldValue('newPassword', '')
      } catch (error) {
         console.log('error: ', error.response.data.message.slice(0, 16))
         if (error.response.data.message.slice(0, 16) === 'User with email:') {
            snackbarHandler({
               message: 'Пользователь с таким email уже существует! ',
               type: 'error',
            })
         }
         if (error.response.data.message === 'Wrong password!') {
            snackbarHandler({
               message: 'Неправильный пароль',
               type: 'error',
            })
         }
         if (error.response.data.message === 'Phone number already exists!') {
            snackbarHandler({
               message: 'Пользователь с таким номером телефона уже существует',
               type: 'error',
            })
         }
         rejectWithValue(error)
      }
   }
)
export const postS3FileProfile = createAsyncThunk(
   'adminGoods/postS3File',
   async ({ data, setFieldValue }, { rejectWithValue }) => {
      try {
         const response = await postMailingListFileRequest(data)
         setFieldValue('imageLink', response.data)
         return null
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
