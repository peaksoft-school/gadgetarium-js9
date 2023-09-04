import { createSlice } from '@reduxjs/toolkit'
import { getBasket } from './basket.thunk'

const initialState = {
   basket: {},
   basketResponses: [],
   isLoading: false,
   isCheckedAll: false,
}

export const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      checkedHandler: (state, action) => {
         const updatedBasketResponses = state.basketResponses.map((el) => {
            if (el.subProductId === action.payload) {
               state.isCheckedAll = !state.isCheckedAll
               return { ...el, isChecked: !el.isChecked }
            }
            return el
         })
         state.basketResponses = updatedBasketResponses
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getBasket.fulfilled, (state, action) => {
         state.basket = action.payload
         state.basketResponses = action.payload.basketResponses.map((el) => {
            return { ...el, isChecked: false }
         })
         state.isLoading = false
      })
      builder.addCase(getBasket.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getBasket.rejected, (state) => {
         state.isLoading = false
      })
   },
})

export const basketActions = basketSlice.actions
