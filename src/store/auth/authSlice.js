import { createSlice } from '@reduxjs/toolkit'
import { logOut, signInRequest, signUpRequest } from './authThunk'
import { STORAGE_KEY } from '../../utils/common/constants/globalConstants'
import { USER_ROLE } from '../../utils/common/constants/routesConstants'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEY)
   if (json) {
      const userData = JSON.parse(json)
      console.log('userData', userData)

      return {
         isAuthorization: true,
         token: userData.token,
         role: userData.role,
      }
   }

   return {
      isAuthorization: false,
      token: '',
      role: USER_ROLE.GUEST,
      error: '',
   }
}

const initialState = getInitialState()

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(signUpRequest.fulfilled, (state, actions) => {
            state.isAuthorization = true
            state.token = actions.payload.token
            state.role = actions.payload.role
         })
         .addCase(signInRequest.fulfilled, (state, action) => {
            console.log('payload: ', action.payload)

            state.isAuthorization = true
            state.token = action.payload.token
            state.role = action.payload.role
         })
         .addCase(signInRequest.rejected, (state, action) => {
            state.error = action.payload.message
         })
         .addCase(logOut.fulfilled, () => {
            return { ...initialState }
         })
   },
})
