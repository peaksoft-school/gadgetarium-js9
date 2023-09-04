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
      const keys = Object.keys(phoneNumber)
      const firstkey = keys[0]
      const secondKey = keys[1] || ''
      return {
         isAuthorization: true,
         token: userData.token,
         role: userData.role,
         number: firstkey,
         img: secondKey,
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
            state.isAuthorization = true
            state.token = action.payload.token
            state.role = action.payload.role
            state.isLoading = false
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
            const responce = action.payload
            const keys = Object.keys(responce)
            if (keys.length > 0) {
               const firstkey = keys[0]
               const secondKey = keys[1] || ''
               state.number = firstkey
               state.img = secondKey
            }
         })
         .addCase(logOut.fulfilled, (state) => {
            state.isAuthorization = false
            state.token = ''
            state.role = USER_ROLE.GUEST
            state.number = ''
            state.img = ''
         })
   },
})
