import { createSlice } from '@reduxjs/toolkit'
import { getCategory, sendSelectedCategories } from './categoryThunk'

const initialState = {
   items: [],
   filteredProducts: [],
   selectedCategories: [],
   brandsId: [],
   isLoading: false,
   pageSize: 12,
   plusPageSize: 0,
   showMore: false,
}

export const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {
      addSelectedCategories: (state, action) => {
         if (
            state.selectedCategories.some((el) => el.id === action.payload.id)
         ) {
            return {
               ...state,
               selectedCategories: state.selectedCategories.filter(
                  (item) => item.name !== action.payload.name
               ),
            }
         }
         if (
            !state.selectedCategories.some((el) => el.id === action.payload.id)
         ) {
            return {
               ...state,
               selectedCategories: [
                  ...state.selectedCategories,
                  action.payload,
               ],
            }
         }
         return state
      },
      setPageSize: (state, action) => {
         return { ...state, pageSize: action.payload }
      },
      setPlusPageSize: (state, action) => {
         return { ...state, plusPageSize: state.plusPageSize + action.payload }
      },
      setShowMore: (state, action) => {
         return { ...state, showMore: action.payload }
      },
      toggleCheckedHandler: (state, action) => {
         const updatedItems = state.items.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         return { ...state, items: updatedItems }
      },
      addBrandsId: (state) => {
         const brandsId = []
         state.items.map((el) => {
            if (el.checked === true) {
               brandsId.push(el.id)
            }
            return el
         })
         return { ...state, brandsId }
      },
      deleteItem: (state, action) => {
         let brandsId
         state.items.map((el) => {
            if (el.id === action.payload) {
               brandsId = state.brandsId.filter((el) => el !== action.payload)
            }
            return el
         })
         const updatedItems = state.items.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: false }
            }
            return el
         })
         const updatedSelectedCategories = state.selectedCategories.filter(
            (el) => el.id !== action.payload
         )
         return {
            ...state,
            items: updatedItems,
            brandsId,
            selectedCategories: updatedSelectedCategories,
         }
      },
      resetChecked: (state) => {
         const resetItems = state.items.map((el) => ({
            ...el,
            checked: false,
         }))

         return {
            ...state,
            items: resetItems,
            brandsId: [],
            selectedCategories: [],
         }
      },
      resetItemById: (state, action) => {
         const resetItems = state.items.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: false }
            }
            return el
         })
         return { ...state, items: resetItems }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getCategory.pending, (state) => {
            return { ...state, isLoading: true }
         })
         .addCase(getCategory.fulfilled, (state, action) => {
            const updatedItems = action.payload.map((el) => {
               return { ...el, checked: false }
            })
            return { ...state, isLoading: false, items: updatedItems }
         })
         .addCase(getCategory.rejected, (state) => {
            return { ...state, isLoading: false }
         })
         .addCase(sendSelectedCategories.pending, (state) => {
            return { ...state, isLoading: true }
         })
         .addCase(sendSelectedCategories.fulfilled, (state, action) => {
            return {
               ...state,
               filteredProducts: action.payload.responseList,
               isLoading: false,
            }
         })
         .addCase(sendSelectedCategories.rejected, (state) => {
            return { ...state, isLoading: false }
         })
   },
})
export const categoryActions = categorySlice.actions
