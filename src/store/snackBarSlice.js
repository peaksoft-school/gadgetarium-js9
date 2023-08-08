import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   open: false,
   message: '',
   severity: '',
}

export const SnackBarSlice = createSlice({
   name: 'snackbar',
   initialState,
   reducers: {
      doSuccess(state) {
         state.open = true
         state.message = 'Validation successful'
         state.severity = 'success'
      },
      doError(state) {
         state.open = true
         state.message = 'Something went wrong'
         state.severity = 'error'
      },
      closeSnackbar(state) {
         state.open = false
      },
   },
})

export const SnackBarActions = SnackBarSlice.actions
