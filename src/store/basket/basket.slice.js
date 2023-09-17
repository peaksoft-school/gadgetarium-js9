import { createSlice } from '@reduxjs/toolkit'
import {
   addAllFavoriteGoods,
   deleteAllBasketGoods,
   deleteBasketById,
   getBasket,
   postBasketById,
} from './basket.thunk'

const initialState = {
   basket: {},
   basketResponses: [],
   isLoading: false,
   isCheckedAll: false,
   basketIdsArray: [],
}

export const basketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      checkedHandler: (state, action) => {
         const updatedBasketResponses = state.basketResponses.map((el) => {
            if (el.subProductId === action.payload) {
               return { ...el, isChecked: !el.isChecked }
            }
            return el
         })
         state.basketResponses = updatedBasketResponses
      },
      changeCheckedAll: (state) => {
         const array = []
         state.basketResponses.map((el) => {
            if (el.isChecked) {
               array.push(el.isChecked)
            }
            return el
         })
         if (array.length > 0) {
            return { ...state, isCheckedAll: true }
         }
         if (array.length === 0) {
            return { ...state, isCheckedAll: false }
         }
         return state
      },
      toggleCheckEverything: (state, action) => {
         const updatedBasketResponses = state.basketResponses.map((el) => {
            return { ...el, isChecked: action.payload }
         })
         state.basketResponses = updatedBasketResponses
      },
      onChangeBasketChecked: (state) => {
         const basketArray = []
         state.basketResponses.map((el) => {
            if (el.isChecked === true) {
               basketArray.push(el.subProductId)
            }
            return el
         })
         state.basketIdsArray = basketArray
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
      builder.addCase(postBasketById.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postBasketById.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postBasketById.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(addAllFavoriteGoods.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(addAllFavoriteGoods.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(addAllFavoriteGoods.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteAllBasketGoods.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(deleteAllBasketGoods.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteAllBasketGoods.fulfilled, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteBasketById.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(deleteBasketById.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(deleteBasketById.fulfilled, (state) => {
         state.isLoading = false
      })
   },
})

export const basketActions = basketSlice.actions
