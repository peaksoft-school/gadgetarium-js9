import { createSlice } from '@reduxjs/toolkit'
import {
   categoryProduct,
   dataProductNotebooks,
   dataProductWatch,
   subProductDataCategory,
} from '../../utils/common/constants/constantsAdminAddNewProduct'
import {
   getAllCategory,
   getBrandAll,
   getProductToEdit,
   getSubCategory,
   postFilePDF,
} from './edit.product.thunk'

const initialState = {
   brandAll: [],
   allCategory: [],
   subCategories: [],
   getProduct: {},
   isAllChoosed: false,
   isAllPartTwoChoosed: false,
   isLoading: false,
   product: {
      categoryId: 0,
      subCategoryId: 0,
      brandId: 0,
      name: '',
      guarantee: '',
      dateOfIssue: '',
      subProductRequests: [
         {
            codeColor: '',
            rom: 0,
            ram: 0,
            screenResolution: '',
            additionalFeatures: '',
            quantity: 0,
            images: [],
            price: 0,
            processor: '',
            purpose: '',
            videoMemory: 0,
            screenSize: 0,
            sim: 0,
            diagonalScreen: '',
            batteryCapacity: '',
            anInterface: '',
            hullShape: '',
            materialBracelet: '',
            housingMaterial: '',
            gender: '',
            waterproof: false,
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
         const selectedCategoryName = action.payload

         const selectedCategory = state.allCategory.find(
            (el) => el.name === selectedCategoryName
         )

         if (selectedCategory) {
            state.product.categoryId = selectedCategory.id
         }
      },
      resetSubProductRequest: (state) => {
         state.product.subProductRequests = [
            {
               ...state.product.subProductRequests[0],
               rom: 0,
               ram: 0,
               screenResolution: null,
               additionalFeatures: null,
               quantity: 0,
               price: 0,
               processor: null,
               purpose: null,
               videoMemory: 0,
               screenSize: 0,
               sim: 0,
               diagonalScreen: null,
               batteryCapacity: null,
               materialBracelet: null,
               housingMaterial: null,
               displayDiscount: 0,
            },
         ]
      },
      getSubCategoryId: (state, action) => {
         state.subCategories.map((el) => {
            if (el.name === action.payload) {
               state.product.subCategoryId = el.id
            }
            return el
         })
      },
      getBrandId: (state, action) => {
         state.brandAll.map((el) => {
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
      getAllChoose: (state) => {
         const subRequest = state.product.subProductRequests[0]
         if (state.product.categoryId === 1) {
            if (
               subRequest.codeColor &&
               subRequest.rom !== 0 &&
               subRequest.ram !== 0 &&
               subRequest.sim !== 0
            ) {
               return { ...state, isAllChoosed: true }
            }
            return { ...state, isAllChoosed: false }
         }
         if (state.product.categoryId === 2) {
            if (
               subRequest.codeColor &&
               subRequest.ram !== 0 &&
               subRequest.processor &&
               subRequest.purpose &&
               subRequest.screenResolution &&
               subRequest.videoMemory !== 0 &&
               subRequest.screenSize !== 0
            ) {
               return { ...state, isAllChoosed: true }
            }
            return { ...state, isAllChoosed: false }
         }
         if (state.product.categoryId === 3) {
            if (
               subRequest.codeColor &&
               subRequest.rom !== 0 &&
               subRequest.materialBracelet &&
               subRequest.housingMaterial &&
               subRequest.displayDiscount &&
               subRequest.gender &&
               subRequest.anInterface &&
               subRequest.hullShape
            ) {
               return { ...state, isAllChoosed: true }
            }
            return { ...state, isAllChoosed: false }
         }
         if (state.product.categoryId === 4) {
            if (
               subRequest.codeColor &&
               subRequest.rom !== 0 &&
               subRequest.ram !== 0 &&
               subRequest.screenResolution &&
               subRequest.diagonalScreen &&
               subRequest.screenSize !== 0 &&
               subRequest.batteryCapacity
            ) {
               return { ...state, isAllChoosed: true }
            }
            return { ...state, isAllChoosed: false }
         }
         return state
      },
      getProductDate: (state, action) => {
         state.product.dateOfIssue = action.payload
      },
      onChangeSubProduct(state, { payload }) {
         const { name, value } = payload

         return {
            ...state,
            product: {
               ...state.product,
               subProductRequests: state.product.subProductRequests.map(
                  (subProduct) => {
                     return {
                        ...subProduct,
                        [name]: value,
                     }
                  }
               ),
            },
         }
      },
      onChangePartTwo: (state, action) => {
         state.isAllPartTwoChoosed = action.payload
      },
      onChangeSubProductNumber(state, { payload }) {
         const { name, value } = payload

         return {
            ...state,
            product: {
               ...state.product,
               subProductRequests: state.product.subProductRequests.map(
                  (subProduct) => {
                     return {
                        ...subProduct,
                        [name]: Number(value),
                     }
                  }
               ),
            },
         }
      },
      getColor: (state, action) => {
         state.product.subProductRequests[0].codeColor = action.payload
      },
      getProductPrice: (state, action) => {
         state.product.subProductRequests[0].price = action.payload
      },
      getProductQuantity: (state, action) => {
         state.product.subProductRequests[0].quantity = action.payload
      },
      getDescription: (state, action) => {
         state.product.description = action.payload
      },
      getVideoLink: (state, action) => {
         state.product.videoLink = action.payload
      },
      getProcessor: (state, action) => {
         dataProductNotebooks.processorNotebooks.map((el) => {
            if (el.name === action.payload) {
               state.product.subProductRequests[0].processor = el.id
            }
            return el
         })
      },
      getPurpose: (state, action) => {
         dataProductNotebooks.purposeNotebooks.map((el) => {
            if (el.name === action.payload) {
               state.product.subProductRequests[0].purpose = el.id
            }
            return el
         })
      },
      getHousingMaterial: (state, action) => {
         dataProductWatch.housingMaterial.map((el) => {
            if (el.name === action.payload) {
               state.product.subProductRequests[0].housingMaterial = el.id
            }
            return el
         })
      },
      getMaterialBracelet: (state, action) => {
         dataProductWatch.bracelet.map((el) => {
            if (el.name === action.payload) {
               state.product.subProductRequests[0].materialBracelet = el.id
            }
            return el
         })
      },
      addPhotoSubProductRequests(state, { payload }) {
         const updatedSubProductRequests = state.product.subProductRequests.map(
            (subProduct) => {
               return {
                  ...subProduct,
                  images: payload,
               }
            }
         )

         return {
            ...state,
            product: {
               ...state.product,
               subProductRequests: updatedSubProductRequests,
            },
         }
      },
      putProduct: (state) => {
         state.product.subProductRequests[0].images =
            state.product.subProductRequests[0].images.map((el) => {
               return el.img
            })
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getAllCategory.fulfilled, (state, { payload }) => {
         const russianSelectData = payload.map((item) => ({
            id: item.id,
            name: categoryProduct[item.title],
         }))
         state.isLoading = false
         state.allCategory = russianSelectData
      })
      builder.addCase(getAllCategory.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getAllCategory.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getSubCategory.fulfilled, (state, { payload }) => {
         const newSubCategoryData = payload.map((item) => ({
            id: item.subCategoryId,
            name: subProductDataCategory[item.title],
         }))
         state.isLoading = false
         state.subCategories = newSubCategoryData
      })
      builder.addCase(getSubCategory.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getSubCategory.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getBrandAll.fulfilled, (state, { payload }) => {
         state.brandAll = payload
         state.isLoading = false
      })
      builder.addCase(getBrandAll.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getBrandAll.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(getProductToEdit.fulfilled, (state, { payload }) => {
         const updatedImages = payload.images.map((el, index) => {
            return { id: index, img: el }
         })
         return {
            ...state,
            getProduct: payload,
            isLoading: false,
            product: {
               ...state.product,
               description: payload.productDescription,
               pdf: payload.productPdf,
               videoLink: payload.productVideoLink,
               subProductRequests: [
                  {
                     ...state.product.subProductRequests[0],
                     codeColor: payload.codeColor,
                     ram: payload.ram,
                     rom: payload.rom,
                     screenResolution: payload.screenResolution,
                     processor: payload.processor,
                     purpose: payload.purpose,
                     videoMemory: payload.videoMemory,
                     price: payload.price,
                     quantity: payload.quantity,
                     sim: payload.sim,
                     batteryCapacity: payload.batteryCapacity,
                     anInterface: payload.anInterface,
                     hullShape: payload.hullShape,
                     materialBracelet: payload.materialBracelet,
                     housingMaterial: payload.housingMaterial,
                     waterproof: payload.waterproof,
                     gender: payload.gender,
                     additionalFeatures: payload.additionalFeatures,
                     diagonalScreen: payload.diagonalScreen,
                     displayDiscount: payload.displayDiscount,
                     screenSize: payload.laptopScreenSize
                        ? payload.laptopScreenSize
                        : payload.phoneScreenSize,
                     images: updatedImages,
                  },
               ],
            },
         }
      })
      builder.addCase(getProductToEdit.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getProductToEdit.rejected, (state) => {
         state.isLoading = false
      })
      builder.addCase(postFilePDF.fulfilled, (state, action) => {
         state.product.pdf = action.payload
         state.isLoading = false
      })
      builder.addCase(postFilePDF.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postFilePDF.rejected, (state) => {
         state.isLoading = false
      })
   },
})

export const editActions = editProductSlice.actions
