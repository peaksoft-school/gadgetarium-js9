import { createSlice } from '@reduxjs/toolkit'
import { format } from 'date-fns'

const initialState = {
   newProduct: {
      category: '',
      subcategory: '',
      brand: '',
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
   },

   transformedProduct: {},
}

export const addProductSlice = createSlice({
   name: 'addProduct',
   initialState,
   reducers: {
      // * newProduct

      collectorProductData(state, { payload }) {
         return {
            ...state,
            newProduct: {
               ...state.newProduct,
               category: payload.category,
               brand: payload.brand,
               dateOfIssue: new Date(payload.dateOfIssue).toString(),
               guarantee: payload.guarantee,
               name: payload.name,
               subcategory: payload.subcategory,
            },
         }
      },

      deleteHandler(state, { payload }) {
         const resDelete = state.newProduct.subProductRequests.filter(
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
               subProductRequests: state.newProduct.subProductRequests.map(
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
            category: state.newProduct.category,
            subcategory: '',
            brand: '',
            guarantee: '',
            name: '',
            dateOfIssue: null,
            subProductRequests: [],
         }

         let data

         if (state.newProduct.category === 'Смартфоны') {
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

         if (state.newProduct.category === 'Смарт-часы и браслеты') {
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

         if (state.newProduct.category === 'Ноутбуки') {
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

         if (state.newProduct.category === 'Планшеты') {
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
            state.newProduct.subProductRequests.map((subProduct, i) => {
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
            state.newProduct.subProductRequests.map((subProduct, i) => {
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
            },
         }
      },

      // * AddProductPart - 2

      addAllPriceAndQuantity(state, { payload }) {
         const addPriceAndQuantity = state.newProduct.subProductRequests.map(
            (item) => {
               return {
                  ...item,
                  price: payload.price,
                  quantity: payload.quantity,
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
         const addPrice = state.newProduct.subProductRequests.map((item) => {
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
         const addPrice = state.newProduct.subProductRequests.map((item) => {
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
         const { category, subProductRequests, ...rest } = payload

         const formattedSubProducts = subProductRequests.map((subProduct) => {
            const formattedImages = subProduct.images.map((image) => image.img)

            let formattedSubProduct = {
               ...subProduct,
               images: formattedImages,
            }

            if (category === 'Смартфоны') {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  rom: +subProduct.rom,
                  ram: +subProduct.ram,
                  quantity: +subProduct.quantity,
                  sim: +subProduct.sim,
               }
            } else if (category === 'Планшеты') {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  screenSize: +subProduct.screenSize,
                  rom: +subProduct.rom,
                  ram: +subProduct.ram,
               }
            } else if (category === 'Смарт-часы и браслеты') {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  rom: +subProduct.rom,
                  displayDiscount: +subProduct.display,
               }
            } else if (category === 'Ноутбуки') {
               formattedSubProduct = {
                  ...formattedSubProduct,
                  videoMemory: +subProduct.videoMemory,
                  ram: +subProduct.ram,
                  screenSize: +subProduct.screenSize,
               }
            }

            return formattedSubProduct
         })

         const formattedDate = format(new Date(rest.dateOfIssue), 'dd.MM.yyyy')

         state.newProduct = {
            ...rest,
            dateOfIssue: formattedDate,
            subProductRequests: formattedSubProducts,
         }

         state.transformedProduct = {
            ...rest,
            dateOfIssue: formattedDate,
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
} = addProductSlice.actions
