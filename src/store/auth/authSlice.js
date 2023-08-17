import { createSlice } from '@reduxjs/toolkit'
import {
   getPhoneNumber,
   logOut,
   signInRequest,
   signUpRequest,
} from './authThunk'
import { STORAGE_KEY } from '../../utils/common/constants/globalConstants'
import { USER_ROLE } from '../../utils/common/constants/routesConstants'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEY)
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
      }
   }
   return {
      isAuthorization: false,
      token: '',
      role: USER_ROLE.GUEST,
      error: '',
      number: '',
      img: '',
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
         })
         .addCase(signInRequest.fulfilled, (state, action) => {
            state.isAuthorization = true
            state.token = action.payload.token
            state.role = action.payload.role
         })
         .addCase(signInRequest.rejected, (state, action) => {
            state.error = action.payload.message
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
