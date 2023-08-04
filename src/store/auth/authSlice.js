import { createSlice } from '@reduxjs/toolkit'
import { signInRequest, signUpRequest } from './authThunk'
import { STORAGE_KEY } from '../../utils/common/constants/globalConstants'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEY)
   if (json) {
      const userData = JSON.parse(json)

      return {
         isAuthorization: true,
         token: userData.data.token,

         user: {
            firstName: userData.data.user.firstName,
            lastName: userData.data.user.lastName,
            phone: userData.data.user.phone,
            gmail: userData.data.user.gmail,
            password: userData.data.user.password,
            confirmPassword: userData.data.user.confirmPassword,
            role: userData.data.user.role,
         },
      }
   }
   return {
      isAuthorization: false,
      token: '',
      user: {
         firstName: '',
         lastName: '',
         phone: '',
         gmail: '',
         password: '',
         confirmPassword: '',
         role: '',
      },
   }
}

const initialState = getInitialState()

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(signUpRequest.fulfilled, (state, actions) => {
            state.isAuthorization = true
            state.token = actions.payload.token
            state.role = actions.payload.role
         })
         .addCase(signInRequest.fulfilled, (state, actions) => {
            state.isAuthorization = true
            state.token = actions.payload.token
            state.role = actions.payload.role
         })
   },
})
