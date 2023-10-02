import { createSlice } from '@reduxjs/toolkit'
import { format } from 'date-fns'
import {
   getAllCategory,
   getBrandAll,
   getSubCategory,
   postAddProduct,
   postBrandImg,
   postFileImg,
   postFilePDF,
} from './addProduct.thunk'
import {
   categoryProduct,
   subProductDataCategory,
} from '../../utils/common/constants/constantsAdminAddNewProduct'

const initialState = {
   allCategory: [],
   subCategories: [],
   brandAll: [],
   pathPdf: '',
   resultAddProductData: [],
   isLoading: false,
   isError: '',
   isSuccessAddProduct: '',
   brandImg: '',

   initialStateAddProduct: {
      categoryId: 0,
      subCategoryId: 0,
      brandId: 0,
      guarantee: '',
      name: '',
      dateOfIssue: null,
      subProductRequests: [],
      videoLink: '',
      pdf: '',
      description: '',
   },

   newProduct: {
      categoryId: 0,
      subCategoryId: 0,
      brandId: 0,
      guarantee: '',
      name: '',
      dateOfIssue: null,
      subProductRequests: [],
      videoLink: '',
      pdf: '',
      description: '',
   },

   productSmartphone: {
      id: 1,
      codeColor: '',
      rom: '',
      ram: '',
      quantity: 0,
      sim: '',
      images: [],
      price: 0,
      valid: false,
   },

   productTablets: {
      id: 1,
      codeColor: '',
      screenResolution: '',
      screenSize: '',
      rom: '',
      quantity: 0,
      ram: '',
      diagonalScreen: '',
      batteryCapacity: '',
      images: [],
      price: 0,
      valid: false,
   },

   productWatch: {
      id: 1,
      rom: '',
      codeColor: '',
      materialBracelet: '',
      housingMaterial: '',
      display: '',
      gender: '',
      quantity: 0,
      waterproof: '',
      anInterface: '',
      hullShape: '',
      price: 0,
      images: [],
      valid: false,
   },

   productNotebooks: {
      id: 1,
      codeColor: '',
      processor: '',
      screenResolution: '',
      purpose: '',
      videoMemory: '',
      ram: '',
      quantity: 0,
      screenSize: '',
      images: [],
      price: 0,
      valid: false,
   },

   rowTableValidBool: [],
   transformedProduct: {},
}

