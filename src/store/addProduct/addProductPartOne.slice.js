import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   newProduct: {
      category: '',
      subcategory: '',
      brand: '',
      guarantee: '',
      name: '',
      dateOfIssue: null,
      subProductRequests: [],
   },

   productSmartphone: {
      id: 1,
      codeColor: '',
      rom: '',
      ram: '',
      quantity: '',
      sim: '',
      images: [],
      price: '',
   },

   productTablets: {
      id: 1,
      codeColor: '',
      screenResolution: '',
      screenSize: '',
      rom: '',
      quantity: '',
      ram: '',
      diagonalScreen: '',
      batteryCapacity: '',
      images: [],
      price: '',
   },

   productWatch: {
      id: 1,
      rom: '',
      codeColor: '',
      materialBracelet: '',
      housingMaterial: '',
      display: '',
      gender: '',
      quantity: '',
      waterproof: '',
      anInterface: '',
      hullShape: '',
      price: '',
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
      quantity: '',
      screenSize: '',
      images: [],
      price: '',
   },

   resultProductPartOneData: null,
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
                  quantity: '',
                  price: '',
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
                  quantity: '',
                  price: '',
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
                  quantity: '',
                  price: '',
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
                  quantity: '',
                  price: '',
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

      furtherCollectorProductPartOne(state, { payload }) {
         const updatedSubProductRequests =
            state.newProduct.subProductRequests.map((item) => {
               const resImg = item.images.map((imageItem) => imageItem.img)
               let updatedItem = {}

               if (state.newProduct.category === 'Смартфон') {
                  updatedItem = {
                     codeColor: item.codeColor,
                     rom: +item.rom,
                     ram: +item.ram,
                     quantity: +item.quantity,
                     sim: +item.sim,
                     images: resImg,
                     price: +item.price,
                  }

                  return updatedItem
               }
               if (state.newProduct.category === 'Ноутбук') {
                  updatedItem = {
                     codeColor: item.codeColor,
                     processor: item.processor,
                     screenResolution: item.screenResolution,
                     purpose: item.purpose,
                     videoMemory: item.videoMemory,
                     ram: +item.ram,
                     quantity: +item.quantity,
                     screenSize: +item.screenSize,
                     images: resImg,
                     price: +item.price,
                  }

                  return updatedItem
               }

               if (state.newProduct.category === 'Смарт-часы и браслеты') {
                  updatedItem = {
                     codeColor: item.codeColor,
                     quantity: +item.quantity,
                     images: resImg,
                     price: +item.price,
                     rom: +item.rom,
                     materialBracelet: item.materialBracelet,
                     housingMaterial: item.housingMaterial,
                     display: item.display,
                     gender: item.gender,
                     waterproof: item.waterproof,
                     anInterface: item.anInterface,
                     hullShape: item.hullShape,
                  }

                  return updatedItem
               }

               if (state.newProduct.category === 'Планшеты') {
                  updatedItem = {
                     codeColor: item.codeColor,
                     screenResolution: item.screenResolution,
                     ram: +item.ram,
                     quantity: +item.quantity,
                     screenSize: +item.screenSize,
                     images: resImg,
                     price: +item.price,
                     rom: +item.rom,
                     diagonalScreen: item.diagonalScreen,
                     batteryCapacity: item.batteryCapacity,
                  }

                  return updatedItem
               }
               return updatedItem
            })

         console.log('updatedSubProductRequests: ', updatedSubProductRequests)

         return {
            ...state,
            resultProductPartOneData: {
               dateOfIssue: payload.date,
               category: state.newProduct.category,
               subcategory: state.newProduct.subcategory,
               brand: state.newProduct.brand,
               guarantee: state.newProduct.guarantee,
               name: state.newProduct.name,
               subProductRequests: updatedSubProductRequests,
            },
         }
      },

      // * productSmartphone

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
               quantity: '',
               ram: '',
               diagonalScreen: '',
               batteryCapacity: '',
               images: [],
               price: '',
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
               quantity: '',
               waterproof: '',
               anInterface: '',
               hullShape: '',
               price: '',
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
               quantity: '',
               screenSize: '',
               images: [],
               price: '',
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

   furtherCollectorProductPartOne,

   addCodeColorSubProductRequests,
   addPhotoSubProductRequests,
} = addProductSlice.actions
