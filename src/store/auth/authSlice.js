import { createSlice } from '@reduxjs/toolkit'
import {
   getPhoneNumber,
   logOut,
   signInRequest,
   signUpRequest,
} from './authThunk'
import { LOGIN_USER_KEY } from '../../utils/common/constants/globalConstants'
import { USER_ROLE } from '../../utils/common/constants/routesConstants'

const getInitialState = () => {
   const json = localStorage.getItem(LOGIN_USER_KEY)
   const phoneNumberFromLocal = localStorage.getItem('NUMBER_IMG')
   const phoneNumber = phoneNumberFromLocal
      ? JSON.parse(phoneNumberFromLocal)
      : null
   if (json) {
      const userData = JSON.parse(json)
      const number = phoneNumber ? Object.keys(phoneNumber) : ''
      const img = phoneNumber ? Object.values(phoneNumber) : ''
      return {
         isAuthorization: true,
         token: userData.token,
         role: userData.role,
         number: number[0],
         img: img[0],
         isLoading: false,
      }
   }
   return {
      isAuthorization: false,
      token: '',
      role: USER_ROLE.GUEST,
      error: '',
      number: '',
      img: '',
      isLoading: false,
   }
}

const initialState = getInitialState()

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(signUpRequest.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthorization = true
            state.token = action.payload.token
            state.role = action.payload.role
         })
         .addCase(signUpRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(signUpRequest.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(signInRequest.fulfilled, (state, action) => {
            state.isAuthorization = true
            state.token = action.payload.token
            state.role = action.payload.role
            state.isLoading = false
         })
         .addCase(signInRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(signInRequest.rejected, (state, action) => {
            state.error = action.payload.message
            state.isLoading = false
         })
         .addCase(getPhoneNumber.fulfilled, (state, action) => {
            const number = action.payload ? Object.keys(action.payload) : ''
            const img = action.payload ? Object.values(action.payload) : ''
            return {
               ...state,
               number: number[0],
               img: img[0],
            }
         })
         .addCase(logOut.fulfilled, (state) => {
            return {
               ...state,
               isAuthorization: false,
               token: '',
               role: USER_ROLE.GUEST,
               number: '',
               img: '',
            }
         })
   },
})
