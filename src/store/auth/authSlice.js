import { createSlice } from '@reduxjs/toolkit'
import {
   getPhoneNumber,
   logOut,
   signInRequest,
   signUpRequest,
} from './authThunk'
import { AUTH_KEY_LOCAL } from '../../utils/common/constants/globalConstants'
import { USER_ROLE } from '../../utils/common/constants/routesConstants'

const getInitialState = () => {
   const json = localStorage.getItem(AUTH_KEY_LOCAL)
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
            return {
               ...state,
               isAuthorization: true,
               token: action.payload.token,
               role: action.payload.role,
            }
         })
         .addCase(signInRequest.fulfilled, (state, action) => {
            return {
               ...state,
               isAuthorization: true,
               token: action.payload.token,
               role: action.payload.role,
            }
         })
         .addCase(signInRequest.rejected, (state, action) => {
            return { ...state, error: action.payload.message }
         })
         .addCase(getPhoneNumber.fulfilled, (state, action) => {
            const keys = Object.keys(action.payload)
            if (keys.length > 0) {
               const firstKey = keys[0]
               const secondKey = keys[1] || ''
               return {
                  ...state,
                  number: firstKey,
                  img: secondKey,
               }
            }

            return state
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
