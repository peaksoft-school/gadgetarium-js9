import { createSlice } from '@reduxjs/toolkit'
import {
   categoryProduct,
   subProductDataCategory,
} from '../../utils/common/constants/constantsAdminAddNewProduct'

import {
   memoryRamConstants,
   memoryCapacityConstants,
   simConstants,
   ProcessorsLaptop,
   screenResolutionLaptop,
   laptopPuproses,
   laptopScreenSize,
   watchInterfaces,
   watchShapes,
   watchMaterialBracelets,
   watchMaterialHousing,
   watchFloor,
   watchDisplayDiagonal,
   laptopVideoMemory,
   tabletBatteryCapacity,
   smartWaterProof,
} from '../../utils/common/constants/constants'
import {
   getCategory,
   getColorsCatalog,
   getColorsTransformationFunction,
   sendSelectedCategories,
   getCatalogRequest,
   getSubCatalogRequest,
} from './categoryThunk'

const initialState = {
   isLoading: false,

   itemsColorsTransformation: [],

   itemsColors: [],
   itemsColorsId: [],

   sort: '',

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
   videoMemoryArray: [],
   videoMemory: laptopVideoMemory,
   screenArray: [],
   screen: screenResolutionLaptop,
   puprosesArray: [],
   puproses: laptopPuproses,
   screenSizeArray: [],
   screenSize: laptopScreenSize,

   interfacesArray: [],
   interfaces: watchInterfaces,
   shapesArray: [],
   shapes: watchShapes,
   materialBraceletsArray: [],
   materialBracelets: watchMaterialBracelets,
   materialHousingArray: [],
   materialHousing: watchMaterialHousing,
   floorArray: [],
   floor: watchFloor,
   displayDiagonalArray: [],
   displayDiagonal: watchDisplayDiagonal,
   waterProofString: '',
   waterProof: smartWaterProof,

   tabletBatteryCapacityArray: [],
   tabletBattery: tabletBatteryCapacity,

   allCate: true,

   allCategory: [],
   subCategories: [],

   subCategoriesId: [],
}

