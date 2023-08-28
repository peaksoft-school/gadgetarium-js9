import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {},
})

export const basketActions = basketSlice.actions

export default basketSlice.reducer