export const addProductSlice = createSlice({
   name: 'addProduct',
   initialState,
   reducers: {
      // * newProduct

      closeNavigatePartOne(state) {
         return { ...state, newProduct: state.initialStateAddProduct }
      },

      collectorProductData(state, { payload }) {
         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               categoryId: payload.categoryId,
               brandId: payload.brandId,
               dateOfIssue: new Date(payload.dateOfIssue).toString(),
               guarantee: payload.guarantee,
               name: payload.name,
               subCategoryId: payload.subCategoryId,
            },
         }
      },

      deleteHandler(state, { payload }) {
         const resDelete = state?.newProduct?.subProductRequests.filter(
            (item) => item.id !== payload
         )

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: [...resDelete],
            },
         }
      },

      createNewProduct(state, { payload }) {
         const updatedProductData = [
            ...state.newProduct.subProductRequests,
            payload,
         ]

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: updatedProductData,
            },
         }
      },

      onChangeSubProduct(state, { payload }) {
         const { name, value, index } = payload

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: state?.newProduct?.subProductRequests?.map(
                  (subProduct, i) => {
                     if (i === index) {
                        return {
                           ...subProduct,
                           [name]: value,
                        }
                     }
                     return subProduct
                  }
               ),
            },
         }
      },

      filterCategorySubProduct(state) {
         const newData = {
            categoryId: state?.newProduct?.categoryId,
            subCategoryId: 0,
            brandId: 0,
            guarantee: '',
            name: '',
            dateOfIssue: null,
            subProductRequests: [],
         }

         let data

         if (state?.newProduct?.categoryId === 1) {
            data = [
               {
                  id: 0,
                  codeColor: '',
                  rom: '',
                  ram: '',
                  sim: '',
                  images: [],
                  quantity: 0,
                  price: 0,
                  valid: false,
               },
            ]

            return {
               ...state,
               newProduct: {
                  ...newData,
                  subProductRequests: data,
               },
            }
         }

         if (state.newProduct?.categoryId === 3) {
            data = [
               {
                  id: 0,
                  rom: '',
                  codeColor: '',
                  materialBracelet: '',
                  housingMaterial: '',
                  display: '',
                  gender: '',
                  waterproof: '',
                  anInterface: '',
                  hullShape: '',
                  quantity: 0,
                  price: 0,
                  images: [],
                  valid: false,
               },
            ]

            return {
               ...state,
               newProduct: {
                  ...newData,
                  subProductRequests: data,
               },
            }
         }

         if (state.newProduct?.categoryId === 2) {
            data = [
               {
                  id: 0,
                  codeColor: '',
                  processor: '',
                  screenResolution: '',
                  purpose: '',
                  videoMemory: '',
                  ram: '',
                  screenSize: '',
                  images: [],
                  quantity: 0,
                  price: 0,
                  valid: false,
               },
            ]

            return {
               ...state,
               newProduct: {
                  ...newData,
                  subProductRequests: data,
               },
            }
         }

         if (state.newProduct?.categoryId === 4) {
            data = [
               {
                  id: 0,
                  codeColor: '',
                  screenResolution: '',
                  screenSize: '',
                  rom: '',
                  ram: '',
                  diagonalScreen: '',
                  batteryCapacity: '',
                  images: [],
                  quantity: 0,
                  price: 0,
                  valid: false,
               },
            ]

            return {
               ...state,
               newProduct: {
                  ...newData,
                  subProductRequests: data,
               },
            }
         }

         return state.newProduct
      },

      addCodeColorSubProductRequests(state, { payload }) {
         const { index, color } = payload

         const updatedSubProductRequests =
            state?.newProduct?.subProductRequests?.map((subProduct, i) => {
               if (i === index) {
                  return {
                     ...subProduct,
                     codeColor: color,
                  }
               }
               return subProduct
            })

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: updatedSubProductRequests,
            },
         }
      },

      addPhotoSubProductRequests(state, { payload }) {
         const { index, photoData } = payload

         const updatedSubProductRequests =
            state?.newProduct?.subProductRequests?.map((subProduct, i) => {
               if (i === index) {
                  return {
                     ...subProduct,
                     images: photoData,
                  }
               }
               return subProduct
            })

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: updatedSubProductRequests,
            },
         }
      },

      collectorSmartphoneParameters(state) {
         return {
            ...state,
            productSmartphone: {
               id: state.productSmartphone.id + 1,
               codeColor: '',
               rom: '',
               ram: '',
               sim: '',
               images: [],
               price: 0,
               quantity: 0,
               valid: false,
            },
         }
      },

      // * productTablets

      collectorTabletsParameters(state) {
         return {
            ...state,
            productTablets: {
               id: state.productTablets.id + 1,
               codeColor: '',
               screenResolution: '',
               screenSize: '',
               rom: '',
               quantity: 0,
               ram: '',
               diagonalScreen: '',
               batteryCapacity: '',
               images: [],
               price: 0,
               valid: false,
            },
         }
      },

      // * productWatch

      collectorWatchParameters(state) {
         return {
            ...state,
            productWatch: {
               id: state.productWatch.id + 1,
               rom: '',
               codeColor: '',
               materialBracelet: '',
               housingMaterial: '',
               display: '',
               gender: '',
               quantity: 0,
               waterproof: '',
               anInterface: '',
               hullShape: '',
               price: 0,
               images: [],
               valid: false,
            },
         }
      },

      // * productNotebooks

      collectorNotebooksParameters(state) {
         return {
            ...state,
            productNotebooks: {
               id: state.productNotebooks.id + 1,
               codeColor: '',
               processor: '',
               screenResolution: '',
               purpose: '',
               videoMemory: '',
               ram: '',
               quantity: 0,
               screenSize: '',
               images: [],
               price: 0,
               valid: false,
            },
         }
      },

      // * AddProductPart - 2

      addAllPriceAndQuantity(state, { payload }) {
         const addPriceAndQuantity = state?.newProduct?.subProductRequests?.map(
            (item) => {
               return {
                  ...item,
                  price: +payload.price,
                  quantity: +payload.quantity,
               }
            }
         )

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: addPriceAndQuantity,
            },
         }
      },

      addAndEditPrice(state, { payload }) {
         const addPrice = state?.newProduct?.subProductRequests?.map((item) => {
            if (item.id === payload.id) {
               return {
                  ...item,
                  price: payload.price,
               }
            }

            return item
         })

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: addPrice,
            },
         }
      },

      addAndEditQuantity(state, { payload }) {
         const addPrice = state?.newProduct?.subProductRequests?.map((item) => {
            if (item.id === payload.id) {
               return {
                  ...item,
                  quantity: payload.quantity,
               }
            }

            return item
         })

         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: addPrice,
            },
         }
      },

      editNewProductAndReturnNewEditDataHandler(state, { payload }) {
         const { categoryId, subProductRequests, ...rest } = payload

         const formattedSubProducts = subProductRequests?.map((subProduct) => {
            let formattedSubProduct = {
               ...subProduct,
            }

            if (categoryId === 1) {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  rom: +subProduct.rom,
                  ram: +subProduct.ram,
                  quantity: +subProduct.quantity,
                  sim: +subProduct.sim,
                  price: +subProduct.price,
               }
            } else if (categoryId === 4) {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  screenSize: +subProduct.screenSize,
                  rom: +subProduct.rom,
                  ram: +subProduct.ram,
                  price: +subProduct.price,
                  quantity: +subProduct.quantity,
               }
            } else if (categoryId === 3) {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  rom: +subProduct.rom,
                  displayDiscount: +subProduct.display,
                  price: +subProduct.price,
                  quantity: +subProduct.quantity,
               }
            } else if (categoryId === 2) {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  videoMemory: +subProduct.videoMemory,
                  ram: +subProduct.ram,
                  screenSize: +subProduct.screenSize,
                  price: +subProduct.price,
                  quantity: +subProduct.quantity,
               }
            }

            return formattedSubProduct
         })

         const formattedDate = format(new Date(rest.dateOfIssue), 'yyyy-MM-dd')

         state.newProduct = {
            ...rest,
            dateOfIssue: formattedDate,
            categoryId,
            subProductRequests: formattedSubProducts,
         }

         state.transformedProduct = {
            ...rest,
            dateOfIssue: formattedDate,
            categoryId,
            subProductRequests: formattedSubProducts,
         }
      },

      // * AddProductPart - 3

      addDescriptionAndOverview(state, { payload }) {
         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               videoLink: payload.videoLink,
               pdf: payload.pdf,
               description: payload.description,
            },
         }
      },

      setRowValidation(state, { payload }) {
         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               subProductRequests: state.newProduct.subProductRequests.map(
                  (subProduct) => {
                     if (subProduct.id === payload.id) {
                        return {
                           ...subProduct,
                           valid: payload.bool,
                        }
                     }
                     return subProduct
                  }
               ),
            },
         }
      },

      rowTableValidBoolean(state) {
         return {
            ...state,
            rowTableValidBool: state.newProduct.subProductRequests.map(
               (item) => {
                  return item.valid
               }
            ),
         }
      },

      collectorFinishingProductData(state, { payload }) {
         return {
            ...state,
            resultAddProductData: {
               ...state.resultAddProductData,
               description: payload,
            },
         }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getAllCategory.fulfilled, (state, { payload }) => {
         const russianSelectData = payload?.map((item) => ({
            id: item.id,
            name: categoryProduct[item.title],
         }))

         state.allCategory = russianSelectData
      })
      builder.addCase(getSubCategory.fulfilled, (state, { payload }) => {
         const newSubCategoryData = payload?.map((item) => ({
            id: item.subCategoryId,
            name: subProductDataCategory[item.title],
         }))

         state.subCategories = newSubCategoryData
      })
      builder.addCase(getBrandAll.fulfilled, (state, { payload }) => {
         state.brandAll = payload
      })
      builder
         .addCase(postFilePDF.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postFilePDF.fulfilled, (state, { payload }) => {
            state.pathPdf = payload
            state.isLoading = false
         })
         .addCase(postFilePDF.rejected, (state) => {
            state.isLoading = false
         })
      builder
         .addCase(postFileImg.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postFileImg.fulfilled, (state, { payload }) => {
            const updatePayloadSubProductRequests =
               payload?.subProductRequests?.map((subProduct) => {
                  const { id, valid, ...rest } = subProduct
                  return rest
               })

            const updatePayload = {
               ...payload,
               subProductRequests: updatePayloadSubProductRequests,
            }

            state.resultAddProductData = updatePayload

            state.isLoading = false
         })
         .addCase(postFileImg.rejected, (state) => {
            state.isLoading = false
         })
      builder
         .addCase(postAddProduct.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postAddProduct.fulfilled, (state) => {
            state.isLoading = false

            state.isSuccessAddProduct = 'Товар успешно добавлен'
         })
         .addCase(postAddProduct.rejected, (state) => {
            state.isLoading = false
            state.isError = 'Что то произошло не так'
         })
         .addCase(postBrandImg.fulfilled, (state, { payload }) => {
            state.brandImg = payload
         })
   },
})

export const {
   filterCategorySubProduct,
   collectorProductData,
   deleteHandler,
   createNewProduct,
   onChangeSubProduct,

   collectorSmartphoneParameters,

   collectorTabletsParameters,

   collectorWatchParameters,

   collectorNotebooksParameters,

   addCodeColorSubProductRequests,
   addPhotoSubProductRequests,

   addAllPriceAndQuantity,
   addAndEditPrice,
   addAndEditQuantity,

   editNewProductAndReturnNewEditDataHandler,

   addDescriptionAndOverview,

   closeNavigatePartOne,

   setRowValidation,
   rowTableValidBoolean,

   collectorFinishingProductData,
} = addProductSlice.actions