export const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {
      changeInfoPage: (state, action) => {
         return { ...state, subCategoriesId: action.payload.id }
      },
      resetAll: (state) => {
         const update = state?.items?.map((el) => ({ ...el, checked: false }))
         return {
            ...state,
            items: update,
            itemsColorsId: [],
            selectedCategories: [],
            allCate: true,
            brandsId: [],
            sort: '',
            minValue: 0,
            maxValue: 250000,
            memory: [],
            memoryRam: [],
            simPhoneArray: [],
            processorArray: [],
            videoMemoryArray: [],
            screenArray: [],
            puprosesArray: [],
            screenSizeArray: [],
            interfacesArray: [],
            shapesArray: [],
            materialBraceletsArray: [],
            materialHousingArray: [],
            floorArray: [],
            displayDiagonalArray: [],
            tabletBatteryCapacityArray: [],
            subCategoriesId: [],
            waterProofString: '',
         }
      },
      sort: (state, action) => {
         return { ...state, sort: action.payload }
      },
      changeColor: (state, action) => {
         const updatedMemory = state.itemsColors?.map((el) => {
            if (el.codeColor === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })

         state.itemsColors = updatedMemory
      },
      colors: (state) => {
         const itemsColorsId = []
         state.itemsColors?.map((el) => {
            if (el.checked === true) {
               itemsColorsId.push(el.codeColor)
            }

            return el
         })
         state.itemsColorsId = itemsColorsId
      },
      addSelectedCategoriesTrue: (state, action) => {
         if (
            state.selectedCategories.some((el) => el.id === action.payload.id)
         ) {
            return state
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

      itemsCheckedHandler: (state, action) => {
         const updatedItems = state.items.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: true }
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
         const resetSim = state.simPhone.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetProcessor = state.processor.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetVideoMemory = state.videoMemory.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetScreen = state.screen.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetPuproses = state.puproses.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetScreenSize = state.screenSize.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetInterfaces = state.interfaces.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetShapes = state.shapes.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetMaterialBracelets = state.materialBracelets.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetMaterialHousing = state.materialHousing.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetFloor = state.floor.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetDisplayDiagonal = state.displayDiagonal.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetTabletBattery = state.tabletBattery.map((el) => ({
            ...el,
            checked: false,
         }))
         const resetWaterProof = state.waterProof.map((el) => ({
            ...el,
            checked: false,
         }))

         return {
            ...state,
            items: resetItems,
            waterProof: resetWaterProof,
            memoryRamArray: resetMemoryRam,
            memoryCapacity: resetMemory,
            simPhone: resetSim,
            processor: resetProcessor,
            screen: resetScreen,
            puproses: resetPuproses,
            screenSize: resetScreenSize,
            interfaces: resetInterfaces,
            shapes: resetShapes,
            materialBracelets: resetMaterialBracelets,
            materialHousing: resetMaterialHousing,
            floor: resetFloor,
            displayDiagonal: resetDisplayDiagonal,
            tabletBattery: resetTabletBattery,

            videoMemory: resetVideoMemory,

            itemsColorsId: [],
            selectedCategories: [],

            brandsId: [],

            allCate: false,
         }
      },

      setMinValue: (state, action) => {
         return { ...state, minValue: action.payload }
      },
      setMaxValue: (state, action) => {
         return { ...state, maxValue: action.payload }
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

      waterProof: (state, action) => {
         state.waterProofString = action.payload
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
      laptopVideoMemory: (state) => {
         const videoMemoryArray = []
         state.videoMemory.map((el) => {
            if (el.checked === true) {
               videoMemoryArray.push(el.title)
            }
            return el
         })
         return { ...state, videoMemoryArray }
      },
      laptopChangeVideoMemory: (state, action) => {
         const updatedMemory = state.videoMemory.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.videoMemory = updatedMemory
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

      watchInterfaces: (state) => {
         const interfacesArray = []
         state.interfaces.map((el) => {
            if (el.checked === true) {
               interfacesArray.push(el.title)
            }
            return el
         })
         return { ...state, interfacesArray }
      },
      changeInterfaces: (state, action) => {
         const updatedMemory = state.interfaces.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.interfaces = updatedMemory
      },
      watchShapes: (state) => {
         const shapesArray = []
         state.shapes.map((el) => {
            if (el.checked === true) {
               shapesArray.push(el.title)
            }
            return el
         })
         return { ...state, shapesArray }
      },
      changeShapes: (state, action) => {
         const updatedMemory = state.shapes.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.shapes = updatedMemory
      },
      watchMaterialBracelets: (state) => {
         const materialBraceletsArray = []
         state.materialBracelets.map((el) => {
            if (el.checked === true) {
               materialBraceletsArray.push(el.title)
            }
            return el
         })
         return { ...state, materialBraceletsArray }
      },
      changeMaterialBracelets: (state, action) => {
         const updatedMemory = state.materialBracelets.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.materialBracelets = updatedMemory
      },
      watchMaterialHousing: (state) => {
         const materialHousingArray = []
         state.materialHousing.map((el) => {
            if (el.checked === true) {
               materialHousingArray.push(el.title)
            }
            return el
         })
         return { ...state, materialHousingArray }
      },
      changeMaterialHousing: (state, action) => {
         const updatedMemory = state.materialHousing.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.materialHousing = updatedMemory
      },
      watchFloor: (state) => {
         const floorArray = []
         state.floor.map((el) => {
            if (el.checked === true) {
               floorArray.push(el.title)
            }
            return el
         })
         return { ...state, floorArray }
      },
      changeFloor: (state, action) => {
         const updatedMemory = state.floor.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.floor = updatedMemory
      },
      watchDisplayDiagonal: (state) => {
         const displayDiagonalArray = []
         state.displayDiagonal.map((el) => {
            if (el.checked === true) {
               displayDiagonalArray.push(el.title)
            }
            return el
         })
         return { ...state, displayDiagonalArray }
      },
      changeDisplayDiagonal: (state, action) => {
         const updatedMemory = state.displayDiagonal.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.displayDiagonal = updatedMemory
      },

      tabletBattery: (state) => {
         const tabletBatteryCapacityArray = []
         state.tabletBattery.map((el) => {
            if (el.checked === true) {
               tabletBatteryCapacityArray.push(el.title)
            }
            return el
         })
         return { ...state, tabletBatteryCapacityArray }
      },
      changeBattery: (state, action) => {
         const updatedMemory = state.tabletBattery.map((el) => {
            if (el.id === action.payload) {
               return { ...el, checked: !el.checked }
            }
            return el
         })
         state.tabletBattery = updatedMemory
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(getCategory.pending, (state) => {
            return { ...state, isLoading: true }
         })
         .addCase(getCategory.fulfilled, (state, action) => {
            if (state.items.length > 0) {
               return state
            }
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
               filteredProducts: action.payload,
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
            const itemsColors = action.payload.map((el) => {
               return { ...el, checked: false }
            })

            return { ...state, itemsColors }
         })
         .addCase(getColorsCatalog.rejected, (state) => {
            return { ...state, isLoading: false }
         })
         .addCase(
            getColorsTransformationFunction.fulfilled,
            (state, action) => {
               return { ...state, itemsColorsTransformation: action.payload }
            }
         )
         .addCase(getCatalogRequest.fulfilled, (state, action) => {
            const newSubCategoryData = action.payload?.map((item) => ({
               id: item.id,
               title: categoryProduct[item.title],
            }))

            state.allCategory = newSubCategoryData
         })
         .addCase(getSubCatalogRequest.fulfilled, (state, action) => {
            const newSubCategoryData = action.payload?.map((item) => ({
               id: item.subCategoryId,
               title: subProductDataCategory[item.title],
            }))

            state.subCategories = newSubCategoryData
         })
   },
})

export const categoryActions = categorySlice.actions
