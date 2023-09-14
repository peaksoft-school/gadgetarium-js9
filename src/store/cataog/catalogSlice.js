import { createSlice } from '@reduxjs/toolkit'
// import { useParams } from 'react-router-dom'
import {
   memoryRamConstants,
   memoryCapacityConstants,
   simConstants,
   ProcessorsLaptop,
   screenResolutionLaptop,
   laptopPuproses,
   laptopScreenSize,
} from '../../utils/common/constants/constants'
import {
   getCategory,
   getColorsCatalog,
   sendSelectedCategories,
} from './categoryThunk'

// const params = useParams()
// console.log('params: ', params)
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

   processorArray: [],
   processor: ProcessorsLaptop,
   screenArray: [],
   screen: screenResolutionLaptop,
   puprosesArray: [],
   puproses: laptopPuproses,
   screenSizeArray: [],
   screenSize: laptopScreenSize,
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
               if (Object.values(params)[0] === 'Laptop') {
                  memoryRamConstants.push(
                     { title: 32, id: 6, checked: false },
                     { title: 36, id: 7, checked: false }
                  )
               }
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

      laptopProcessor: (state) => {
         const processorArray = []
         state.processor.map((el) => {
            if (el.checked === true) {
               processorArray.push(el.title)
            }
            return el
         })
         return { ...state, processorArray }
      },
      laptopChangeProcessor: (state, action) => {
         const updatedMemory = state.processor.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.processor = updatedMemory
      },

      laptopScreen: (state) => {
         const screenArray = []
         state.screen.map((el) => {
            if (el.checked === true) {
               screenArray.push(el.title)
            }
            return el
         })
         return { ...state, screenArray }
      },
      laptopChangeScreen: (state, action) => {
         const updatedMemory = state.screen.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.screen = updatedMemory
      },

      laptopPuproses: (state) => {
         const puprosesArray = []
         state.puproses.map((el) => {
            if (el.checked === true) {
               puprosesArray.push(el.title)
            }
            return el
         })
         return { ...state, puprosesArray }
      },
      laptopChangePuproses: (state, action) => {
         const updatedMemory = state.puproses.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.puproses = updatedMemory
      },

      laptopScreenSize: (state) => {
         const screenSizeArray = []
         state.screenSize.map((el) => {
            if (el.checked === true) {
               screenSizeArray.push(el.title)
            }
            return el
         })
         return { ...state, screenSizeArray }
      },
      laptopChangeScreenSize: (state, action) => {
         const updatedMemory = state.screenSize.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.screenSize = updatedMemory
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
