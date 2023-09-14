import { axiosInstance } from '../config/axiosInstants'

export const getCategoryRequest = () => {
   return axiosInstance.get('/v1/brand/get-all')
}
export const getColors = ({ categoryId }) => {
   // console.log('color: ', color)
   // console.log('categoryId: ', categoryId)
   return axiosInstance.get(`/v1/products/count-color?categoryId=${categoryId}`)
}

export const filterProductsByCategory = (payload) => {
   console.log('payload: ', payload)
   const requestData = {
      gadgetType: payload.gadgetType[0],
      sorting: 'string',
      brandIds: payload.id.length === 0 ? [0] : payload.id,
      priceStart: payload.minValue,
      priceEnd: payload.maxValue,
      codeColor: ['string'],
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
      videoMemory: [0],
      screenSize:
         payload.screenSizeArray.length === 0 ? [0] : payload.screenSizeArray,
      screenDiagonal: ['string'],
      batteryCapacity: ['string'],
      housingMaterials: ['string'],
      materialBracelets: ['string'],
      genders: ['string'],
      interfaces: ['string'],
      hullShapes: ['string'],
   }

   return axiosInstance.post(
      `/v1/products/filter?pageSize=${payload.pageSize}&pageNumber=${payload.pageNumber}`,
      requestData
   )
}
