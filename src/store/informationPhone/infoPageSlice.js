import { createSlice } from '@reduxjs/toolkit'
import {
   categoryProduct,
   subProductDataCategory,
} from '../../utils/common/constants/constantsAdminAddNewProduct'
import { getCatalogRequest, getSubCatalogRequest } from './infoPageThunk'

const initialState = {
   allCategory: [],
   subCategories: [],

   subCategoriesId: [],
}
export const infoPageSlice = createSlice({
   name: 'allCategory',
   initialState,
   reducers: {
      changeInfoPage: (state, action) => {
         return { ...state, subCategoriesId: action.payload.id }
      },
   },
   extraReducers: (builder) => {
      builder
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

export const infoPageActions = infoPageSlice.actions
