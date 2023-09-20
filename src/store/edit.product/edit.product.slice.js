import { createSlice } from '@reduxjs/toolkit'
import { categoryProduct } from '../../utils/common/constants/constantsAdminAddNewProduct'

const initialState = {
   product: {
      categoryId: 0,
      subCategoryId: 0,
      brandId: 0,
      name: '',
      guarantee: 0,
      dateOfIssue: '2023-09-19',
      subProductRequests: [
         {
            codeColor: '',
            rom: 0,
            ram: 0,
            screenResolution: '',
            additionalFeatures: '',
            quantity: 0,
            images: [''],
            price: 0,
            processor: 'INTEL_CORE_I3',
            purpose: 'FOR_WORK',
            videoMemory: 0,
            screenSize: 0,
            sim: 0,
            diagonalScreen: '',
            batteryCapacity: '',
            anInterface: 'BLUETOOTH',
            hullShape: 'SQUARE',
            materialBracelet: 'SILICONE',
            housingMaterial: 'ACRYLIC',
            gender: 'MALE',
            waterproof: true,
            displayDiscount: 0,
         },
      ],
      videoLink: '',
      pdf: '',
      description: '',
   },
}

export const editProductSlice = createSlice({
   name: 'editProduct',
   initialState,
   reducers: {
      getCategoryId: (state, action) => {
         categoryProduct.category.map((el) => {
            if (el.name === action.payload) {
               state.product.categoryId = el.id
            }
            return el
         })
         state.product.subCategoryId = 0
      },
      getSubCategoryId: (state, action) => {
         if (state.product.categoryId === 1) {
            categoryProduct.subcategorySmartphones.map((el) => {
               if (el.name === action.payload) {
                  state.product.subCategoryId = el.id
               }
               return el
            })
         }
         if (state.product.categoryId === 2) {
            categoryProduct.subcategorySmartWatch.map((el) => {
               if (el.name === action.payload) {
                  state.product.subCategoryId = el.id
               }
               return el
            })
         }
         if (state.product.categoryId === 3) {
            categoryProduct.subcategoryNotebooks.map((el) => {
               if (el.name === action.payload) {
                  state.product.subCategoryId = el.id
               }
               return el
            })
         }
         if (state.product.categoryId === 4) {
            categoryProduct.subcategoryTablets.map((el) => {
               if (el.name === action.payload) {
                  state.product.subCategoryId = Number(el.id)
               }
               return el
            })
         }
      },
      getBrandId: (state, action) => {
         categoryProduct.brand.map((el) => {
            if (el.name === action.payload) {
               state.product.brandId = el.id
            }
            return el
         })
      },
      getProductName: (state, action) => {
         state.product.name = action.payload
      },
      getGuarantee: (state, action) => {
         state.product.guarantee = Number(action.payload)
      },
   },
})

export const editActions = editProductSlice.actions
