import { createSlice } from '@reduxjs/toolkit'
import {
   memoryRamConstants,
   memoryCapacityConstants,
   simConstants,
} from '../../utils/common/constants/constants'
import {
   getCategory,
   getColorsCatalog,
   sendSelectedCategories,
} from './categoryThunk'

const initialState = {
   isLoading: false,

   itemsColors: [],
   items: [],
   filteredProducts: [],
   selectedCategories: [],
   brandsId: [],

   pageSize: 12,
   plusPageSize: 0,
   showMore: false,

   minValue: 0,
   maxValue: 250000,

   memory: [],
   memoryCapacity: memoryCapacityConstants,
   memoryRam: [],
   memoryRamArray: memoryRamConstants,
   simPhoneArray: [],
   simPhone: simConstants,
   allCate: true,
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

      memoryPhone: (state) => {
         const memory = []
         state.memoryCapacity.map((el) => {
            if (el.checked === true) {
               memory.push(el.title)
            }
            return el
         })
         return { ...state, memory }
      },
      changeMemory: (state, action) => {
         const updatedMemory = state.memoryCapacity.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.memoryCapacity = updatedMemory
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
         const resetMemory = state.memoryCapacity.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetMemoryRam = state.memoryRamArray.map((el) => ({
            ...el,
            checked: false,
         }))
         return {
            ...state,
            items: resetItems,
            memoryRamArray: resetMemoryRam,
            memoryCapacity: resetMemory,
            brandsId: [],
            selectedCategories: [],

            minValue: 0,
            maxValue: 250000,
            allCate: !state.allCate,
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

      setMinValue: (state, action) => {
         return { ...state, minValue: action.payload }
      },
      setMaxValue: (state, action) => {
         return { ...state, maxValue: action.payload }
      },
      changeAllCate: (state) => {
         return { ...state, allCate: true }
      },
      memoryRam: (state) => {
         const memoryRam = []
         state.memoryRamArray.map((el) => {
            if (el.checked === true) {
               memoryRam.push(el.title)
            }
            return el
         })
         return { ...state, memoryRam }
      },
      changeMemoryRam: (state, action) => {
         const updatedMemory = state.memoryRamArray.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.memoryRamArray = updatedMemory
      },
      simPhoneThunk: (state) => {
         const simPhoneArray = []
         state.simPhone.map((el) => {
            if (el.checked === true) {
               simPhoneArray.push(el.title)
            }
            return el
         })
         return { ...state, simPhoneArray }
      },
      changeSimPhone: (state, action) => {
         const updatedMemory = state.simPhone.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.simPhone = updatedMemory
      },
      // colors: (state) => {
      //    const itemsColors = []
      //    state.itemsColors.map((el) => {
      //       if (el.checked === true) {
      //          itemsColors.push(el.title)
      //       }
      //       return el
      //    })
      //    return { ...state, itemsColors }
      // },
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
         .addCase(getColorsCatalog.pending, (state) => {
            return { ...state, isLoading: true }
         })
         .addCase(getColorsCatalog.fulfilled, (state, action) => {
            return { ...state, itemsColors: action.payload }
         })
         .addCase(getColorsCatalog.rejected, (state) => {
            return { ...state, isLoading: false }
         })
   },
})
export const categoryActions = categorySlice.actions
