import { axiosInstance } from '../config/axiosInstants'

export const getCategoryRequest = () => {
   return axiosInstance.get('/v1/brand/get-all')
}

export const getColorsTransformation = (hashCodes) => {
   const params = new URLSearchParams()
   hashCodes.forEach((el) => {
      params.append(`names`, el.codeColor)
   })

   return axiosInstance.get(`/v1/products/colors?${params.toString()}`)
}

export const getAllCategoryRequest = () => {
   return axiosInstance.get('/v1/category')
}

export const getSubCategoryRequest = (id) => {
   return axiosInstance.get(`/v1/category/get-sub-categories?categoryId=${id}`)
}

export const getColors = ({ categoryId }) => {
   return axiosInstance.get(`/v1/products/count-color?categoryId=${categoryId}`)
}

export const filterProductsByCategory = (payload) => {
   const requestData = {
      gadgetType: payload.gadgetType[0],
      sorting: payload.sort ? payload.sort : 'string',
      subCategoryIds:
         payload.subCategoriesId.length === 0 ? [0] : [payload.subCategoriesId],
      brandIds: payload.id.length === 0 ? [0] : payload.id,
      priceStart: payload.minValue,
      priceEnd: payload.maxValue,
      codeColor:
         payload.itemsColorsId.length === 0
            ? ['string']
            : payload.itemsColorsId,
      rom: payload.memory.length === 0 ? [0] : payload.memory,
      ram: payload.memoryRam.length === 0 ? [0] : payload.memoryRam,
      sim: payload.simPhoneArray.length === 0 ? [0] : payload.simPhoneArray,
      processors:
         payload.processorArray.length === 0
            ? ['string']
            : payload.processorArray,
      screenResolution:
         payload.screenArray.length === 0 ? ['string'] : payload.screenArray,
      purposes:
         payload.puprosesArray.length === 0
            ? ['string']
            : payload.puprosesArray,
      videoMemory:
         payload.videoMemoryArray.length === 0 ? [0] : payload.videoMemoryArray,

      screenSize:
         payload.screenSizeArray.length === 0 ? [0] : payload.screenSizeArray,

      screenDiagonal:
         payload.displayDiagonalArray.length === 0
            ? ['string']
            : payload.displayDiagonalArray,

      batteryCapacity:
         payload.tabletBatteryCapacityArray.length === 0
            ? ['string']
            : payload.tabletBatteryCapacityArray,
      housingMaterials:
         payload.materialHousingArray.length === 0
            ? ['string']
            : payload.materialHousingArray,

      materialBracelets:
         payload.materialBraceletsArray.length === 0
            ? ['string']
            : payload.materialBraceletsArray,

      genders:
         payload.floorArray.length === 0 ? ['string'] : payload.floorArray,

      interfaces:
         payload.interfacesArray.length === 0
            ? ['string']
            : payload.interfacesArray,
      hullShapes:
         payload.shapesArray.length === 0 ? ['string'] : payload.shapesArray,
      waterproof: payload.waterProofString
         ? payload.waterProofString
         : 'string',
   }

   return axiosInstance.post(
      `/v1/products/filter?pageSize=${payload.pageSize}&pageNumber=${payload.pageNumber}`,
      requestData
   )
}
